/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GiLetterBomb } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"

function Footer() {
  return (
    <div className="bg-black">
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center text-white">
                <div className="text-4xl mr-[10px]">
                  <GiLetterBomb />
                </div>
                <h2 className="mb-0 text-2xl">ABONEAZA-TE LA NEWSLETTER</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white text-2xl mb-4"><a className="underline  underline-offset-[10px] decoration-4 decoration-blue-500">Contac</a>t Us</h4>
              <div>
                <address className="text-white ">Romania <br /> Bucuresti Sector 3 Palas <br />
                <a href="Email: haose@yahoo.com">Email: haose@yahoo.com </a> <br />
                <a href="Phone: +40 (+40) 123 456 789">Phone: +40 (+40) 123 456 789 </a> <br />
                </address>
                <div className="social-icons d-flex align-items-center gap-[15px]">
                  <a href="https://www.facebook.com" className="text-3xl text-blue-700">
                    <BsFacebook />
                  </a>
                  <a href="https://twitter.com/Gymshark" className="text-3xl text-blue-700">
                    <BsTwitter />
                  </a>
                  <a href="https://www.instagram.com/" className="text-3xl text-blue-700">
                    <AiFillInstagram />
                  </a>
                  <a href="https://www.youtube.com/" className="text-3xl text-blue-700">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
            <h4 className="text-white text-2xl mb-4"><a className="underline  underline-offset-[10px] decoration-4 decoration-blue-500">Informa</a>tion</h4>
            <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">Privacy Policy</Link>
                <Link className="text-white py-1 mb-1">Refund Policy</Link>
                <Link className="text-white py-1 mb-1">Shipping Policy</Link>
                <Link className="text-white py-1 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-1 mb-1">Blog</Link>
              </div>
            </div>
            <div className="col-3">
            <h4 className="text-white text-2xl mb-4"><a className="underline  underline-offset-[10px] decoration-4 decoration-blue-500">Accoun</a>t</h4>
            <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">About Us</Link>
                <Link className="text-white py-1 mb-1">Faq</Link>
                <Link className="text-white py-1 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
            <h4 className="text-white text-2xl mb-4"><a className="underline  underline-offset-[10px] decoration-4 decoration-blue-500">Quick Li</a>nks</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">Tricouri</Link>
                <Link className="text-white py-1 mb-1">Pantaloni</Link>
                <Link className="text-white py-1 mb-1">Adidasi</Link>
                <Link className="text-white py-1 mb-1">Hanorace</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}: Powered by House
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
