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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/mock-api" element={<Mockman />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
