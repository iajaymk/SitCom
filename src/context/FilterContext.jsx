import { createContext, useReducer } from "react";
// import { ProductListingContext } from "./ProductContext";

const categories = []
export const FilterContext = createContext()

let data = []
export const FilterContextProvider = ({children}) => {
    const filterFunction = (state,action) => {
        switch(action?.type){
            case "ADD_DATA":
                data = action.payload
                console.log(data)
                return {
                    ...state,
                    productData: action.payload
                }
            case "CATEGORY":
                console.log(action.payload.checked)
                if(action.payload.checked&& !categories.includes(action.payload.value)){
                    categories.push(action.payload.value)
                }
                else{
                    if(categories.includes(action.payload.value)){
                        let index = categories.findIndex(ele=>ele === action.payload.value)

                        categories.splice(index,1)
                    }
                }
                console.log(categories)
                console.log(data)
                return {
                  ...state,
                  category: categories,
                  productData:data.filter(ele=>categories.includes(ele.categoryName))
                }
            case 'OUT_OF_STOCK':
                console.log("Stock filetr")
                return {
                  ...state,
                  excludeOutOfStock: !state?.excludeOutOfStock,
                }
            case 'RATING':
                console.log('rating',action.payload.checked)
                return{
                    ...state,
                    rating: Number(action.payload.value)
                }
            case 'RESET':
                // categories = []
                return {
                  ...state,
                  searchInput:'',
                  category: '',
                  productData: data,
                  excludeOutOfStock:false,
                  rating:'',
                  price:''
                }
            case 'SEARCH':
                console.log(action.payload)
                return {
                  ...state,
                  searchInput: action.payload,
                }
            case 'PRICE':
                console.log(action.payload.value)
                return {
                    ...state,
                    price:action.payload.value
                }
                break;
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(filterFunction,{
        productData: [] ,
        searchInput : "",
        priceRange:'',
        excludeOutOfStock:false,
        category:'',
        rating:''
    })

    return (
      <div>
        <FilterContext.Provider value={{ state,dispatch }}>
          {children}
        </FilterContext.Provider>
      </div>
    )

}