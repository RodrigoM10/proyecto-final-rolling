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
import Favorite from "./pages/Favorite";
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
import DetailsProduct from "./pages/DetailsProduct";
import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {
  const tokenLocalData = leerDeLocalStorage('token') || {};
  
  const [productos, setProductos] = useState([]);

  const [user, setUser] = useState({});

  const [usuarios, setUsuarios] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [messages, setMessages] = useState([])

  // useLocalStorage, es un hook que crea un useState con el valor determinado y guarda en localStorages con la key y el valor incial determinado.
  // reemplaza, crear useState y leer y guardar en localStorage
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  

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

  if (isLoading) {
    return (
      <SpinnerRW />
    );
  }

  return (

    <div className="footer-fix ">
      <NavbarMain
        favorites={favorites}
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

        <Route path="/store/:productId">
          <DetailsProduct productos={productos} />
        </Route>

        <Route path="/store" >
          <Store productos={productos} favorites={favorites} setFavorites={setFavorites} />
        </Route>

        <Route path="/contact" >
          <Contact />
        </Route>

        <Route path="/cart" >
          <Cart />
        </Route>

        <Route path="/favorite" >
          <Favorite favorites={favorites} setFavorites={setFavorites} />
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
            <AdminBoard productos={productos} getProductos={getProductos} tableProducts={tableProducts} setTableProducts={setTableProducts} />
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
