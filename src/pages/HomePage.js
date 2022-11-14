// import Comment from "../Comment/Comment";
// import FullComment from "../FullComment/FullComment";
// import NewComment from "../../components/NewComment/NewComment";
// import { getAllComments } from "../../services/getAllCommentService";
// import "./Comments.css";
import { useEffect, useState } from "react";
import Products from "../components/Products";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
import { getAllCategories } from "../services/getAllCategoryService";
// import { getAllProducts } from "../services/getAllProductService";

export default function HomePage() {
  const [Comments, setComments] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAllCategories();
        setCategories(data);
      } catch (error) {
        setError(true);
      }
    };
    getCategories();
  }, []);

  const renderCategories = () => {
    let rederedValue = <p>Loading...</p>;
    if (error) {
      rederedValue = <p>fetching data failed !</p>;
      // toast.error("there is an error");
    }

    if (categories && !error) {

      ////////////////////////////
      // rederedValue=categories
      // console.log(categories);
      ////////////////////////////
      // console.log(categories);
      rederedValue = categories.map((c) => (
        <Products data={c} />        
        // <div>
        //   <p>name: {c.mahsolName}</p>
        // </div>
      ));
    }
    return rederedValue;
  };

  return (
    <>
      <div className="flex justify-center items-center py-10">
        <h2 className="">جدول مقادیر</h2>
      </div>
      <section class="container mb-10 ">
        {/* <div class="hidden lg:grid grid-cols-3 gap-4 p-4 text-xs font-medium title-color">
          <div class="text-center">محصول</div>
          <div class=" text-center">مجموعه</div>
          <div class=" text-center">اقدامات</div>
        </div> */}
        {/* {renderCategories()} */}
      </section>
    </>
  );
}
