import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//components
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./component/Footer";
import Navbar from "./component/Nav";
import ProductDetails from "./component/ProductDetails";
//context
import ProductContextProvider from "./context/ProductContextProvider";
const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Redirect to="/" component={Home} />
      </Switch>
      <Footer />
    </ProductContextProvider>
  );
};
export default App;
