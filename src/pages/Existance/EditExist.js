import { useState,useEffect } from "react";
import { deleteCategory } from "../../services/deleteCategoryService";
import { getAllCategories } from "../../services/getAllCategoryService";
import {getOneExist} from '../../services/getOneExistService'
import updateExist from "../../services/updateExistService";

export default function EditExist({ history, match }){
    const [exist, setExist] = useState();
    const [newExist, setNewExist] = useState();
    let [mainData,setMainData]=useState()

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneExist(match.params.id);
        setExist(data);
        setNewExist(data.NAME)
      } catch (error) {}
    };
    localFetch();
  }, []);

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getAllCategories()
        setMainData(data)
      } catch (error) {}
    };
    localFetch();
  }, []);

  const changeHandler=(e)=>{
    setNewExist(e.target.value)
  }

  const deleteHandler =async(e) => {
    e.preventDefault();
    // exist.NAME=newExist;
    try {
      let last_id=exist.id
      deleteHandlerChild(last_id)
      // await deleteCategory(exist.id)
      // // const { data } = await getAllCategories()
      // mainData.map(async(item)=>{if(item.PARENTID==exist.id)
      //   {
      //     await deleteCategory(item.id)
      //   }
      // })
      history.push("/existance_tree");
    } catch (error) {}
  }

  const deleteHandlerChild=async(last_id)=>{
    await deleteCategory(last_id)
    mainData.map(async(item)=>{if(item.PARENTID==last_id)
      {
        // await deleteCategory(item.id)
       await deleteHandlerChild(item.id)
      }
    })
  }

  const submitForm=async (e) => {
    e.preventDefault();
    exist.NAME=newExist;
    try {
      await updateExist(exist.id,exist)
      history.push("/existance_tree");

    } catch (error) {}
  }

  return(
    <>
     <form
      onSubmit={submitForm}
      className="flex justify-center items-center flex-col mt-10 bg-slate-100 rounded-lg w-80 p-6 mx-auto"
    >
      <div className="flex-col">
        <label htmlFor="category-title" className="block mb-1 text-slate-400">
          نام موجودیت{" "}
        </label>{" "}
        <div id="container" className="flex gap-4 ">
          <input
            value={newExist}
            // value={newExist!=undefined?newExist:''}
            type="text"
            name="name"
            id="category-title"
            className=" rounded-md border-slate-400 border-[1px] text-slate-600 m-0  px-4 h-9 font-medium  outline  outline-1 outline-gray-200 focus:border-blue-500 transition-shadow ease-out focus:shadow-md mb-6 focus:border-2 "
            onChange={changeHandler}
          />{" "}
        </div>{" "}
      </div>{" "}
      {/* <span className=" p-1 rounded-lg border border-indigo-400"> */}{" "}
      <div className="flex gap-2">
        <button className="bg-transparent text-slate-500 px-4 py-1 rounded-lg border border-slate-500">
          انصراف{" "}
        </button>{" "}
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-1 rounded-lg border border-indigo-400 hover:bg-indigo-600 transition-all"
        >
          ثبت تغییرات{" "}
        </button>{" "}
        <button
          onClick={deleteHandler}
          className="bg-transparent text-red-500 px-4 py-1 rounded-lg border border-red-500 hover:bg-red-500 hover:text-white transition-all"
        >
          حذف{" "}
        </button>{" "}
      </div>{" "}
      {/* </span> */} {/* <button type="submit">حذف</button> */}{" "}
    </form>
    </>
  )
}