import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import Home from "./Pages/Home"
import RoutineCheck from "./Pages/RoutineCheck";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/RoutineCheck" component={RoutineCheck} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
