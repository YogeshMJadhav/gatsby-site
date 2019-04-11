import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

class Contact extends React.Component{
    render(){
        return(
            <form 
            name="contact"
            method="POST"
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

            <div className="form-group">
                <label htmlFor="inputMessage">Message </label>
                <textarea name="message" className="form-control" placeholder="Message" id="inputMessage" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary"  >Send Message</button>
        </form>
        )
    }
}

export default Contact;
