import { useContext } from 'react';
import { BillCard } from '../../components/BillCard/BillCard';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cart, removeItemFromCart } = useContext(CartContext)
    console.log(cart)
  return (
    <div className="px-4 py-4 cart-container">
      {cart.length > 0 ? (
        <div className="row">
          <div className="col-md-6">
            <h1>CART</h1>

            <div className=" product-container py-2 px-2">
              {cart.map(({ _id, title, image, price }) => (
                <div className="row cart-items py-2 px-2">
                  <div className="cart-product-img-container col-4">
                    <img src={image} alt="" />
                  </div>
                  <div className="col-8">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="">{title}</div>
                      <div className="" onClick={() => removeItemFromCart(_id)}>
                        X
                      </div>
                    </div>
                    <div className="">Rs.{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <h1>TOTAL</h1>

            <BillCard />
          </div>
        </div>
      ) : (
        <div className="">
          <h1>CART</h1>
          <div className="text-center">
            <div>Your Cart is Empty! Shop Something</div>
            <Link to="/products">
              <button className="mt-4 primary-btn">Shop Now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}