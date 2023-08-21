import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import gr from "../assets/images/gr.svg"
import gr1 from "../assets/images/gr2.svg"
import gr2 from "../assets/images/gr3.svg"
import gr3 from "../assets/images/gr4.svg"
import ProductCard from "../components/ProductCard"

const OurStore = () => {
  const [grid, setGrid] = useState(3);
  

  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5 ">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-2 ">
              <div className="filter-card mb-3 ">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Tricou</li>
                    <li>Blugi</li>
                    <li>Adidasi</li>
                    <li>Accesorii</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Filter By </h3>
                <div>
                  <h5 className="sub-title text-sm font-semibold mt-[15px] mb-[15px]">
                    Availablity
                  </h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock(1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title text-sm font-semibold mt-[15px] mb-[15px]">
                    Price
                  </h5>
                  <div className="d-flex align-items-center gap-[10px]">
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title text-sm font-semibold mt-[15px] mb-[15px]">
                    Size
                  </h5>
                  <div>
                  <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-[10px]">
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Nike
                      </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Adidas
                      </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Puma
                      </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Jordan
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-[4px]">
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-[10px]">
                  <p className="mb-0 d-block w-[100px]">Sort By</p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">Best seling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending"> Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                     </select>
                </div>
                <div className="d-flex align-items-center gap-[10px]">
                  <p className="totalproducts">21 Products</p>
                  <div className="d-flex gap-[10px] align-items-center grid">
                     <img onClick={() => {setGrid(3)}} src={gr3} className="d-block img-fluid" alt="grid" />
                     <img onClick={() => {setGrid(4)}} src={gr2} className="d-block img-fluid" alt="grid" />
                     <img onClick={() => {setGrid(6)}} src={gr1} className="d-block img-fluid" alt="grid" />
                     <img onClick={() => {setGrid(12)}} src={gr} className="d-block img-fluid" alt="grid" />
                  </div>
                </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-[10px] flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
