import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import './ProductCard.css'
import { useContext } from 'react'
import { useWishListContext } from '../../context/WishListContext'

export const ProductCard = (item) => {

  const { addToCart } = useContext(CartContext)
  const { addToWishList } = useWishListContext()

  return (
    <div className="p-card-container m-2 p-2">
      <div className="p-2">
        <Link
          to={`/product/${item?.data?._id}`}
          className="product-card-img-container"
        >
          <img src={item?.data?.image} alt="" />
        </Link>
        <Link
          to={`/product/${item?.data?._id}`}
          className="mt-2 product-card-text-container"
        >
          <div className="p-card-name">{item?.data?.title}</div>
          <div className="p-card-price">Rs.{item?.data?.price}</div>
        </Link>
      </div>
      <div className=" d-flex align-items-center justify-content-between p-card-btn-area">
        <button className="primary-btn" onClick={() => addToCart(item?.data)}>
          Add to Cart
        </button>
        <button className="secondary-btn" onClick={() => addToWishList(item?.data)}>
          Add to Wishlist
        </button>
      </div>
    </div>
  )
}