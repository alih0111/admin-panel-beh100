import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Select from "react-select";
import { getAllCategories } from "../../services/getAllCategoryService";
import "./Set_Mahsol.css";

export default function NewComment({ history }) {

  let [inputCategories, setInputCategories] = useState();
  const [mainCategories, setMainCategories] = useState([]);
  let [selectVal, setSelectVal] = useState();
  let [optionList, setOptionList] = useState([]);
  let [fileObj, setFileObj] = useState({ id: 0, NAME: "0", PARENTID: 0 });

  // fetch categories from db
  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getAllCategories();
      setMainCategories(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  // call to set select options
  useEffect(() => {
    createCategoriesList();
  }, [mainCategories]);

  // give input value
  const setInputCategoriesHandler = (e) => {
    setInputCategories(e.target.value);
  };

    // set select options
    const createCategoriesList = () => {
      mainCategories.forEach((element) => {
        setOptionList((prevArray) => [
          ...prevArray,
          {
            value: element.NAME,
            label: element.NAME,
            id: element.id,
          },
        ]);
      });
    };
  
    // onchange Select
    const getSelectVal = (e) => {
      const text = e.value;
      setSelectVal(text);
      mainCategories.forEach((element) => {
        if (element.id == e.id) {
          fileObj.PARENTID = element.id;
        } else {
        }
      });
    };
  
    const submitForm = async (e) => {
      e.preventDefault();
      if (inputCategories == "") {
        alert("تکمیل فیلد اول اجباری است");
        return;
      }
  
      // choosed nothing
      if (selectVal == undefined) {
        fileObj = { id: uuid(), NAME: inputCategories, PARENTID: 0 };
      }
      // choosed something
      else {
        fileObj.id = uuid();
        fileObj.NAME = inputCategories;
      }
  
      try {
        // await addNewCategory(fileObj);
        history.push("/existance_tree");
      } catch (error) {}
    };  

  return (
    <>
      <div className="flex justify-center items-center py-10">
        <h2 className="">افزودن محصول</h2>
      </div>

      {/* محصول */}
      <form
        // onSubmit={submitForm}
        className="bg-gray-100 p-4 rounded-xl flex flex-col gap-y-4 sm:max-w-[34rem] sm:mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
      >
        <div className="grid gap-5 sm:grid-cols-2 items-center justify-center mb-8">
          {/* input */}
          <div className="flex-col mx-8">
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              نام محصول
            </label>
            <div id="container" className="flex gap-4 w-full">
              <input
                value={inputCategories}
                type="text"
                name="title_0"
                id="category-title"
                className="w-full rounded-md border-slate-400  border-[1px] text-slate-400 px-4 h-[38px] font-medium outline outline-1 outline-gray-200 focus:border-blue-500 transition-shadow ease-out focus:shadow-md focus:border-2 "
                onChange={setInputCategoriesHandler}
              />
            </div>
          </div>
          {/* start selectbox */}
          <div className=" sm:pt-0 mx-8">
            <div className="flex-col">
              <h4 className="block mb-1 text-slate-400  ">انتخاب موجودیت</h4>
              <div id="mahsol-title">
                <Select
                  placeholder="والد را انتخاب کنید"
                  options={optionList}
                  name="select_0"
                  onChange={getSelectVal}
                  className="select_0 bg-transparent h-10  rounded-lg text-sm font-medium title-color  outline outline-1 outline-gray-200  focus:border-gray-300 focus:ring-0 transition-shadow ease-out focus:shadow-md"
                ></Select>
              </div>
            </div>
          </div>
          {/* end selectbox */}
        </div>
        <div className="flex justify-end gap-4 sm:mx-8 mx-auto">
          <button
            type="button"
            className=" border border-slate-400 text-slate-500 rounded-xl p-2"
          >
            انصراف
          </button>
          <button
            // onClick={addNewCategory}
            type="submit"
            id="add-new-category"
            className=" bg-slate-500 hover:bg-slate-700 transition-all text-slate-200 rounded-xl p-2"
          >
            ثبت محصول
          </button>
        </div>
      </form>
    </>
  );
}