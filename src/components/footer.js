import React from "react"
import { Link } from "gatsby"
const Footer = () => (
    <div className="footer">
               <div className="d-flex justify-content-center mb-3 footerNav">
                     <p className="ml-3 mr-3 mb-0"><Link to="/" >Home </Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/about-us/">About Us</Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/team/">Team</Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/services/" >Services</Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/career/" >Career</Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/contact/" >Contact</Link></p>
               </div>
               <div className="d-flex justify-content-center mb-3 footerContact">

                   <div className="mainPhone d-flex">
                       <div className="phone1"><i className="fas fa-phone phoneFont mr-1"></i> USA <a href="tel:+1 860-9670120" className="black mr-3"> +1 860-9670120</a></div>
                       <div className="phone2"><i className="fas fa-phone phoneFont mr-1 ml-1"></i>IND <a href="tel:+91 9767-024642" className="black mr-3">+91 9767-024642</a></div>
                   </div>

                   <div className="mainEmailSocial d-flex">
                       <div className="email"><i className="fas fa-envelope mr-1"></i><a href="mailto:contact@ivisionstudio.in" className="black mr-3">contact@ivisionstudio.in</a></div>
                       <div className="social d-flex">
                           <Link to="https://www.facebook.com/" target="_blank" className="socialIcon mr-2"><i className="fab fa-facebook-f black font-14"></i></Link>
                           <Link to="https://www.instagram.com/" className="socialIcon mr-2" target="_blank"><i className="fab fa-instagram black font-14"></i></Link>
                           <Link to="https://in.linkedin.com/" className="socialIcon mr-2" target="_blank"><i className="fab fa-linkedin-in black font-14"></i></Link>
                       </div>
                   </div>

               </div>

               <hr className="mb-3"/>
               <div className="text-center footerCopy">
                   Copyright ©2019 All rights reserved | Website Design by <a href="http://ivisionstudio.in/">iVision Web Studio</a>
               </div>
           </div>
)

export default Footer
