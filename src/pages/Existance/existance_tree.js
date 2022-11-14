// import { getAllProducts } from "../../services/getAllProductService";
import { getAllCategories } from "../../services/getAllCategoryService";
import { addTree } from "../../services/addTreetService";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Tree2 from "./Tree2";
import Tree from "react-hyper-tree";
import Modal_Tree from "./Modal_Tree";

export default function Existance_tree() {
  let [mainCategories1, setMainCategories1] = useState([]);
  let [tree, setTree] = useState({});
  const [selectedID, setSelectedID] = useState(0);
  
  // get categories
  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getAllCategories();
      setMainCategories1(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  useEffect(() => {
    make_tree();
  }, [mainCategories1]);

  const submitForm = async (e) => {
    try {
      await addTree(tree);
    } catch (error) {}
  };

  let tree5;
  const make_tree = () => {
    if (mainCategories1.length) {
      tree5 = (function (mainCategories1, root) {
        var t = {};
        mainCategories1.forEach((o) => {
          Object.assign((t[o.id] = t[o.id] || {}), o);
          t[o.PARENTID] = t[o.PARENTID] || {};
          t[o.PARENTID].children = t[o.PARENTID].children || [];
          t[o.PARENTID].children.push(t[o.id]);
        });
        return t[root].children;
      })(mainCategories1, 0);
    }
    setTree(tree5);
  };

  const selectedIDHandler=(value)=>{
    setSelectedID(value)
  }

  return (
    <>
      {/* <button
        onClick={submitForm}
        className="bg-slate-300  border border-stone-400 hover:bg-slate-600 transition-all hover:text-slate-100 px-5 py-2 rounded-lg mx-auto my-4"
      >
        ثبت
      </button> */}
      {/* <Tree data={tree} /> */}
      <div className="flex justify-center items-center py-10">
        <h2 className="">درخت دسته بندی ها</h2>
      </div>
      <Tree2 data={tree} />
      {/* {selectedID != 0 ? <Modal_Tree selectedID={selectedID} /> : ""} */}
    </>
  );
}
