import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

class Career extends React.Component{
render() {
    const carrer=this.props.data.contentfulCareer;
    console.log(carrer);
    return(
        <Layout>
          <SEO title="Career" />
          <Fade>
              <div className="wrapper">
                   <div className="pagebanner">
                      <div className="pagebannerMax">
                          <h1 className="white">{carrer.title}</h1>
                          <h3 className="mb-4 white">{carrer.tagline}</h3> 
                      </div>
                  </div>
                  <div className="whatWeSection pb-5">
                      <div className="container">
                          <div className="row">
                              <div className="col-12">
                              <div className="bg-white shadow-1 brb4 p-5 ">
                                 <div className="row">
                                  <div className="col-12">
                                    <p
                                        dangerouslySetInnerHTML={{
                                       __html: carrer.description.childMarkdownRemark.html,
                                         }}
                                    />
                                  </div>
                              </div>
                                  <div className="row mt-2">
                                  {
                                      carrer.careerArticleRef.map((item) => {
                                          return (
                                            <div className="col-md-6 mb-4">
                                            <div className=" br-4 p-3  job-article h-100" >
                                              <h5> {item.title} </h5>
                                              <p>
                                                  <em> Experience: {item.experience} </em>
                                              </p>
                                              <p>
                                                  <strong>Skills Required: </strong> <span> {item.skillsRequired}</span>
                                              </p>
                                              <div>
                                                  <strong> Job Description: </strong>
                                                  <div
                                                       dangerouslySetInnerHTML={{
                                                       __html: item.description.childMarkdownRemark.html,
                                                         }}
                                                          />                          
                                               </div>
                                             </div>
                                          </div> 
                                          )
                                      })
                                  }
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
}
} 


export default Career;


export const pageQuery = graphql`
query Carrer {
    contentfulCareer{
        title
        tagline
        description{
          childMarkdownRemark{
            html
          }
        }
        careerArticleRef{
          title
          experience
          skillsRequired
          description{
            childContentfulRichText{
              html
            }
          }
        }
      }
}
`