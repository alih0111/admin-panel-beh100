import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addNewCategory } from "../../services/addNewCategoryService";
import updateExist from "../../services/updateExistService";

export default function AddExist({ addModal, node }) {
  const [newExist, setNewExist] = useState();
  let [fileObj, setFileObj] = useState({ id: 0, NAME: "0", PARENTID: 0 });
  let [id_url, setId_url] = useState(0);
  const [checkVal, setCheckVal] = useState(false);

  const changeHandler = (e) => {
    setNewExist(e.target.value);
  };

  const checkboxHandler = () => {
    let c = document.getElementById("add_parent_checkbox");
    if (c.checked == true) {
      setCheckVal(true);
    } else {
      setCheckVal(false);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (newExist == "" || newExist == undefined) {
      alert("تکمیل فیلد اجباری است");
      return;
    }

    let id=uuid()
    // console.log(c.checked);
    if (checkVal) {
      id_url = node.PARENTID;

      let node2={'id':node.id,'NAME':node.NAME,"PARENTID":id}
      // node2.NAME=node.NAME
      // node2.PARENTID=id
      try {
        console.log(node2);
        await updateExist(node.id,node2)
        // history.push("/existance_tree");
      } catch (error) {}
    } else {
      id_url = node.id;
    }

    fileObj = { id: id, NAME: newExist, PARENTID: 0 };
    fileObj.PARENTID = id_url;

    console.log(fileObj);
    try {
      await addNewCategory(fileObj);
      // history.push("/existance_tree");
    } catch (error) {}
    window.location.reload();
  };

  return (
    <>
      {addModal == 1 ? (
        <div className="inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-blur-sm shadow-xl w-screen h-screen z-10 absolute ">
          <form
            // onSubmit={submitForm}
            className="z-20 absolute flex justify-center items-center flex-col bg-slate-100 rounded-lg w-80 p-6 mx-auto"
          >
            <div className="flex-col">
              <label
                htmlFor="category-title"
                className="block mb-1 text-slate-400"
              >
                نام دسته بندی{" "}
              </label>{" "}
              <div id="container" className="flex gap-4 ">
                <input
                  value={newExist}
                  type="text"
                  name="name"
                  id="category-title"
                  autofocus
                  className=" rounded-md border-slate-400 border-[1px] text-slate-600 m-0  px-4 h-9 font-medium  outline  outline-1 outline-gray-200 focus:border-blue-500 transition-shadow ease-out focus:shadow-md mb-6 focus:border-2 "
                  onChange={changeHandler}
                />{" "}
              </div>{" "}
              <div className="flex mb-4 gap-2">
                <input
                  id="add_parent_checkbox"
                  type="checkbox"
                  onClick={checkboxHandler}
                />
                <label htmlFor="add_parent_checkbox" className="text-gray-600">
                  پدر اضافه شود
                </label>
              </div>
            </div>{" "}
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
                type="submit"
                onClick={submitForm}
                className="bg-transparent text-green-700 px-6 py-1 rounded-lg border border-green-700 hover:bg-green-500 hover:text-white transition-all"
              >
                ثبت{" "}
              </button>{" "}
            </div>{" "}
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
