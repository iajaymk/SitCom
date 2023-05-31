import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext"
import { WishListContextProvider } from "./context/WishListContext";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <ProductContext>
        <CartContextProvider>
          <WishListContextProvider>
            <App />
          </WishListContextProvider>
        </CartContextProvider>
      </ProductContext>
    </Router>
  </React.StrictMode>
)
