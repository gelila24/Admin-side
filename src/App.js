import "./App.css";
import Navbar from "./Navbar/Navbar";
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
import { Signup } from "./Signup/Signup"
import ManageMedicine, { ManagePharmacy } from "./Pages/ManagePharmacy/ManagePharmacy";
import Viewusers from "./Pages/Viewusers/Viewusers";
import GuardedRoute from "./GuardedRoute";
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
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <GuardedRoute exact path="/home/:id" component={Home} />
          <GuardedRoute exact path="/ManagePharmacy" component={ManagePharmacy} />
          <GuardedRoute exact path="/Viewusers" component={Viewusers} />
          <GuardedRoute exact path="/RoutineCheck" component={RoutineCheck} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
