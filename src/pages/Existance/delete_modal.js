import { useState, useEffect } from "react";
import "./tree.css";
import { deleteCategory } from "../../services/deleteCategoryService";
import { getAllCategories } from "../../services/getAllCategoryService";

export default function Modal_Tree ({ setModalNum, node })  {
    let [mainData, setMainData] = useState();
    let[deletemodalNum,setDeleteModalNum]=useState(0)

    useEffect(() => {
      const localFetch = async () => {
        try {
          const { data } = await getAllCategories();
          setMainData(data);
        } catch (error) {}
      };
      localFetch();
    }, []);
  
    const deleteHandler = async (e, id) => {
      e.preventDefault();
      try {
        deleteHandlerChild(id);
      } catch (error) {}
    };
  
    const deleteHandlerChild = async (last_id) => {
      await deleteCategory(last_id);
      mainData.map(async (item) => {
        if (item.PARENTID == last_id) {
          await deleteHandlerChild(item.id);
        } else {
          window.location.reload();
        }
      });
    };
  
    const childList = (id) => {
      let cc = [];
      mainData.map((item) => {
        if (item.PARENTID == id) cc.push(item.NAME);
      });
      if (cc.length > 0)
        return { __html: `زیر شاخه هایی که حذف خواهند شد:  ${cc}` };
    };
  
    const [checkVal, setCheckVal] = useState(false);
    const checkboxHandler = () => {
      let c = document.getElementById("add_parent_checkbox1");
      if (c.checked == true) {
        setCheckVal(true);
      } else {
        setCheckVal(false);
      }
    };
  
    const checkboxChange = (e) => {
      // e.target.checked=!e.target.checked
      console.log(e.target.checked);
    };
  
    return (
      <>
        {setModalNum == 1 ? (
          <>
            <div onClick={()=>{console.log(setModalNum)
               setModalNum=0}} className="inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-blur-sm shadow-xl w-screen h-screen z-10 absolute ">
              <div className="z-20 absolute flex justify-center items-center flex-col bg-slate-100 rounded-lg w-80 p-6 mx-auto">
                <div className="flex-col">
                  <div className="block mb-1 text-slate-400">
                    نام موجودیت / دسته بندی{" "}
                  </div>{" "}
                  <div
                    id="container"
                    className="flex flex-col items-center justify-center gap-4 "
                  >
                    <p className="text-slate-700 border border-slate-500 rounded-lg flex mx-auto py-2 px-6 m-3 mb-1">
                      {node.NAME}
                    </p>
  
                    {/* <p className="childListParents" id="chichi">{childList(node.id)}</p> */}
                    <div
                      className="text-gray-600 mb-3"
                      dangerouslySetInnerHTML={childList(node.id)}
                    />
                    {/* <div className="chichi"></div> */}
                  </div>{" "}
                </div>{" "}
                {/* <input type="checkbox"/>
                <div className="flex mb-4 gap-2">
                 
                </div> */}
                {/* <span className=" p-1 rounded-lg border border-indigo-400"> */}{" "}
                {/* buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      window.location.reload();
                    }}
                    className="bg-transparent text-slate-500 px-4 py-1 rounded-lg border border-slate-500"
                  >
                    انصراف{" "}
                  </button>{" "}
                  <button
                    onClick={(e) => deleteHandler(e, node.id)}
                    className="bg-transparent text-red-500 px-4 py-1 rounded-lg border border-red-500 hover:bg-red-500 hover:text-white transition-all"
                  >
                    حذف{" "}
                  </button>{" "}
                </div>{" "}
                {/* </span> */} {/* <button type="submit">حذف</button> */}{" "}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </>
    );
  };
  