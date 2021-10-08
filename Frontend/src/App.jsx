import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import { Switch, Route } from "react-router-dom";
// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite";
import About from "./pages/About";
// admin pages
import AdminBoard from "./pages/admin/AdminBoard";
import AdminProfile from "./pages/admin/AdminProfile";
import MessagesList from "./pages/admin/MessagesList";
import UserList from "./pages/admin/UserList";
//main components
import { NavbarMain } from "./components/navbar/NavbarMain";
import { Footer} from "./components/footer/Footer";

function App() {

  return (
    <div className="footer-fix">
      <NavbarMain />
          <Switch>
            {/* pages */}
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" >
                <About /> 
              </Route>
              <Route path="/store" >
                <Store />
              </Route>
              <Route path="/cart" >
                <Cart /> 
              </Route>
              <Route path="/favourite" >
                <Favourite /> 
              </Route>
              <Route path="/login" >
                <Login />
              </Route>
              <Route path="/register" >
                <Register />
              </Route>

              {/* Admin pages */}
              <Route path="/adminBoard" >
                <AdminBoard /> 
              </Route>
              <Route path="/adminProfile" >
                <AdminProfile /> 
              </Route>
              <Route path="/messagesList" >
                <MessagesList /> 
              </Route>
              <Route path="/userList" >
                <UserList /> 
              </Route>
          </Switch>
          <Footer />
    </div>
  );
}

export default App;
