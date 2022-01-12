import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import AddServices from "./components/AddServices/AddServices";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

import Dashbaord from "./components/Dasboard/Dashbaord";
import Details from "./components/Details/Details";

import MangeOrder from "./components/MangeOrder/MangeOrder";
import AllServices from "./components/AllServices/AllServices";
import Footer from "./components/Footer/Footer";
import MantainOrders from "./components/MantainOrders/MantainOrders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/register">
            <Register></Register>
          </Route>

          <Route exact path="/allServices">
            <AllServices></AllServices>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>
      
          <Route exact path="/manageOrder">
            <MangeOrder></MangeOrder>
          </Route>

          <PrivateRoute exact path="/services/:serviceId">
            <Details></Details>
          </PrivateRoute>

          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>

          <Route exact path="/manageOrders">
            <MangeOrder></MangeOrder>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashbaord></Dashbaord>
          </PrivateRoute>

          <Route exact path="/addService">
            <AddServices></AddServices>
          </Route>

          <Route exact path="/mantainOrders">
            <MantainOrders></MantainOrders>
          </Route>

        </Switch>

        <Footer></Footer>

      </Router> 
      </AuthProvider>    
    </div>
  );
}

export default App;
