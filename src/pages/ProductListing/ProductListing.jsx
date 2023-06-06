import { useContext } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './ProductListing.css';
import { FilterContext } from '../../context/FilterContext';

export const ProductListing = () => {
  const {state} = useContext(FilterContext)
  const filteredData = state?.excludeOutOfStock? [...state?.productData].filter(ele=>ele.inStock===true):state?.productData
  const ratingFiltered = state?.rating===''?filteredData:[...filteredData].filter(ele=>ele?.rating>=state?.rating)
  const searchFiltered = state?.searchInput === ''? ratingFiltered:[...ratingFiltered].filter(ele=>{
    return ele.title.toLowerCase().includes(state?.searchInput.toLowerCase())
    // console.log(ele?.title.toLowerCase())
    // console.log(state?.searchInput)
  })
  return (
    <div className="pl-container">
      {/* Filter */}
      <div className="filter-container">
        <Filter />
      </div>
      {/* Products */}
      <div className="p-container d-flex m-2 flex-wrap">
        {searchFiltered.map((ele) => (
          <div className="" key={ele?._id}>
            <ProductCard data={ele}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  )
}