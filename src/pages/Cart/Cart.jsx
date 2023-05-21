import { BillCard } from '../../components/BillCard/BillCard';
import './Cart.css';

export const Cart = () => {
  return (
    <div className='px-4 py-4 cart-container'>
        <div className="row">
            <div className="col-md-6">
                <h1>CART</h1>

                <div className=" product-container py-2 px-2">
                    <div className="row cart-items py-2">
                        <div className="cart-product-img-container col-4">
                        <img src="https://ii2.pepperfry.com/media/catalog/product/m/i/1100x1210/milton-solid-wood-armchair-in-rustic-teak-finish-with-yellow-colour-upholstery-by-woodsworth-milton--tgtdns.jpg" alt="" />
                    </div>
                    <div className="col-8">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="">CORT</div>
                            <div className="">X</div>
                        </div>
                        <div className="">$350.00</div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <h1>TOTAL</h1>

                <BillCard />
            </div>
        </div>
    </div>
  )
}