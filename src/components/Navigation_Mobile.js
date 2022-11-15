import { withRouter, NavLink } from "react-router-dom";

const items = [
  //   { name: "جدول", to: "/", exact: true },
  { name: "افزودن محصول", to: "/set_mahsol" },
  { name: "درخت موجودیت", to: "/existance_tree" },
  { name: "افزودن موجودیت ", to: "/existance" },
  //   { name: "افزودن معیار", to: "/add_evaluation" },
  //   { name: "امتیاز دهی", to: "/evaluation" },
];

const Navigation_Mobile = () => {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.bottom = "0";
    } else {
      document.getElementById("navbar").style.bottom = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };
  let i=0

  return (
    <nav >
      {/* <div className="bg-red-500 absolute bottom-0 h-10">.</div> */}
      <ul id="navbar" className="grid grid-cols-3 bg-gray-600 w-full  justify-center items-center fixed bottom-0 transition-all">
        {items.map((item) => {
            i++
          return (
            <NavLink
              to={item.to}
              activeClassName="activeLink"
              exact={item.exact || false}
              className="focus:bg-gray-400 transition-all rounded-md text-gray-200 p-0 mx-2"
            >
              <li
                key={item.to}
                className=" py-2  rounded-md hover:bg-gray-400 hover:text-slate-900 transition-all duration-300"
              >
                <p className={`text-center ${i==2?'border-[2px] border-slate-300 rounded-xl py-4  bg-gray-500 ':'px-0 py-2'}`}>{item.name}</p>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation_Mobile;
