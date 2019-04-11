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
            
        <div>
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
        </div>
        )
    }
}

export default Contact;
