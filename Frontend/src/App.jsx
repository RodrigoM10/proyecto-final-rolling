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
import MyProfile from "./pages/MyProfile";
// admin pages
import AdminBoard from "./pages/admin/AdminBoard";
import MessagesList from "./pages/admin/MessagesList";
import UserList from "./pages/admin/UserList";
import ProfileAdmin from "./pages/admin/ProfileAdmin";
import SalesList from "./pages/admin/SalesList";
//main components
import { SpinnerRW } from "./components/spinner/SpinnerRW";
import { NavbarMain } from "./components/navbarMain/NavbarMain";
import { Footer } from "./components/footer/Footer";
// utils
import { leerDeLocalStorage } from './utils/localStorage';
import DetailsProduct from "./pages/DetailsProduct";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Lottie from "react-lottie"
import pagewine from "./utils/lottieArchivos/pagewine.json";
import { Container } from "react-bootstrap";

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },

}

function App() {
  const tokenLocalData = leerDeLocalStorage('token') || {};

  const [productos, setProductos] = useState([]);
  const [user, setUser] = useState({});
  const [usuarios, setUsuarios] = useState([]);
  const [messages, setMessages] = useState([]);
  const [sales, setSales] = useState([]);

  const [busqueda, setBusqueda] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [cart, setCart] = useLocalStorage('cart', [])

  const requestUserData = async () => {
    const tokenLocal = leerDeLocalStorage('token') || {};
    setIsLoading(true);

    try {
      if (tokenLocal.token) {
        const headers = { 'x-auth-token': tokenLocal.token };
        const response = await axios.get('https://proyecto-final-db.herokuapp.com/api/auth', { headers });
        setUser(response.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      localStorage.removeItem('token');
      alert('Su sesión expiró.')
      window.location.href = '/';
    }
  };

  useEffect(() => {
    requestUserData();
  }, []);

  // get productos de api rest
  const [allProducts, setAllProducts] = useState([])
  const [tableProducts, setTableProducts] = useState([])
  const getProductos = async () => {
    try {
      const response = await axios.get('https://proyecto-final-db.herokuapp.com/api/productos');
      setProductos(response.data);
      setTableProducts(response.data);
      setAllProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, [])

  // get ventas de api rest
  const [tableSales, setTableSales] = useState([]);
  const getSales = async () => {
    try {
      const response = await axios.get('https://proyecto-final-db.herokuapp.com/api/ventas');
      setSales(response.data);
      setTableSales(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSales();
  }, [])

  // get mensajes de api rest
  const [tableMessages, setTableMessages] = useState([])
  const getMessages = async () => {
    try {      
      const response = await axios.get('https://proyecto-final-db.herokuapp.com/api/mensajes');
      setMessages(response.data);
      setTableMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMessages();
  }, [])

  // get usuarios de api rest
  const [tableUsers, setTableUsers] = useState([])
  const getUsers = async () => {
    try {
      const response = await axios.get('https://proyecto-final-db.herokuapp.com/api/usuarios');
      setUsuarios(response.data);
      setTableUsers(response.data);
    } catch (error) {
      console.error(error);
    }
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
        setBusqueda={setBusqueda}
        favorites={favorites}
        user={user}
        cart={cart}
        setProductos={setProductos}
        allProducts={allProducts}
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
          <DetailsProduct
            cart={cart}
            setCart={setCart}
            productos={productos} />
        </Route>

        <Route path="/store" >
          <Store
          getProductos={getProductos}
          isLoading={isLoading}
            allProducts={allProducts} setAllProducts={setAllProducts}
            productos={productos} setProductos={setProductos}
            favorites={favorites} setFavorites={setFavorites}
            cart={cart} setCart={setCart}
            busqueda={busqueda} />
        </Route>

        <Route path="/contact" >
          <Contact />
        </Route>

        <Route path="/cart" >
          <Cart
            cart={cart}
            setCart={setCart}
            user={user} />
        </Route>

        <Route path="/favorite" >
          <Favorite
            favorites={favorites}
            setFavorites={setFavorites}
            cart={cart}
            setCart={setCart} />
        </Route>

        <Route path="/login" >
          <Login
            requestUserData={requestUserData}
            cart={cart} />
        </Route>

        <Route path="/register" >
          <Register />
        </Route>

        {tokenLocalData.token &&
          <Route path="/myProfile" >
            <MyProfile
              requestUserData={requestUserData}
              user={user} />
          </Route>
        }

        {/* Admin pages */}
        {isAdmin && (
          <Route path="/adminBoard" >
            <AdminBoard
              productos={productos}
              getProductos={getProductos}
              tableProducts={tableProducts} setTableProducts={setTableProducts} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/profileAdmin" >
            <ProfileAdmin
              requestUserData={requestUserData}
              user={user} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/messagesList" >
            <MessagesList
              messages={messages}
              getMessages={getMessages}
              tableMessages={tableMessages} setTableMessages={setTableMessages} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/userList" >
            <UserList
              usuarios={usuarios}
              getUsers={getUsers}
              tableUsers={tableUsers} setTableUsers={setTableUsers} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/salesList" >
            <SalesList
              sales={sales}
              getSales={getSales}
              tableSales={tableSales} setTableSales={setTableSales} />
          </Route>
        )}

        <Route path="/404">
          <Container>
            <Lottie options={{ animationData: pagewine, ...defaultOptions }} />
          </Container>
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
