// import "./comment.css";
export default function Products({ data }) {
  console.log(data.family_tree.parent_0);
  let obj_keys = Object.keys(data.family_tree);
  let obj = { ...obj_keys };
  let size = Object.keys(obj).length;
  console.log(size);
  return (
    <>
      <h2>{data.family_tree.parent_0}</h2>
    </>
    
    // <div>
    //   <div class="flex flex-col gap-4 mb-4">
    //     <div class="bg-gray-100 mx-12 border border-style grid grid-cols-1 lg:grid-cols-3 gap-4 px-2 pt-4 pb-6 rounded-lg relative">
    //       {/* <!-- pic --> */}
    //       <div class="flex flex-col gap-4 items-center lg:flex-row justify-around">
    //         <div class="relative">
    //           <img
    //             src="../utilites/img/avatar.png"
    //             alt="avatar"
    //             class="w-12 h-12 rounded-full"
    //           />
    //           {/* <div
    //               class="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 animate-pulse border-white bg-green-500"
    //             ></div> */}
    //         </div>
    //         <div class="flex flex-col items-center lg:items-start">
    //           <h3 class="text-sm font-medium title-color ">
    //             {data.mahsolName}
    //           </h3>
    //           {/* <h4 class="text-sm font-medium title-color">خشکبار</h4> */}
    //         </div>
    //       </div>
    //       {/* <!-- destination --> */}
    //       <div class="flex items-center justify-between lg:justify-center text-sm title-color ">
    //         <h3 class="font-medium lg:hidden">مجموعه</h3>
    //         <h3 class="font-normal">{data.select_0}</h3>
    //       </div>
    //       <div class="flex px-4  lg:items-center lg:justify-center lg:gap-4 lg:px-0">
    //         <a
    //           href="#"
    //           class="w-full lg:w-auto lg:px-6 h-10 flex-center text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition-colors"
    //         >
    //           جزئیات
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
