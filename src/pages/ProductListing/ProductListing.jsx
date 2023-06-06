import { useContext } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './ProductListing.css';
import { FilterContext } from '../../context/FilterContext';

export const ProductListing = () => {
  const {state} = useContext(FilterContext)
  const filteredData = state?.excludeOutOfStock? [...state?.productData].filter(ele=>ele.inStock===true):state?.productData
  const ratingFiltered = state?.rating==''?filteredData:[...filteredData].filter(ele=>ele?.rating>=state?.rating)
  const getFilteredData=(state)=>{
    console.log(state)
    let data = state
    if(data?.excludeOutOfStock){
      data = [...data]?.productData.filter((ele) => ele.inStock === true)
    }
    else{
      data = state
    }
    if(data?.rating === ''){
      data = data
    }
    else{
      console.log(data)
      data = [...data]?.productData.filter(
        (ele) => ele?.rating >= filteredData?.rating
      )
    }
    console.log(data)
    return data
  }
  return (
    <div className="pl-container">
      {/* Filter */}
      <div className="filter-container">
        <Filter />
      </div>
      {/* Products */}
      <div className="p-container d-flex m-2 flex-wrap">
        {ratingFiltered.map((ele) => (
          <div className="" key={ele?._id}>
            <ProductCard data={ele}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  )
}