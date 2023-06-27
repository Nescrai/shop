import React from 'react'
import { Link } from 'react-router-dom'
import  addcart from "../assets/images/add-cart.svg"
import wish from "../assets/images/wish.svg";
import view from "../assets/images/view.svg";

const ProductCard = () => {
  return (
    <div className='col-4'>
        <div className='product-card overflow-hidden position-relative p-[15px] bg-white rounded-[10px]'>
            <div className='wishlist-icon position-absolute '>
              <Link><img src={wish} alt='wishlist'/></Link>
            </div>
            <div className='product-image'>
                <img src='https://cdn.shopify.com/s/files/1/1367/5201/products/PowerWordmarkSsT-ShirtBlackA2A9H-BBBB0044_640x.jpg?v=1684492475'  alt='product img' />
                <img src='https://cdn.shopify.com/s/files/1/1367/5201/products/PowerWordmarkSsT-ShirtBlackA2A9H-BBBB0047_1920x.jpg?v=1684492475'  alt='product img' />
            </div>
            <div className='product-details'>
              <h6 className='product-title '>Power Washed T-Shirt</h6>
              <h5 className='product-size'>
                Oversized
              </h5>
              <p className='price font-medium'>50$</p>
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-[15px]'>
                <Link>
                  <img src={addcart} alt='addcart' />
                </Link>
                <Link>
                  <img src={view} alt='view' />
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard