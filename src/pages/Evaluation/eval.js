import { useEffect, useState } from "react";
// import "./newComment.css";
// import { getAllCategories } from "../../services/getAllCategoryService";
// import { addNewProduct } from "../../services/addNewProductService";
// import {getAllMeyar} from "../../services/getAllMeyarService"
export default function NewComment({ history }) {
  const [meyar, setMeyar] = useState([]);

  // const [mahsolName, setMahsolName] = useState();
  // const [categoriesplus, setCategoriesplus] = useState({});
  // let text;

  let num_select = 1;
  useEffect(() => {
    const fetchContacts = async () => {
      // const { data } = await getAllMeyar();
      // setMeyar(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  // useEffect(() => {
  //   createCategoriesList();
  // }, [categories]);

  // const createMahsolList = () => {
  //   let result = `<option value="" className="bg-slate-500 text-slate-200">
  //   محصول را انتخاب کنید
  // </option>`;
  //   meyar.forEach((element) => {
  //     result += `<option className="bg-slate-500 text-slate-200" value=${element.id}>
  //   ${element.Meyar}
  // </option>`;
  //   });
  //   const meyarDom = document.getElementById("product-category");
  //   categoryDom.innerHTML = result;
  // };

  const createMeyarList = () => {
    let result = `<option value="" className="bg-slate-500 text-slate-200">
    معیار را انتخاب کنید
  </option>`;
    meyar.forEach((element) => {
      result += `<option className="bg-slate-500 text-slate-200" value=${element.id}>
    ${element.Meyar}
  </option>`;
    });
    // const meyarDom = document.getElementById("product-category");
    // categoryDom.innerHTML = result;
  };

  // const createCategoriesListPlus = (num_select) => {
  //   let result = `<option value="" className="bg-slate-500 text-slate-200">
  //   معیار را انتخاب کنید
  // </option>`;
  //   // let tiMin1 = `title_${num_select - 1}`;
  //   // let ti = `title_${num_select}`;
  //   categories.forEach((element) => {
  //     // if (element[tiMin1] == text) {
  //       result += `<option className="bg-slate-500 text-slate-200" value=${element.id}>
  //   ${element[ti]}
  // </option>`;
  //     // }
  //   });
  //   const categoryDom = document.getElementById(`mahsol_select_${num_select}`);
  //   categoryDom.innerHTML = result;
  // };

  // const setCategoriesHandlerplus = (e) => {
  //   text = e.target.options[e.target.selectedIndex].text;
  //   categoriesplus[e.target.name] = text;
  // };

  // const addNewCatSelect = (e) => {
  //   e.preventDefault();
  //   let container = document.getElementById("mahsol-title");
  //   var selectList = document.createElement("select");
  //   selectList.onchange = setCategoriesHandlerplus;
  //   selectList.name = `select_${num_select}`;
  //   selectList.id = `mahsol_select_${num_select}`;
  //   selectList.className =
  //     " bg-transparent w-full h-10 mb-4 rounded-lg text-sm font-medium title-color  outline outline-1 outline-gray-200    focus:border-gray-300 focus:ring-0 transition-shadow ease-out focus:shadow-md";
  //   container.appendChild(selectList);
  //   createCategoriesListPlus(num_select);
  //   num_select++;
  // };

  const submit_product = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addNewProduct({
  //       mahsolName,
  //       ...categoriesplus,
  //     });
  //     history.push("/");
  //   } catch (error) {}
  };

  // const MahsolName = (e) => {
  //   setMahsolName(e.target.value);
  // };

  return (
    <>
      {/* title */}
      <div className="flex justify-center items-center py-10">
        <h2 className="">امتیازدهی</h2>
      </div>

      {/* menu */}
      <section className="px-4 mb-10 flex justify-center">
        <div className="bg-gray-100  flex flex-col rounded-2xl sm:w-[56rem]  mt-0">
          <form
            onSubmit={submit_product}
            className=" px-4 rounded-xl flex flex-col mb-12"
          >
            <div className="flex-center w-full h-14 border-b border-style text-base title-color font-medium flex justify-center items-center">
              ثبت امتیاز محصولات
            </div>
            {/* <!-- form --> */}
            <div className="grid grid-cols-1 px-4 pt-4 sm:px-0 sm:grid-cols-2 ">
              <div className="pt-4 sm:pt-0 sm:px-4">
                <h4 className="font-medium title-color text-base mb-4">
                  انتخاب محصول
                </h4>
                <div id="mahsol-title">
                  <select
                    // name="select_0"
                    // onChange={setCategoriesHandlerplus}
                    id="product-category"
                    className="select_0 bg-transparent w-full h-10 mb-4 rounded-lg text-sm font-medium title-color  outline outline-1 outline-gray-200    focus:border-gray-300 focus:ring-0 transition-shadow ease-out focus:shadow-md"
                  ></select>
                </div>
              </div>
              {/* <!-- معیار --> */}
              <div className="pt-4 sm:pt-0 sm:px-4">
                <h4 className="font-medium title-color text-base mb-4">
                  انتخاب معیار
                </h4>
                <div id="mahsol-title">
                  <select
                    // name="select_0"
                    // onChange={setCategoriesHandlerplus}
                    id="meyar_select"
                    className="select_0 bg-transparent w-full h-10 mb-4 rounded-lg text-sm font-medium title-color  outline outline-1 outline-gray-200    focus:border-gray-300 focus:ring-0 transition-shadow ease-out focus:shadow-md"
                  ></select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-x-4 ">
              <button
                type="submit"
                id="add-new-product"
                className="flex-1 bg-slate-500 text-slate-200 rounded-xl p-2"
              >
                ثبت کالا
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
