import React from "react";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./component/Footer";
import Navbar from "./component/Nav";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart"  component={Cart} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Redirect to="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
