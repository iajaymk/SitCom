import './ProductDetails.css';

export const ProductDetails = () => {
  return (
    <div  style={{
        minHeight: "71vh"
      }}>
        <div className="px-4 py-4">
            <div className="">HOME/ALL CHAIRS/ LOUNGE CHAIRS/ NORTON LOUNGE</div>

            <div className="my-2 pd-view-area">
                <div className="product-detail-img-container col-md-6 px-5 py-3">
                    <img src="https://ii2.pepperfry.com/media/catalog/product/m/i/1100x1210/milton-solid-wood-armchair-in-rustic-teak-finish-with-yellow-colour-upholstery-by-woodsworth-milton--tgtdns.jpg" alt="" />
                </div>
                <div className="product-detail-area mt-2 py-3">
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="pd-name">NORTON LOUNGE</div>

                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className="pd-desc-line">
                        <div className="pd-description col-md-6">
                            LOUNGE CHAIR. ADJUSTABLE
                            SEAT HEIGHT AND TILT.
                        </div>
                        <div className="pd-stock col-md-6">IN STOCK NOW</div>
                    </div>
                    <div className="product-price">$2,500.00</div>
                    <div className="pd-button-area mt-3">
                        <div className="">
                            <button className='primary-btn'>BUY NOW</button>
                        </div>
                        <div className="">
                            <button className='secondary-btn'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}