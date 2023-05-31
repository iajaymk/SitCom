import { Link } from 'react-router-dom';
import { useWishListContext } from '../../context/WishListContext';
import './Wishlist.css';

export const Wishlist = () => {
const { wishList, removeItemFromWishList } = useWishListContext()
console.log(wishList)
  
  return (
    <div>
        <div className="px-4 py-4 wishlist-container">
            <h1>WISHLIST</h1>
            {wishList?.length>0?(
            <div className="wh-p-container">
                <div className=" product-container py-2 px-2">
                {wishList.map(({ _id, title, image, price }) => (
                    <div className="row cart-items py-2">
                        <div className="cart-product-img-container col-4">
                        <img src={image} alt="" />
                        </div>
                        <div className="col-8">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="">{title}</div>
                                <div className="" onClick={() => removeItemFromWishList(_id)}>X</div>
                            </div>
                            <div className="">Rs.{price}</div>
                            <button className='secondary-btn'>MOVE TO CART</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            ):(
                <div className="text-center">
                    <div className="">WishList Empty!</div>
                    <Link to="/products">
                    <button className='primary-btn mt-4'>Explore Products</button>
                    </Link>
                </div>
            )}
        </div>
    </div>
  )
}