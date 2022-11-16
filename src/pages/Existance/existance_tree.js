import { getAllCategories } from "../../services/getAllCategoryService";
import { useState, useEffect } from "react";
import Tree2 from "./Tree2";
import AddExistNoP from "./AddExistNoP";

export default function Existance_tree() {
  let [mainCategories1, setMainCategories1] = useState([]);
  let [tree, setTree] = useState({});
  const [tree_AllShow_clicked, setTree_AllShow_clicked] = useState(false);
  const [treeShow, setTreeShow] = useState(0);

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

  const tree_AllShow = () => {
    if (tree_AllShow_clicked) {
      setTree_AllShow_clicked(false);
      setTreeShow(2);
    } else {
      setTree_AllShow_clicked(true);
      setTreeShow(1);
    }
  };
  const tree_closeAll = () => {
    setTree_AllShow_clicked(false);
    setTreeShow(2);
  };

  const [addNoP,setAddNoP]=useState(0)
  const AddNoPHandler=()=>{
    setAddNoP(1)
  }

  return (
    <>
      <div className="flex justify-center items-center py-10">
        <h2 className="">درخت دسته بندی ها</h2>
      </div>

      <div className="flex gap-2 justify-center mx-2">
        <button
          className="AddNoP my-4 border hover:border-blue-400 hover:bg-slate-200 hover:shadow-lg transition-all bg-white px-4 py-2 rounded-lg"
          onClick={AddNoPHandler}
        >
          <AddExistNoP addNoP={addNoP}/>
          {/* {treeShow==1?'بستن درخت':'نمایش کامل درخت'} */}
          افزودن موجودیت
        </button>
        <button
          className="heoo my-4 bg-white px-4 py-2 rounded-lg border hover:border-blue-400 hover:bg-slate-200 hover:shadow-lg transition-all"
          onClick={tree_AllShow}
        >
          {treeShow == 1 ? "بستن درخت" : "نمایش کامل درخت"}
        </button>
      </div>
      <Tree2 data={tree} treeShow={treeShow} tree_closeAll={tree_closeAll} />
    </>
  );
}
