import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios'

//router dom
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import DetailsProduct from "./pages/DetailsProduct";
import MyProfile from "./pages/MyProfile";
// admin pages
import AdminBoard from "./pages/admin/AdminBoard";
import MessagesList from "./pages/admin/MessagesList";
import UserList from "./pages/admin/UserList";
import ProfileAdmin from "./pages/admin/ProfileAdmin";
import { SpinnerRW } from "./components/spinner/SpinnerRW";
//main components
import { NavbarMain } from "./components/navbarMain/NavbarMain";
import { Footer } from "./components/footer/Footer";
// utils
import { leerDeLocalStorage } from './utils/localStorage';


function App() {

  const [productos, setProductos] = useState([]);

  const [user, setUser] = useState({});

  const [usuarios, setUsuarios] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [messages, setMessages] = useState([])

  const tokenLocalData = leerDeLocalStorage('token') || {};

  const requestUserData = async () => {

    const tokenLocal = leerDeLocalStorage('token') || {};
    setIsLoading(true);
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


  const [tableProducts, setTableProducts] = useState([])
  const getProductos = async () => {
    const response = await axios.get('http://localhost:4000/api/productos');
    setProductos(response.data);
    setTableProducts(response.data);
  };
  useEffect(() => {
    getProductos();
  }, [])

  const [tableMessages, setTableMessages] = useState([])
  const getMessages = async () => {
    const response = await axios.get('http://localhost:4000/api/mensajes');
    setMessages(response.data);
    setTableMessages(response.data);
  };
  useEffect(() => {
    getMessages();
  }, [])

  // se agrega funcion que trae de la API los usuarios registrados, para pasarla como prop a userList.
  const [tableUsers, setTableUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get('http://localhost:4000/api/usuarios');
    setUsuarios(response.data);
    setTableUsers(response.data);
  };
  useEffect(() => {
    getUsers();
  }, [])


  const isAdmin = user.role === 'admin';
  console.log("🚀 ~ file: App.jsx ~ line 57 ~ App ~ isAdmin", isAdmin)

if (isLoading) {
  return (
    <SpinnerRW />
  );
}

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
          <Login requestUserData={requestUserData} />
        </Route>

        <Route path="/register" >
          <Register />
        </Route>

        {tokenLocalData.token &&
          <Route path="/myProfile" >
            <MyProfile requestUserData={requestUserData} user={user} />
          </Route>
        }

        {/* Admin pages */}
        {isAdmin && (
          <Route path="/adminBoard" >
            <AdminBoard productos={productos} getProductos={getProductos} tableProducts={tableProducts} setTableProducts={setTableProducts}/>
          </Route>
        )}
        {isAdmin && (
          <Route path="/profileAdmin" >
            <ProfileAdmin requestUserData={requestUserData} user={user} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/messagesList" >
            <MessagesList messages={messages} getMessages={getMessages} tableMessages={tableMessages} setTableMessages={setTableMessages} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/userList" >
            <UserList getUsers={getUsers} usuarios={usuarios} tableUsers={tableUsers} setTableUsers={setTableUsers} />
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
