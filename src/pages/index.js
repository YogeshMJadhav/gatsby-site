import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SlickSlider from '../components/home/slick-slider';
import WhatWeDo from '../components/home/what-we-do';
import FeaturedProjects from '../components/home/featured-projects';
import WhatOurCustomerSay from "../components/home/what-our-customer-say";
import Fade from 'react-reveal/Fade';

class IndexPage extends React.Component{
  render() {
    const service = this.props.data.allContentfulServices.edges;
    const portfolio = this.props.data.allContentfulPortfolio.edges;
 return (
  <div>
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Fade>
    <div className="slick-wrapper">
    <SlickSlider/>
    </div>
    <WhatWeDo service={service}/>
    <FeaturedProjects portfolio={portfolio} />
    <WhatOurCustomerSay/>
    </Fade>
  </Layout>
  </div>
)
}
}

export default IndexPage;



export const pageQuery = graphql`
  query Service {
    allContentfulServices{
      edges{
        node{
          icon{
            file{
              url
            }
          }
          title
          tool
          tagline
          slug
        }
      }
    }
    allContentfulPortfolio{
      edges{
        node{
          title
          slug
          projectLink
          projectImage{
            file{
              url
            }
          }
        }
      }
    }
        contentfulCompanyOverview{
        slug
        phone1
        phone2
        mailId1
        facebook
        instagram
        linkedin
        ivisionLogo{
          file
          {
            url
          }
        }
      }
  }`