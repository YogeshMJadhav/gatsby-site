const path=require("path")
const Promise = require('bluebird')

exports.createPages=({graphql,boundActionCreators}) => {
    const {createPage} =boundActionCreators
    return new Promise((resolve ,reject) =>{
        const post=path.resolve('src/templates/service-view.js')
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
               
            })
        )
    })
}
