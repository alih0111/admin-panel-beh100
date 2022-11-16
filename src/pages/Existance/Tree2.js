import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./tree.css";
import { getAllCategories } from "../../services/getAllCategoryService";
import AddExist from "./AddExist";
import Modal_Tree from "./delete_modal";

const Tree2 = ({ data, treeShow, tree_closeAll }) => {
  return (
    <div className="d-tree w-fit ">
      <ul className="flex flex-col d-tree-container gap-1 border-r rounded-lg border-slate-400">
        {data != undefined && data.length >= 1
          ? data.map((tree) => (
              <TreeNode
                node={tree}
                treeShow={treeShow}
                tree_closeAll={tree_closeAll}
              />
            ))
          : "loading"}
      </ul>
    </div>
  );
};

const TreeNode = ({ node, treeShow, tree_closeAll }) => {
  let [mainData, setMainData] = useState();
  let [modalSelect, setModalSelect] = useState(0);
  let [addModal, setAddModal] = useState(0);

  const [childVisible, setChildVisiblity] = useState(false);
  const hasChild = node.children ? true : false;

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getAllCategories();
        setMainData(data);
      } catch (error) {}
    };
    localFetch();
  }, []);

  const deleteHandler = async () => {
    setModalSelect(1);
  };

  const addModalHandler = () => {
    setAddModal(1);
  };

  // const deleteHandlerChild = async (last_id) => {
  //   await deleteCategory(last_id);
  //   mainData.map(async (item) => {
  //     if (item.PARENTID == last_id) {
  //       await deleteHandlerChild(item.id);
  //     } else {
  //       window.location.reload();
  //     }
  //   });
  // };

  const num_child = (id) => {
    let i = 0;
    if (mainData) {
      mainData.map((p) => {
        if (p.PARENTID == id) {
          i++;
        }
      });
    }
    return i;
  };

  return (
    <>
      <li className="bg-white p-2 mr-2 sm:mr-0  justify-center rounded-lg d-tree-node flex flex-col">
        <div
          className=" flex activeParent items-center"
          onClick={(e) => {
            setChildVisiblity((v) => !v);
          }}
        >
          {/* start svg */}
          {hasChild && (
            <div
              className={`tree_node flex items-center d-inline d-tree-toggle ${
                childVisible || treeShow == 1 ? "active" : ""
              }`}
            >
              {/* <FontAwesomeIcon icon='caret-right' /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="m-2 mr-[2px] w-4 h-4 transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          )}
          {!hasChild && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4  ml-2 mr-[2px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          {/* end svg */}

          <div className="flex flex-col d-tree-head border border-white hover:border-indigo-400 rounded-lg">
            {/* <i className={`mr-1 ${node.icon}`}></i> */}
            <div className="tree_icons_parents transition-all hover:bg-slate-200 hover:shadow-lg w-60 rounded-lg p-2 flex items-center justify-between cursor-pointer">
              {/* header */}
              <span className="pr-2 w-full">
                {node.NAME}{" "}
                <span className="text-gray-500">{`(${num_child(
                  node.id
                )})`}</span>
              </span>
              <div
                className={`tree_icons ${
                  addModal || modalSelect ? "flex" : "hidden"
                } transition-all`}
              >
                {/* add */}
                {/* <Link to={`/add/${node.id}`}> */}
                <button
                  onClick={(e) => addModalHandler(e)}
                  className="flex items-center text-sm bg-white border border-green-500 hover:bg-green-600 hover:border-green-600 text-green-600 p-[1px] transition-all hover:text-white mx-1 rounded-lg"
                >
                  <AddExist addModal={addModal} node={node} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                {/* </Link> */}
                {/* edit */}
                <Link to={`/edit/${node.id}`}>
                  <button className="flex items-center hover:bg-sky-600 hover:text-white bg-white text-sm border border-sky-600 text-sky-600 mx-1 p-[1px] rounded-lg transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </Link>
                {/* delete */}
                <button
                  onClick={() => deleteHandler()}
                  className="flex items-center bg-white text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white p-[1px] mx-1 rounded-lg transition-all"
                >
                  <Modal_Tree setModalNum={modalSelect} node={node} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </button>
                {/* جزئیات */}
                <Link to={`/edit/${node.id}`}>
                  <button className="flex items-center bg-white text-sm hover:bg-indigo-600 hover:text-white border border-indigo-600 text-indigo-600 p-[1px] mx-1 rounded-lg transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* {console.log(treeShow)} */}
        {hasChild && (childVisible || treeShow == 1) && (
          <div className="d-tree-content mr-2">
            <ul className="flex flex-col d-tree-container">
              <Tree2
                data={node.children}
                treeShow={treeShow}
                tree_closeAll={tree_closeAll}
              />
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default Tree2;
