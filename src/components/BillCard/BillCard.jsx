import './BillCard.css';

export const BillCard = () => {
    return (
    <div className="bill-card-container px-3 py-4">
        <div className="d-flex align-items-center justify-content-between">
            <div className="">SUBTOTAL</div>
            <div className="">$1230.00</div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <div className="">SHIPPING</div>
            <div className="">$0.00</div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
            <div className="fw-bolder fs-1">TOTAL</div>
            <div className="">$1200.00</div>
        </div>
        <div className="bill-card-btns">
            <button className="secondary-btn my-2">CONTINUE SHOPPING</button>
            <button className="primary-btn my-2">CHECKOUT</button>
        </div>
    </div>
    )
}