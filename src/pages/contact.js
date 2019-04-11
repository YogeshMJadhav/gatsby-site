import React from "react"
import { Link } from "gatsby"

class Contact extends React.Component {
    render(){
        return(
            <div>
                <form 
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="text" name="firstname"  placeholder="First Name"/>
                    <input type="text" name="lastname" placeholder="Last Name"/>
                    <input type="email" name="email"  placeholder="Email"/>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <textarea name="message"  placeholder="Message" id="inputMessage" rows="3"></textarea>
                <button type="submit" >Send Message</button>
                </form>
            </div>
        )
    }
}

export default Contact;
