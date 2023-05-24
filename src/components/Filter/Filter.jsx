import './Filter.css';

export const Filter = () => {
  return (
    <div>
        <div className="accordion" id="accordionPanelsStayOpenFilter">
            <div className="d-flex align-items-center justify-content-between">
                <div className='filter-heading my-1'>FILTERS</div>

                <div className='reset-link my-2'>RESET ALL</div>
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
                        <input type="checkbox" id="dining" name="interest" value="dining"  />
                        <label htmlFor="dining">Dining Chairs</label>
                    </div>
                    <div>
                        <input type="checkbox" id="lounge" name="interest" value="lounge" />
                        <label htmlFor="lounge">Lounge Chairs</label>
                    </div>
                    <div>
                        <input type="checkbox" id="office" name="interest" value="office"  />
                        <label htmlFor="office">Office Chairs</label>
                    </div>
                    <div>
                        <input type="checkbox" id="rocking" name="interest" value="rocking" />
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
                        <input type="checkbox" id="stock" name="interest" value="outOfStock"  />
                        <label htmlFor="stock">Exclude out of stock</label>
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
                            />
                    <label htmlFor="4.5">4.5 & above</label>
                    </div>

                    <div>
                    <input type="radio" id="4" name="drone" value="4"/>
                    <label htmlFor="4">4 & above</label>
                    </div>

                    <div>
                    <input type="radio" id="3.5" name="drone" value="3.5"/>
                    <label htmlFor="3.5">3.5 & above</label>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}