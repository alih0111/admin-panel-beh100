import { withRouter, NavLink } from "react-router-dom";

const items = [
  { name: "جدول", to: "/", exact: true },
  { name: "افزودن محصول", to: "/set_mahsol" },
  { name: "افزودن موجودیت / دسته بندی", to: "/existance" },
  { name: "درخت موجودیت", to: "/existance_tree" },
  { name: "افزودن معیار", to: "/add_evaluation" },
  { name: "امتیاز دهی", to: "/evaluation" },
];

const Navigation = () => {
  return (
    <nav>
      <ul className="bg-gray-600 w-full h-screen top-0 py-2 px-4 flex flex-col ">
        <div className="flex justify-center">
          <span className="text-white pt-4 mb-2 text-center">پنل ادمین</span>
        </div>
        <div className="w-full bg-gray-300 h-0.5 mb-4"></div>
        {items.map((item) => {
          return (
            <NavLink
             to={item.to}
              activeClassName="activeLink"
              exact={item.exact || false}
              className="focus:bg-gray-400 transition-all rounded-md text-gray-200 p-0"                          
            >              
              <li
                key={item.to}
                className="py-2 px-2 pr-4 m-1 rounded-md hover:bg-gray-400 hover:text-slate-900 transition-all duration-300"
              >
                {item.name}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
