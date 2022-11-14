import { useState } from "react";
// import {addNewMeyar} from '../../services/addNewMeyarService'
// import "./newComment.css";
// import { addNewComment } from "../../services/addNewCommentService";
// import { addNewCategory } from "../../services/addNewCategoryService";
// import { getAllComments } from "../../services/getAllCommentService";
export default function Add_Evaluation({ history }) {
  const [meyar, setMeyar] = useState();

  const changeHandler = (e) => {
    setMeyar(e.target.value);
  };

  const submitForm=async(e)=>{
    e.preventDefault();
    if (!meyar) {
      alert("تکمیل فیلد اجباری است");
      return;
    }
    try {
      // await addNewMeyar({
      //   meyar
      // });
      history.push("/");
    } catch (error) {}
  }

  return (
    <>
      <div className="flex justify-center items-center py-10">
        <h2 className="">افزودن معیار</h2>
      </div>

      <form
        onSubmit={submitForm}
        className="bg-gray-100 p-4 rounded-xl flex flex-col gap-y-4 sm:max-w-[34rem] sm:mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
      >
        <div>
          <label htmlFor="category-title" className="block mb-1 text-slate-400">
            نام معیار
          </label>
          <div id="container" className="flex flex-wrap gap-4">
            <input
              value={meyar}
              type="text"
              name="title_0"
              id="category-title"
              className="bg-transparent rounded-lg border-slate-500  text-slate-400 focus:ring-2   m-0 min-w-[20rem] px-4 h-10  font-medium  outline  outline-1 outline-gray-200 focus:border-gray-300  transition-shadow ease-out focus:shadow-md mb-6"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            type="button"
            className=" flex-1 border border-slate-400 text-slate-500 rounded-xl p-2"
          >
            انصراف
          </button>
          <button
            // onClick={addNewCategory}
            type="submit"
            id="add-new-category"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl p-2"
          >
            ثبت موجودیت
          </button>
        </div>
      </form>
    </>
  );
}
