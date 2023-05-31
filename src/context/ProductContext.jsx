import { createContext, useEffect, useState } from "react"

export const ProductListingContext = createContext()
export const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch("/api/products")
      if (response.status === 200) {
        const responseData = await response.json()
        setProducts([...responseData?.products])
        // console.log(responseData)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
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
