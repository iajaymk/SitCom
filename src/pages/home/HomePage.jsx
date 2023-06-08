import { useContext, useEffect, useState } from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
import { FilterContext } from '../../context/FilterContext';

export const HomePage = () => {
    const { dispatch } = useContext(FilterContext)
    const [categories,setCategories] = useState([]);
      const navigate = useNavigate()
    const fetchCategories = async() =>{
        try{
            const response = await fetch("/api/categories");
            if(response.status===200){
                const responseData = await response.json()
                setCategories([...responseData?.categories])
                // console.log(responseData)
            }
        }
        catch(e){
            console.log(e);
        }
    }
    const handleCategory = (e) => {
      console.log(e)
      navigate('/products')
      dispatch({type:'RESET'})
      dispatch({ type: "CATEGORY", payload: e.target })
    }

    useEffect(()=>{fetchCategories()},[])
    
    return (
      <div>
        <div className="home-page-container mx-3 mt-3">
          <div className="bg-image-container px-3">
            <div className="hero-text-container">
              <div className="">
                <div className="hero-text-content">
                  <h1>SIT.CØM</h1>
                  <p>
                    WHERE <span>form</span> MEETS <span>funciton</span>
                  </p>
                  <Link to="/products">
                    <button className="all-chairs-button">ALL CHAIRS</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="my-5 px-4 py-4 feature-area">
            <div className="row">
              <div className="col-md-4 feature-item">
                <div className="feature-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-globe"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                  </svg>
                </div>
                <div className="">
                  <div className="feature-heading">FREE DELIVERY</div>
                  <div className="feature-content">RIGHT TO YOUR DOORSTEP</div>
                </div>
              </div>
              <div className="col-md-4 feature-item">
                <div className="feature-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pie-chart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                  </svg>
                </div>
                <div className="">
                  <div className="feature-heading">CONSTRUCTOR</div>
                  <div className="feature-content">CREATE YOUR OWN CHAIR</div>
                </div>
              </div>
              <div className="col-md-4 feature-item">
                <div className="feature-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-percent"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg>
                </div>
                <div className="">
                  <div className="feature-heading">RECIEVE 10%</div>
                  <div className="feature-content">OFF YOUR FIRST ORDER</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-3">
            <div className="categories-heading">(All Chairs)</div>
            {categories?.map((ele, index) => (
              <div key={ele?._id} className="categories-links" onClick={(e)=>handleCategory({target:{value:ele?.categoryName,checked:true}})}>
                <div className="category-name">
                  {ele?.categoryName.toUpperCase()}
                </div>
                <div className="category-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    )
}