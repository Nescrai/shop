import React from 'react'
import ProductCard from '../components/ProductCard';
import { Link } from "react-router-dom"
import mainbanner from "../assets/images/catbanner-01.jpg";
import catbanner1 from "../assets/images/catbanner-01.jpg";
import catbanner2 from "../assets/images/catbanner-01.jpg";
import catbanner3 from "../assets/images/catbanner-01.jpg";
import catbanner4 from "../assets/images/catbanner-01.jpg";
import { TbTruckDelivery, TbShoppingCartDiscount } from "react-icons/tb";
import { FaGifts, FaCcAmazonPay } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";



function Home() {
  return (
    <div>
       <section className='home-wrapper-1 py-5'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img src={mainbanner} className='img-fluid rounded-4' alt='main banner' />
                <div className='main-banner-content position-absolute top-[30%] left-[10%]'>
                  <h4>PURE PERFORMANCE.</h4>
                  <h5>Ian HOODIE</h5>
                  <p></p>
                  <Link className='button mt-6'>SHOP NEW RELEASES</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
               <div className='d-flex flex-wrap gap-[10px] justify-content-between align-items-center'>
               <div className='small-banner position-relative p-3'>
                <img src={catbanner1} className='img-fluid rounded-5 w-[405px] h-[265px]' alt='main banner' />
                <div className='small-banner-content position-absolute top-[15%] left-[10%]'>
                  <h4>PURE PERFORMANCE.</h4>
                  <h5>Ian HOODIE</h5>
                  <p></p>
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src={catbanner2} className='img-fluid rounded-5 w-[405px] h-[265px]' alt='main banner' />
                <div className='small-banner-content position-absolute top-[15%] left-[10%]'>
                  <h4>PURE PERFORMANCE.</h4>
                  <h5>Ian HOODIE</h5>
                  <p></p>
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src={catbanner3} className='img-fluid rounded-5 w-[405px] h-[265px]' alt='main banner' />
                <div className='small-banner-content position-absolute top-[15%] left-[10%]'>
                  <h4>PURE PERFORMANCE.</h4>
                  <h5>Ian HOODIE</h5>
                  <p></p>
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src={catbanner4} className='img-fluid rounded-5 w-[405px] h-[265px]' alt='main banner' />
                <div className='small-banner-content position-absolute top-[15%] left-[10%]'>
                  <h4>PURE PERFORMANCE.</h4>
                  <h5>Ian HOODIE</h5>
                  <p></p>
                </div>
              </div>
               </div>
            </div>
          </div> 
      </section>
      <section className='home-wrapper-2 py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-[15px]'>
                  <TbTruckDelivery className='text-4xl wrapper-img' />
                  <div>
                    <h6 className='font-bold'>Livrare Gratuita</h6>
                    <p>Cumparaturi De La 150LEI</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-[15px]'>
                  <FaGifts className='text-4xl wrapper-img' />
                  <div>
                    <h6 className=' font-bold'>Oferte Noi Zilnice</h6>
                    <p>Salveaza Pana La 25%</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-[15px]'>
                  <TfiHeadphoneAlt className='text-4xl wrapper-img' />
                  <div>
                    <h6 className='font-bold'>Suport 24/7</h6>
                    <p>Suntem Alaturi Pentru Orice Problema</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-[15px]'>
                  <TbShoppingCartDiscount className='text-4xl wrapper-img' />
                  <div>
                    <h6 className='font-bold'>Preturi Bune</h6>
                    <p>Calitate La Pret Mic</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-[15px]'>
                  <FaCcAmazonPay className='text-4xl wrapper-img' />
                  <div>
                    <h6 className='font-bold'>Plata Sigura</h6>
                    <p>100% Protejarea Platii</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper ml-[10px] py-3 home-wrapper-2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='text-[26px] leading-[] font-medium mb-[30px]'>Colectie Noua</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> 
            
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-4 ml-[10px] home-wrapper-2 '>
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-4">
              <div className='famous-card position-relative'>
                <img src='https://images.ctfassets.net/wl6q2in9o7k3/40VyGZ3B2mgb2xObRqb5QF/c1317a357d2f443038cce6d72f20ea40/GY79807_SEO-AO-021_Shop-Womens-INTL_660x840.jpg?w=1920&q=90' alt='famous' className='img-fluide' />
                <div className='famous-content position-absolute'>
                <p>Shop Women</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className='famous-card position-relative '>
                <img src='https://images.ctfassets.net/wl6q2in9o7k3/3tvaR1AOZjrjLOaljn6G1Y/db3f829d3b8b3df3f235e4dcff5a071e/accessories_shop_accessories_card.jpg?w=1920&q=90' alt='famous' className='img-fluide' />
                <div className='famous-content position-absolute'>
                <p>Shop Women</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className='famous-card position-relative'>
                <img src='https://images.ctfassets.net/wl6q2in9o7k3/40VyGZ3B2mgb2xObRqb5QF/c1317a357d2f443038cce6d72f20ea40/GY79807_SEO-AO-021_Shop-Womens-INTL_660x840.jpg?w=1920&q=90' alt='famous' className='img-fluide' />
                <div className='famous-content position-absolute'>
                <p>Shop Men</p>
                </div>
              </div>
            </div>         
          </div>
        </div>
      </section>
      {/* <section className='discount-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='discount-heading'>Ofertele Lunii</h3>
            </div>
          </div>
          <div className='row'>
            <Discount />
            <Discount />
            <Discount />
          </div>
        </div>
      </section> */}
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='text-[26px] leading-[] font-medium mb-[30px]'>Cele Mai Populare</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='famous-wrapper-2 py-4 ml-[10px] home-wrapper-2'>
        <div className='container-fluid'>
          <div className='row '>
            <div className="col-4">
              <div className='famous-card position-relative'>
                <img src='https://images.ctfassets.net/wl6q2in9o7k3/40VyGZ3B2mgb2xObRqb5QF/c1317a357d2f443038cce6d72f20ea40/GY79807_SEO-AO-021_Shop-Womens-INTL_660x840.jpg?w=1920&q=90' alt='famous' className='img-fluide' />
                <div className='famous-content position-absolute'>
                <p>Shop Women</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className='famous-card position-relative '>
                <img src='https://images.ctfassets.net/wl6q2in9o7k3/3tvaR1AOZjrjLOaljn6G1Y/db3f829d3b8b3df3f235e4dcff5a071e/accessories_shop_accessories_card.jpg?w=1920&q=90' alt='famous' className='img-fluide' />
                <div className='famous-content position-absolute'>
                <p>Shop Women</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className='famous-card position-relative'>
                <img src='https://images.ctfassets.net/wl6q2in9o7k3/40VyGZ3B2mgb2xObRqb5QF/c1317a357d2f443038cce6d72f20ea40/GY79807_SEO-AO-021_Shop-Womens-INTL_660x840.jpg?w=1920&q=90' alt='famous' className='img-fluide' />
                <div className='famous-content position-absolute'>
                <p>Shop Men</p>
                </div>
              </div>
            </div>         
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home