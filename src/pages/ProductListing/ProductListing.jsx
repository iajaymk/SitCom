import { Filter } from '../../components/Filter/Filter';
import './ProductListing.css';

export const ProductListing = () => {
  return (
    <div className='pl-container'>
        {/* Filter */}
        <div className="filter-container">
            <Filter />
        </div>
        {/* Products */}
        <div className="p-container"></div>
    </div>
  )
}