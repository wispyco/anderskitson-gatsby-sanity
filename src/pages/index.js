import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlockContent = require("@sanity/block-content-to-react")

const Header = styled.h1`
  ${tw`text-3xl`}
`
const Header2 = styled.h2`
  ${tw`text-2xl`}
`

const Wrap = styled.div`
  .read {
    ${tw`bg-black text-white p-2 mt-2 mb-2 block w-20 text-center rounded-full`}
  }
`

const Grid = styled.div`
  ${tw`grid md:grid-cols-2`}
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <div>
        <Header>{data.sanityAbout.title}</Header>
        <Header2>{data.sanityAbout.subTitle}</Header2>
        <BlockContent blocks={data.sanityAbout._rawBody} />
      </div>
      <div>
        <Header>{data.sanityBlogTitle.title}</Header>
        {data.allSanityPost.edges.map(({ node: posts }) => {
          return (
            <Wrap>
              <Header2>{posts.title}</Header2>
              <Link className="read" to={`/blog/${posts.slug.current}`}>
                read
              </Link>
            </Wrap>
          )
        })}
      </div>
    </Grid>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    sanityAbout {
      title
      subTitle
      _rawBody
    }
    sanityBlogTitle {
      title
    }
    allSanityPost(limit: 2) {
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
