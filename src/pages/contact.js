import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

const Contact = () => (
<Layout>
  <SEO title="Contact" />
  <Fade>
    <div className="wrapper">
        <div className="pagebanner">
        <div className="pagebannerMax">
            <h1 className="white">Contact Us</h1>
        </div>
        </div>
        <div className="whatWeSection pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bg-white shadow-1 brb4 p-5 ">
                            <div className="row">
                                <div className="col-md-7 mb-5">
                                    <h3 className="mb-4"> Contact Form </h3>
                                        <form 
                                            name=" contact"
                                            method="post"
                                            data-netlify="true"
                                            data-netlify-honeypot="bot-field"
                                        >
                                            <div className="form-row">
                                                <div className="form-group col-lg-6">
                                                <label htmlFor="firstName">First Name</label>
                                                <input type="text" name="firstname" className="form-control" id="firstName" placeholder="First Name"/>
                                                </div>

                                                <div className="form-group col-lg-6">
                                                <label htmlFor="inputLastName">Last Name</label>
                                                <input type="text" name="lastname" className="form-control" id="inputLastName" placeholder="Last Name"/>
                                                </div>
                                                
                                            </div>
                                            <div className="form-group">
                                            <label htmlFor="inputEmail">Email</label>
                                            <input type="email" name="email"  className="form-control" id="inputEmail" placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputSubject">Subject</label>
                                                <input type="text" name="subject" className="form-control" id="inputSubject" placeholder="Subject"/>
                                            </div>
                                            {/* <div className="form-group">
                                                <label htmlFor="inputMessage">Message </label>
                                                <textarea name="message" className="form-control" placeholder="Message" id="inputMessage" rows="3"></textarea>
                                            </div> */}
                                        <button>Send Message</button>
                                        </form>
                                </div>
                                <div className="col-md-5">
                                    <div className=" mb-3 bg-white">
                                        <p className="mb-0 font-weight-bold">Phone</p>
                                        <p className="mb-1">USA <a href="tel:8609670120">+1 860 967 0120</a></p>
                                        <p className="mb-4">IND <a href="tel:8149441715">+91 8149 441 715</a></p>
                                        <p className="mb-0 font-weight-bold">Email Address</p>
                                        <p className="mb-4"><a href="mailto:contact@ivisionstudio.in">contact@ivisionstudio.in</a></p>
                                        <p className="mb-0 font-weight-bold">Address</p>
                                        <p className="mb-4">IVISION WEB STUDIO, Office no.1 Herambh Apt, Beside Kimaya Hotel
                                        PUNE, MAHARASHTRA 411038 India.</p>
                                    </div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7567.054327732735!2d73.822386!3d18.505065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e13c52b68392e92!2sivision+studio!5e0!3m2!1sen!2sin!4v1553501385197" frameBorder="0" width="100%" height="350" allowFullScreen="allowfullscreen"></iframe>        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  </Fade>
</Layout>
)

export default Contact;