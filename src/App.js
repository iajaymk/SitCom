import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import {Header} from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages";
import { PageNotFound } from "./pages/404Page/PageNotFound";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/mock-api" element={<Mockman />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
