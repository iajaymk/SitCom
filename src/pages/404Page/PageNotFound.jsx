import { Link } from "react-router-dom";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
  <div>
        <div className="not-found-container px-4 py-4">
            <div className="col-md-6 notfound-text-container mt-2">
                <div className="error-heading">404</div>
                <div className="error-sub-heading">SORRY! PAGE NOT FOUND</div>
                <div className="error-reason">
                    THIS COULD BE DUE TO A FEW REASONS. PERHAPS
                    THE PAGE YOU WERE TRYING TO ACCESS HAS BEEN 
                    REMOVED OR RENAMED, OR MAYBE THERE WAS A TYPO IN
                    URL.
                </div>
                <Link to="/products" className="button-container mt-2">
                    <button className="all-chairs-button">ALL CHAIRS</button>
                </Link>
            </div>
            <div className="col-md-6 notfound-img-container">
                <img src={require("../../assets/404-img.jpg")} alt="white-comfort-chair" className="notfound-img"/>
            </div>
        </div>
  </div>
  )
}