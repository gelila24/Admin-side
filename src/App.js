import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import Home from "./Pages/Home/Home"
import RoutineCheck from "./Pages/RoutineCheck/RoutineCheck";
import { Login } from "./Login/Login";
import ManageMedicine, { ManagePharmacy } from "./Pages/ManagePharmacy/ManagePharmacy";
import Viewusers from "./Pages/Viewusers/Viewusers";
// import Home1 from "./pages/Home/Home";
// src\pages\Home\Home
function App() {
  const history = useHistory();
  console.log();
  const getNav = () => {
    return;
  };
  return (
    <Router>
      {/* {history.location.pathname === '/login' ? <Navbar /> : null} */}
      <div className="pages">
        <Switch>
          {/* <Route exact path="/Login" component={Login} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/ManagePharmacy" component={ManagePharmacy} />
          <Route exact path="/Viewusers" component={Viewusers} />
          <Route exact path="/RoutineCheck" component={RoutineCheck} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
