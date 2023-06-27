import React from 'react'
import ReactStars from "react-stars"

const Discount = () => {
  return (
    <div className='col-4'>
        <div className='discount-product-card '>
          <div className='d-flex justify-content-between'>
            <div>
            <img src='https://cdn.shopify.com/s/files/1/1367/5201/products/PowerWordmarkSsT-ShirtBlackA2A9H-BBBB0044_640x.jpg?v=1684492475'  alt='discount img' />
            </div>
            <div className='discount-product-content'>
              <h5 className='brand'>Havels</h5>
              <h6 className='title'>
                Tricou Gymshark
              </h6>
              <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700' />
              <p className='price'>
                <span className='red-p'>$100</span> <strike>200$</strike>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Discount