import { createContext, useState } from "react"

export const CartContext = createContext()
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    // console.log("Adding", item);
    if(cart.findIndex(ele=>ele._id === item._id)===-1){
      setCart([...cart, item])
    }
  }

  const removeItemFromCart = (id) =>
    setCart(cart.filter((item) => item._id !== id))

  return (
    <div>
      <CartContext.Provider value={{ cart, addToCart, removeItemFromCart }}>
        {children}
      </CartContext.Provider>
    </div>
  )
}
