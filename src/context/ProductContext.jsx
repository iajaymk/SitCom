import { createContext, useContext, useEffect, useState } from "react"
import { FilterContext } from "./FilterContext"

export const ProductListingContext = createContext()
export const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([])
  const {dispatch} = useContext(FilterContext)
  const fetchData = async () => {
    try {
      const response = await fetch("/api/products")
      if (response.status === 200) {
        const responseData = await response.json()
        setProducts([...responseData?.products])
        console.log(responseData)
        dispatch({ type: "ADD_DATA", payload: [...responseData?.products] })
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    console.log("One")
    fetchData()
  }, [])
  return (
    <div>
      <ProductListingContext.Provider value={{ products: products }}>
        {children}
      </ProductListingContext.Provider>
    </div>
  )
}
