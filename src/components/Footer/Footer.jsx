import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer-container px-4 py-4">
      <div className="footer-brand col-md-6">
        <div className="brand-name">SIT.CØM</div>
        <div className="brand-details">
          <div>+91 999 999 9999</div>
          <div>designer@sitcom@gmail.com</div>
        </div>
      </div>
      <div className="footer-links col-md-6">
        <div className="footer-links-uppersection">
          <div className="footer-links-page col-md-6">
            <div className="">
              <div className="my-1">ABOUT</div>
              <div className="my-1">ALL CHAIRS</div>
              <div className="my-1">BLOG</div>
            </div>

            <div className="">
              <div className="my-1">CONSTRUCTOR</div>
              <div className="my-1">DELIVERY & PAYMENT</div>
              <div className="my-1">CONTACT US</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="my-1 fw-bold  ">NEWSLETTER</div>
            <input type="email" name="" id="" placeholder='E-MAIL' className='newsletter-input' />
          </div>
        </div>
        <div className="footer-links-lowersection"></div>
      </div>
    </div>
  )
}