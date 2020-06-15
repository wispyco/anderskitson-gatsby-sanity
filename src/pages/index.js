import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Header = styled.h1`
  ${tw`text-3xl ml-16`}
`
const Header2 = styled.h2`
  ${tw`text-2xl ml-16`}
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header>{data.sanityAbout.title}</Header>
    {data.allSanityPost.edges.map(({ node: posts }) => {
      return <Header2>{posts.title}</Header2>
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    sanityAbout {
      title
    }
    allSanityPost(limit: 2) {
      edges {
        node {
          title
        }
      }
    }
  }
`
