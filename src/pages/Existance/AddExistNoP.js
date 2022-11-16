import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addNewCategory } from "../../services/addNewCategoryService";

export default function AddExistNoP({ addNoP }) {
  const [newExist, setNewExist] = useState();
  let [fileObj, setFileObj] = useState({ id: 0, NAME: "0", PARENTID: 0 });
//   let [id_url, setId_url] = useState();

  const changeHandler = (e) => {
    setNewExist(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (newExist == "" || newExist == undefined) {
      alert("تکمیل فیلد اجباری است");
      return;
    }

    // id_url = id;
    fileObj = { id: uuid(), NAME: newExist, PARENTID: 0 };
    // fileObj.PARENTID = 0;

    try {
      await addNewCategory(fileObj);
    //   history.push("/existance_tree");
    } catch (error) {}
    window.location.reload();
  };

  return (
    <>
      {addNoP == 1 ? (
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
