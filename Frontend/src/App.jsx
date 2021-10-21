import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios'

//router dom
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite";
import About from "./pages/About";
import Contact from "./pages/Contact";
// admin pages
import AdminBoard from "./pages/admin/AdminBoard";
import AdminProfile from "./pages/admin/AdminProfile";
import MessagesList from "./pages/admin/MessagesList";
import UserList from "./pages/admin/UserList";
//main components
import { NavbarMain } from "./components/navbarMain/NavbarMain";
import { Footer } from "./components/footer/Footer";
// utils
import { leerDeLocalStorage } from './utils/localStorage';


function App() {

  const [productos, setProductos] = useState([]);
  const [user, setUser] = useState({});
  console.log("🚀 ~ file: App.jsx ~ line 36 ~ App ~ user", user)
  const [usuarios, setUsuarios] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log("🚀 ~ file: App.jsx ~ line 37 ~ App ~ isLoading", isLoading)

  const requestUserData = async () => {
    setIsLoading(true);
    const tokenLocal = leerDeLocalStorage('token') || {};

    if (tokenLocal.token) {
      const headers = { 'x-auth-token': tokenLocal.token };
      const response = await axios.get('http://localhost:4000/api/auth', { headers });
      setUser(response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    requestUserData();
  }, []);
  
  const getProductos = async () => {
    const response = await axios.get('http://localhost:4000/api/productos');
    setProductos(response.data);
  };

  useEffect(() => {
    getProductos();
  }, []); 

  const getUsers = async () => {
    const response = await axios.get('http://localhost:4000/api/usuarios');
    setUsuarios(response.data);
  };

  useEffect(() => {  
    getUsers();
  }, [])
  
    const isAdmin = user.role === 'admin';
    console.log("🚀 ~ file: App.jsx ~ line 57 ~ App ~ isAdmin", isAdmin)
  
  return (
    <div className="footer-fix ">
      <NavbarMain
        user={user}
      />
      <Switch>
        {/* pages */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/store" >
          <Store productos={productos} />
        </Route>
        <Route path="/contact" >
          <Contact />
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
        {isAdmin && (
          <Route path="/adminBoard" >
            <AdminBoard user={user} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/adminProfile" >
            <AdminProfile user={user} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/messagesList" >
            <MessagesList />
          </Route>
        )}
        {isAdmin && (
          <Route path="/userList" >
            <UserList getUsers = {getUsers} usuarios ={usuarios}/>
          </Route>
        )}

        <Route path="/404">
          404
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
