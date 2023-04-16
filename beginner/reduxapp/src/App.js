import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Navbar from "./component/navbar";
import { Provider } from "react-redux";
import Store from "./store/store";
const App = () => {
  return (
    <>
      <div>
        <Provider store={Store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
};

export default App;
