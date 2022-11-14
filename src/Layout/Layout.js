import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
// import mobileSidebar from "../components/mobileSidebar";
import MobileSidebar from "../components/mobileSidebar";

export default function Layout({ children }) {

  // const hambergerHandler = () => {
  //   const sidebar = document.querySelector(".sidebar");
  //   const hamberger = document.querySelector(".hamberger");
  //   const main_content = document.querySelector(".main_content");
  //   sidebar.classList.remove("hidden");
  //   hamberger.classList.add("hidden");
  //   main_content.classList.remove("col-span-4");
  //   main_content.classList.add("col-span-3");
  // };
  // const main_content_clicked = () => {
  //   const sidebar = document.querySelector(".sidebar");
  //   const hamberger = document.querySelector(".hamberger");
  //   const main_content = document.querySelector(".main_content");
  //   sidebar.classList.add("hidden");
  //   hamberger.classList.remove("hidden");
  //   main_content.classList.add("col-span-4");
  //   main_content.classList.remove("col-span-3");
  // };

  return (
    <>
      {/* <content/> */}
      <div className="absolute inset-0 bg-slate-200 -z-10"></div>
      <div className="grid grid-cols-4 gap-2 bg-gray-200">
        {/* sidebar */}
        {/* <div className=" sm:hidden hamberger" 
        onClick={hambergerHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 absolute m-10 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div> */}
        
        <div className="hidden sm:block sidebar">
          <Sidebar />
        </div>
        {/* main content */}
        <div
          className="sm:col-span-3 col-span-4 main_content"
          // onClick={main_content_clicked}
        >
          {children}
        </div>
        {/* mobile sidebar */}
        
      </div>
      <div className="sm:hidden mt-24">
        <MobileSidebar/>
      </div>          
    </>
  );
}
