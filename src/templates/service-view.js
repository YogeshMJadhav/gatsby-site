import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

class WebApp extends React.Component {
    render() {
        const post = this.props.data.contentfulServices;
        console.log(post);
return  (
  <Layout>
    <SEO title="Web Application" keywords={[`gatsby`, `application`, `react`]} />
    <Fade>
    <div className="wrapper">
    <div className="pagebanner pagebannerLess">
            <div className="pagebannerMax">
                <h1 className="white">{post.title} </h1>
                 <h3 className="white mb-3">{post.tagline}</h3> 
                {/* <!-- <p className="white">The easiest way to get started is to use Ghost(Pro). If you prefer to self-host, we strongly recommend an Ubuntu server with at least 1GB of memory to run Ghost.</p> --> */}
                <div className="banner-icons" >
                {post.icons &&
                    post.icons.map((item) => {
                        // console.log(item);
                        
                        return(
                            <img src={item.file.url} alt="ReactJS" title="ReactJS" width="40" className="mr-1" />
                        )
                    })
                }
                    {/* <img src="images/tools/angular-icon.png" alt="AngularJS" title="AngularJS" width="40" className="mr-1" />
                    <img src="images/tools/js.png" alt="NodeJS" title="NodeJS" width="40" className="mr-1" />
                    <img src="images/tools/laravel-icon.png" alt="Laravel" title="Laravel" width="40" className="mr-1" /> */}
                </div>
                
            </div>
        </div>

        
<div className="whatWeSection pb-5">
    <div className="container container-less">


                <div class="row mt-3">
                    <div className="col-12">
                        <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/services/">Services</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{post.title} </li>
                        </ol>
                        </nav>
                    </div>
                </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-white shadow-1 brb4 p-5 ">

                {post.tool &&
                <div className="row mb-3">
                    <div className="col-12">
                        <strong>Tools:- </strong> 
                        {post.tool}
                    </div>    
                </div>}

                <div className="row">
                    <div className="col-12 font-large" >
                        <p
                            dangerouslySetInnerHTML={{
                            __html: post.shortBio.childMarkdownRemark.html,
                            }}
                        />
                    </div>    
                </div>


            <div className="mt-4"> 
                <div className="row">
                    <div className="col-12">
                        <h3> {post.paragraphHeading}</h3>          
                    </div>    
                </div>
                <div className="row">
                    {post.content && <div className="col-12">
                        <p
                        dangerouslySetInnerHTML={{
                            __html: post.content.childMarkdownRemark.html,
                        }}
                        />
                    </div>}
                   {
                     post.cardPost && 
                     post.cardPost.map((item) => {
                         console.log(item);
                         
                         return (
                          <div className="col-md-4  mt-3">
                            <div className="h-100   layout-border p-3 br10 ">
                            <h5> {item.title} </h5>          
                            <p
                        dangerouslySetInnerHTML={{
                            __html: item.content.childMarkdownRemark.html,
                        }}
                        />
                            </div>    
                         </div>   
                         )
                     })
                   }

                    {/* {
                      post.cardPost.images && 
                      post.cardPost.map((item,index) => {
                          log(item)
                          return (
                             <div className="col-md-6 mt-3">
                        <div className="h-100 p-3 layout-border br10" >
                            <img src={item.images[index].file.url} alt="Opencart" title="Opencart" width="40" className="mr-1" />
                            <h5> {item.title}</h5>          
                            <p
                        dangerouslySetInnerHTML={{
                            __html: item.content.childMarkdownRemark.html,
                        }}
                        />
                        </div>    
                       </div> 
                          )
                      })
                    } */}

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
export default WebApp;

export const pageQuery = graphql`
  query ServicesBySlug($slug: String!) {
    contentfulServices(slug: { eq: $slug }) {
        title
        slug
        tagline
        tool
        paragraphHeading
       
        shortBio{
          childMarkdownRemark{
            html
          }
        }
        content{
          childMarkdownRemark{
            html
          }
        }
        icons{
            file{
              url
            }
          }
          paragraphHeading2
          cardPost{
            title
            slug
            content{
              childMarkdownRemark{
                html
              }
            }
            images{
                file{
                  url
                }
              }
          }
    }
  }
`
