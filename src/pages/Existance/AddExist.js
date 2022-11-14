import { useState, useEffect } from "react";
import { deleteCategory } from "../../services/deleteCategoryService";
import { getAllCategories } from "../../services/getAllCategoryService";
import { getOneExist } from "../../services/getOneExistService";
import updateExist from "../../services/updateExistService";
import { v4 as uuid } from "uuid";
import { addNewCategory } from "../../services/addNewCategoryService";

export default function AddExist({ history, match }) {
  const [exist, setExist] = useState();
  const [newExist, setNewExist] = useState();
  let [mainData, setMainData] = useState();
  let [fileObj, setFileObj] = useState({ id: 0, NAME: "0", PARENTID: 0 });
  let [id_url,setId_url]=useState()

  useEffect(() => {
    const localFetch = async () => {
      try {
        // const { data } = await getOneExist(match.params.id);
        // console.log(match.params.id);
        setId_url(match.params.id)
      } catch (error) {}
    };
    localFetch();
  }, []);

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getAllCategories();
        setMainData(data);
      } catch (error) {}
    };
    localFetch();
  }, []);

  const changeHandler = (e) => {
    setNewExist(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (newExist == "" || newExist == undefined) {
      alert("تکمیل فیلد اجباری است");
      return;
    }

    // choosed nothing
    // if (selectVal == undefined) {

    fileObj = { id: uuid(), NAME: newExist, PARENTID: 0 };
    fileObj.PARENTID = id_url;
    // }
    // choosed something
    // else {
    //   fileObj.id = uuid();
    //   fileObj.NAME = inputCategories;
    // }

    try {
      await addNewCategory(fileObj);
      history.push("/existance_tree");
    } catch (error) {}
  };

  const cancelHandler = () => {
    history.push("/existance_tree");
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        className="flex justify-center items-center flex-col mt-10 bg-slate-100 rounded-lg w-80 p-6 mx-auto"
      >
        {/* input */}
        <div className="flex-col">
          <label htmlFor="category-title" className="block mb-1 text-slate-400">
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
        <input id="add_parent" type="checkbox"/>
        <label htmlFor="add_parent" className="text-gray-600">پدر اضافه شود</label>
        </div>
        </div>{" "}
        {/* buttons */}
        <div className="flex gap-2">
          
          <button
            type="submit"
            className="bg-indigo-500 text-white px-8 py-1 rounded-lg border border-indigo-400 hover:bg-indigo-600 transition-all"
          >
            ثبت{" "}
          </button>{" "}
          <button
            onClick={cancelHandler}
            className="bg-transparent text-slate-500 px-4 py-1 rounded-lg border border-slate-500"
          >
            انصراف{" "}
          </button>{" "}
        </div>{" "}
      </form>
    </>
  );
}
