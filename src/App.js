import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products/Products';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './Pages/Shared/PrivetRoute/PrivetRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Shipping from './Pages/Shipping/Shipping';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import Congratulations from './Pages/Shared/Congratulations/Congratulations';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
       
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
    
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/congratulations">
            <Congratulations></Congratulations>
          </Route>
          <PrivetRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivetRoute>
          <PrivetRoute path="/shipping/:bikeId">
            <Shipping></Shipping>
          </PrivetRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
