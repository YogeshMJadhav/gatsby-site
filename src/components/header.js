import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
    state={
        visible:false
    }
    handleToggle=() => {
       this.setState({visible:!this.state.visible})
    }
    render() {
    const companyOverview=this.props.companyOverview;
        return(
          <div className="wrapper">
          <header>
                  <div className="top-line">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-10 col-md-10 font-15">
                                  <span className="mr-3"><i className="fas fa-phone phoneFont mr-1"></i>USA <a href={`tel:+1 ${companyOverview.phone1}`} className="black"> +1 {companyOverview.phone1}</a> <i className="fas fa-phone phoneFont mr-1 ml-2"></i>IND <a href={`tel:+91 ${companyOverview.phone2}`} className="black">+91 {companyOverview.phone2}</a></span>
                                  <span> <i className="fas fa-envelope font-12 mr-1"></i><a href="mailto:contact@ivisionstudio.in" className="black">{companyOverview.mailId1}</a> </span>
                              </div>  
                              <div className="col-lg-2 col-md-2 font-14 d-flex justify-content-end">
                                  <span className="mr-2"> <a href={companyOverview.facebook} target="_blank" className="socialIcon"><i className="fab fa-facebook-f black font-14"></i></a></span>
                                  <span className="mr-2"> <a href={companyOverview.instagram} className="socialIcon" target="_blank"><i className="fab fa-instagram black font-14"></i></a></span>
                                  <span className="mr-2"> <a href={companyOverview.linkedin} className="socialIcon" target="_blank"><i className="fab fa-linkedin-in black font-14"></i></a></span>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div className="mainNavBar">
                      <div className="container">
                          <nav className="navbar navbar-expand-lg navbar-light pl-0 pr-0">
                          <Link to="/" className="navbar-brand" href="#">
                          <img src={companyOverview.ivisionLogo.file.url} />
                          </Link>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={this.state.visible} aria-label="Toggle navigation"
                              onClick={this.handleToggle}>
                                  <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className={this.state.visible ? "collapse navbar-collapse show" : "collapse navbar-collapse" } id="navbarNavAltMarkup">
                                  <div className="navbar-nav" >
                                  <Link to="/" className="nav-item nav-link  mr-3">Home <span className="sr-only">(current)</span></Link>
                                  <Link to="/about-us/" className="nav-item nav-link mr-3">About Us</Link>
                                  <Link to="/services/" className="nav-item nav-link mr-3">Services</Link>
                                  <Link to="/career/" className="nav-item nav-link mr-3">Career</Link>
                                  <Link to="/team/" className="nav-item nav-link mr-3">Team</Link>
                                  <Link to="/contact/" className="nav-item nav-link ">Contact</Link>
                                  </div>
                              </div>
                          </nav>                 
                      </div>   
                  </div>
              </header>
          </div>
    )
              
    }
}
 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
