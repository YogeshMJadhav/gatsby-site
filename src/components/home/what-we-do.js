import React from "react"
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';

class WhatWeDo extends React.Component {
    render() {
        // const service = this.props.data.allContentfulServices;
        
        return (
            <div className="whatWeSection pt-5">
    <div className="container">
        <h2 className="mb-4">What We Do</h2>
        <div className="row">
        {
                      this.props.service.map((item) => {
                          console.log();
                          return(
                            <Slide bottom>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                                    <div className="card border-0 h-100">   
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <img src={item.node.icon && item.node.icon.file.url} title="Jam Developer" alt="Jam Developer" height="50px"/>
                                            </div>
                                            <h5 className="card-title">{item.node.title}</h5>
                                            <p className="small">{item.node.tool}</p>
                                            <p className="card-text">{item.node.tagline}</p>
                                            <p className="card-text"><small className="text-muted">
                                            <Link to={`/${item.node.slug}`}>Read more <i className="fas fa-chevron-right ml-1" ></i></Link></small></p>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                          )
                      })  
                    }
        </div>
    </div>

   <div className="text-center">
        <Link to='/services/'> <button className="btn mb-5">View all</button> </Link>
   </div> 
</div>
   
)
    }
}

export default WhatWeDo;
