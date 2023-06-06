import { useContext } from 'react';
import './Filter.css';
import { FilterContext } from '../../context/FilterContext';

export const Filter = () => {
    const {state,dispatch} = useContext(FilterContext)
  return (
    <div>
        <div className="accordion" id="accordionPanelsStayOpenFilter">
            <div className="d-flex align-items-center justify-content-between">
                <div className='filter-heading my-1'>FILTERS</div>

                <div className='reset-link my-2'
                    onClick={(e)=>{dispatch({type:'RESET'})}}
                >RESET ALL</div>
            </div>
            <div className="mt-1 mx-1">
                <input type="text" placeholder='SEARCH' value={state?.searchInput} onInput={(e)=>dispatch({type:'SEARCH',payload:e.target.value})} />
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Price
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                    <input type="range" id="price" name="price" list="values" min={10} max={5000} />

                    <datalist id="values">
                    <option value="10" label="10"></option>
                    <option value="2500" label="2500"></option>
                    <option value="5000" label="5000"></option>
                    </datalist>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Category
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div>
                        <input type="checkbox" id="dining" name="interest" value="dining chairs" 
                            onChange={(e)=>dispatch({type:'CATEGORY',payload:e.target})}
                            checked={state?.category?.includes('dining chairs')}
                        />
                        <label htmlFor="dining">Dining Chairs</label>
                    </div>
                    <div>
                        <input type="checkbox" id="lounge" name="interest" value="lounge chairs"
                            onChange={(e)=>dispatch({type:'CATEGORY',payload:e.target})}
                            checked={state?.category?.includes('lounge chairs')}
                        />
                        <label htmlFor="lounge">Lounge Chairs</label>
                    </div>
                    <div>
                        <input type="checkbox" id="office" name="interest" value="office chairs"
                            onChange={(e)=>dispatch({type:'CATEGORY',payload:e.target})}
                            checked={state?.category?.includes('office chairs')}
                        />
                        <label htmlFor="office">Office Chairs</label>
                    </div>
                    <div>
                        <input type="checkbox" id="rocking" name="interest" value="rocking chairs" 
                        onChange={(e)=>dispatch({type:'CATEGORY',payload:e.target})}
                            checked={state?.category?.includes('rocking chairs')}
                        />
                        <label htmlFor="rocking">Rocking Chairs</label>
                    </div>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Availabilty
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div>
                        <input type="checkbox" id="stock" name="interest" value="outOfStock" 
                            onChange={(e)=>{dispatch({type:'OUT_OF_STOCK'})}}
                            checked={state?.excludeOutOfStock}
                            />
                        <label htmlFor="stock"
                        >Exclude out of stock</label>
                    </div>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Ratings
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div>
                    <input type="radio" id="4.5" name="drone" value="4.5"
                    onChange={(e)=>{dispatch({ type: "RATING" , payload:e.target})}}
                    checked={state.rating===4.5}
                            />
                    <label htmlFor="4.5">4.5 & above</label>
                    </div>

                    <div>
                    <input type="radio" id="4" name="drone" value="4"
                    onChange={(e)=>{dispatch({ type: "RATING" , payload:e.target})}}
                    checked={state.rating===4}/>
                    <label htmlFor="4">4 & above</label>
                    </div>

                    <div>
                    <input type="radio" id="3.5" name="drone" value="3.5"
                    onChange={(e)=>{dispatch({ type: "RATING" , payload:e.target})}}
                    checked={state.rating===3.5}/>
                    <label htmlFor="3.5">3.5 & above</label>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}