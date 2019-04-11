const path=require("path")
const Promise = require('bluebird')

exports.createPages=({graphql,boundActionCreators}) => {
    const {createPage} =boundActionCreators
    return new Promise((resolve ,reject) =>{
        const post=path.resolve('src/templates/service-view.js')
        const company=path.resolve('src/components/header.js')
        resolve(
            graphql(`
            {
                allContentfulServices{
                    edges{
                      node{
                        slug
                        id
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
              }
            `).then((result) =>{
                 if(result.errors) {
                     reject(result.errors)
                 }                
                result.data.allContentfulServices.edges.forEach(element => {
                    createPage({
                        path:element.node.slug,
                        component:post,
                        context:{
                           slug:element.node.slug
                        }
                    }) 
                })
                createPage({
                    path:'header',
                    component:company,
                    context:{
                       company:result.data.contentfulCompanyOverview
                    }
                }) 
            })
        )
    })
}
