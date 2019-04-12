import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

class About extends React.Component {
    render() {
        const about=this.props.data.contentfulAboutUs;
        console.log(about);
        
        return (
            <Layout>
              <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
               <Fade >
                  <div className="wrapper">
                       <div className="pagebanner">
                           <div className="pagebannerMax">
                              <h1 className="white">{about.title}</h1>
                              <h3 className="mb-4 white">{about.tagline}</h3> 
                           </div>
                      </div>
                      <div className="whatWeSection pb-5">
                           <div className="container">
                                <div className="row">
                                   <div className="col-12">
                                     <div className="bg-white shadow-1 brb4 p-5 ">
                                        <p
                                            dangerouslySetInnerHTML={{
                                        __html: about.aboutInfo.childContentfulRichText.html,
                                            }}
                                        />
                                        <div className="row mt-4">
                                              <div className="col-md-5 mb-3"> <img src={about.image.file.url} className="img-responsive img-fluid" /></div>
                                              <div className="col-md-7">
                                                    <div
                                                       dangerouslySetInnerHTML={{
                                                       __html: about.asACompany.childContentfulRichText.html,
                                                       }}
                                                     />
                                              </div>
                                          </div> 
          
          
                                        <div className="row">
                                              <div className="col-md-6">
                                                   <div
                                                       dangerouslySetInnerHTML={{
                                                       __html: about.whyUs.childContentfulRichText.html,
                                                       }}
                                                     />
                                              </div>
                                               <div className="col-md-6 bg-whitec">
                                                   <div
                                                       dangerouslySetInnerHTML={{
                                                       __html: about.ourStrategies.childContentfulRichText.html,
                                                       }}
                                                     />  
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
    }
}

export default About;

export const pageQuery = graphql`
query About {
    contentfulAboutUs{
        title
        tagline
        image{
          file{
            url
          }
        }
        asACompany{
          childContentfulRichText{
            html
          }
        }
        aboutInfo{
          childContentfulRichText{
            html
          }
        }
        
        whyUs{
          childContentfulRichText{
            html
          }
        }
        ourStrategies{
          childContentfulRichText{
            html
          }
        }
        
      }
}
`