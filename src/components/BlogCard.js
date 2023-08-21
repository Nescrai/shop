import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
    <div className='col-4'>
        <div className='blog-card'>
            <div className='card-iamge'>
                <img src='https://img.gymshark.com/image/fetch/q_auto,f_auto,w_720/https://images.ctfassets.net/8urtyqugdt2l/4s2x9LAVkIo6aSpexMQ516/086395bb66ad2080118b42cb6aa140ec/foam_roller_tile.jpg' className='img-fluid' alt="blog" />
            </div>
            <div className='blog-content'>
              <div className='blog-content'>
              <p className='date'>20 Aug, 2023 </p>
                <h5 className='categori'>CONDITIONING</h5>
                <h5 className='title'>WHAT IS A FOAM ROLLER, AND WHAT ARE THE BENEFITS OF USING ONE?</h5>
                <p className='desc'>
                It’s not everyday we can turn to the wizardry of a masseuse’s hands to knead and squeeze the pain and stiffness out of our muscles. Instead, turn to a foam roller for all your self-massage needs. Here’s the lowdown! 
                </p>
                <Link to="/" className='button mt-[10px]'>
                  Read More
                </Link>
                
              </div>
            </div>
        </div>
        <div className='blog-card'>
            <div className='card-iamge'>
                <img src='https://img.gymshark.com/image/fetch/q_auto,f_auto/https://images.ctfassets.net/8urtyqugdt2l/55voijVEn6W6Sm8MgliiMI/ee92a8db63a9618a55694b194aee0cfa/grow-bigger-legs---tile-1.jpg' className='img-fluid' alt="blog" />
            </div>
            <div className='blog-content'>
              <div className='blog-content'>
              <p className='date'>20 Aug, 2023 </p>
                <h5 className='categori'>CONDITIONING</h5>
                <h5 className='title'>WHAT IS A FOAM ROLLER, AND WHAT ARE THE BENEFITS OF USING ONE?</h5>
                <p className='desc'>
                It’s not everyday we can turn to the wizardry of a masseuse’s hands to knead and squeeze the pain and stiffness out of our muscles. Instead, turn to a foam roller for all your self-massage needs. Here’s the lowdown! 
                </p>
                <Link to="/" className='button mt-[10px]'>
                  Read More
                </Link>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard