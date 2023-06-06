import { useContext } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './ProductListing.css';
import { FilterContext } from '../../context/FilterContext';

export const ProductListing = () => {
  const {state} = useContext(FilterContext)
  const filteredData = state?.excludeOutOfStock? [...state?.productData].filter(ele=>ele.inStock===true):state?.productData
  return (
    <div className='pl-container'>
        {/* Filter */}
        <div className="filter-container">
            <Filter />
        </div>
        {/* Products */}
        <div className="p-container d-flex m-2 flex-wrap">
            {filteredData?.map((ele)=>(
              <div className="" key={ele?._id}>
                <ProductCard data={ele} ></ProductCard>
              </div>
            ))}
        </div>
    </div>
  )
}