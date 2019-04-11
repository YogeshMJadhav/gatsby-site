import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
class Contact extends React.Component {
    render(){
        return(
            // <div>
            //     <form 
            //         name="contact"
            //         method="POST"
            //         data-netlify="true"
            //         data-netlify-honeypot="bot-field"
            //     >
            //         <input type="text" name="firstname"  placeholder="First Name"/>
            //         <input type="text" name="lastname" placeholder="Last Name"/>
            //         <input type="email" name="email"  placeholder="Email"/>
            //         <input type="text" name="subject" placeholder="Subject"/>
            //         <textarea name="message"  placeholder="Message" id="inputMessage" rows="3"></textarea>
            //         <button>Send Message</button>
            //     </form>
            // </div>
            <Layout>
  <SEO title="Contact" />
  <Fade>
        {/* <div>
            <form name=" contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
            >
             <input type="text" name="First Name" placeholder="First Name" />
             <input type="text" name="Last Name" placeholder="Last Name"/>
             <input type="text" name="email"placeholder="email" />
             <input type="text" name="Address" placeholder="Address" />
             <input type="text" name="Subject" placeholder="subject" />
             <button>Save</button>
            </form>
        </div> */}
        <div>
        <form 
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="#"
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
        <button type="submit"  className="btn btn-primary">Send Message</button>
        </form>
        </div>
        </Fade>
</Layout>
        )
    }
}

export default Contact;
