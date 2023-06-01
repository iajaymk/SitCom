import { createContext, useContext, useState } from "react"

const WishListContext = createContext()
export const WishListContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([])
  const addToWishList = (item) => {
    // console.log("Adding to Wishlist", item);
    if(wishList.findIndex(ele=>ele._id===item._id)===-1){
      setWishList([...wishList, item])
    }
  }

  const removeItemFromWishList = (id) => {
    const index = wishList.findIndex((item) => item._id === id)
    console.log("WISH", wishList)
    const newArr = wishList.splice(index, 1)
    console.log(newArr)
    console.log("WISH", wishList)
    setWishList([...wishList])
    // setWishList(wishList.filter((item) => item.id !== id));
  }

  return (
    <WishListContext.Provider
      value={{ wishList, addToWishList, removeItemFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  )
}

export const useWishListContext = () => {
  return useContext(WishListContext)
}
