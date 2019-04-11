import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

class  FeaturedProjects extends React.Component{
    render() {
        
return (
    <div className="FeaturedProjects pt-5" id="FeaturedProjects" >
    <div className="container">
        <h2 className="mb-4">Featured Projects</h2>
        <div className="row">
        {
            this.props.portfolio.map((item) => {
                return(
                    <Fade >
                    <div className="col-md-6 col-lg-4 col-sm-6 mb-5">
                        <div className="FeaturedImg">
                            <img src={item.node.projectImage && item.node.projectImage.file.url} alt="Image2" className="img-fluid"/> 
                            <div className="overlay">
                              <div className="content text"><a href={item.node.projectLink} target="_blank"><button className ="FeaturedBtn"> Visit Website</button></a> </div>
                             </div>
                          
                        </div>
                     </div>
                  </Fade> 
                )
            })
        }
        </div>
    </div>
</div>
   
)
}
}

export default FeaturedProjects
