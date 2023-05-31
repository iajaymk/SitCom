import { useContext } from 'react';
import './BillCard.css';
import { CartContext } from '../../context/CartContext';

export const BillCard = () => {
    const { cart } = useContext(CartContext)
    let subtotalPrice = cart.reduce((acc,curr)=>acc+=curr.price,0)
    let shippingPrice = subtotalPrice<10000&&subtotalPrice>0?500:0;
    return (
    <div className="bill-card-container px-3 py-4">
        <div className="d-flex align-items-center justify-content-between">
            <div className="">SUBTOTAL</div>
            <div className="">Rs.{subtotalPrice}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <div className="">SHIPPING</div>
            <div className="">Rs.{shippingPrice}</div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
            <div className="fw-bolder fs-1">TOTAL</div>
            <div className="">Rs.{subtotalPrice+shippingPrice}</div>
        </div>
        <div className="bill-card-btns">
            <button className="secondary-btn my-2">CONTINUE SHOPPING</button>
            <button className="primary-btn my-2">CHECKOUT</button>
        </div>
    </div>
    )
}