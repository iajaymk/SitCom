import { useContext } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductListingContext } from '../../context/ProductContext';
import './ProductListing.css';

export const ProductListing = () => {
  const { products } = useContext(ProductListingContext)
  
  return (
    <div className='pl-container'>
        {/* Filter */}
        <div className="filter-container">
            <Filter />
        </div>
        {/* Products */}
        <div className="p-container d-flex m-2 flex-wrap">
            {products.map((ele)=>(
              <div className="" key={ele?._id}>
                <ProductCard data={ele} ></ProductCard>
              </div>
            ))}
        </div>
    </div>
  )
}