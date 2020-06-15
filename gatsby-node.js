const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allSanityPost(sort: { fields: publishedAt, order: ASC }, limit: 1000) {
          edges {
            node {
              title
              slug {
                current
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allSanityPost.edges
  const postsPerPage = 1
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  let pageArray = []
  result.data.allSanityPost.edges.map(({ node: page }, i) => {
    pageArray.push(page.slug.current)
  })

  result.data.allSanityPost.edges.map(({ node: page }, i) => {
    console.log(pageArray)

    createPage({
      path: `blog/${page.slug.current}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        pageArray: pageArray,
      },
    })
  })
}
