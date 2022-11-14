import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
// import FullComment from './pages/FullComment/FullComment'
// import NewComment from  './pages/NewComment/NewComment'
import Evaluation from "./pages/Evaluation/eval";
import Existance from "./pages/Existance/existance"
import Add_Evaluation from "./pages/Add_Evaluation/add_evaluation";
import Existance_tree from "./pages/Existance/existance_tree";
// import EditExistance from "./pages/Existance/EditExistance"
import EditExist from "./pages/Existance/EditExist";
import Set_Mahsol from "./pages/Mahsol/Set_Mahsol";
import AddExist from "./pages/Existance/AddExist";

const routes = [

  { path: "/set_mahsol", component: Set_Mahsol },

  { path: "/edit/:id", component: EditExist },
  { path: "/add/:id", component: AddExist },
  { path: "/existance_tree", component: Existance_tree },
  { path: "/existance", component: Existance },
  { path: "/evaluation", component: Evaluation },
  { path: "/add_evaluation", component: Add_Evaluation },
  // { path: "/new-comment", component: NewComment },
  // { path: "/full-comment/:id", component: FullComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
