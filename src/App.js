import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import {Header} from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages";
import { PageNotFound } from "./pages/404Page/PageNotFound";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { Cart } from "./pages/Cart/Cart";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Signup } from "./pages/Signup/Signup";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { SecuredRoute } from "./components/SecuredRoute/SecuredRoute";
import { AccountPage } from "./pages/AccountPage/AccountPage"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route
          path="/cart"
          element={
            // <SecuredRoute>
              <Cart />
            // </SecuredRoute>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/wishlist"
          element={
            // <SecuredRoute>
              <Wishlist />
            // </SecuredRoute>
          }
        ></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/mock-api" element={<Mockman />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
