import React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Header = styled.h1`
  ${tw`text-3xl`}
`
const Header2 = styled.h2`
  ${tw`text-2xl`}
`

const PostList = styled.li`
  ${tw`inline`}
`

export default class BlogList extends React.Component {
  render() {
    const { currentPage, pageArray } = this.props.pageContext
    console.log(pageArray)
    return (
      <Layout>
        {this.props.data.allSanityPost.edges.map(({ node: post }, i) => {
          return (
            <React.Fragment key={i}>
              <Header2>{post.title}</Header2>
              <Link
                to={`/blog/${
                  currentPage === 1
                    ? pageArray[currentPage - 1]
                    : pageArray[currentPage - 2]
                }`}
              >
                Previous
              </Link>
              <Link
                to={`/blog/${
                  currentPage === pageArray.length
                    ? pageArray[currentPage - 1]
                    : pageArray[currentPage]
                }`}
              >
                Next
              </Link>
              <h1>Post # {currentPage}</h1>

              <ul>
                {this.props.data.knife.edges.map(({ node: post }, i) => {
                  return (
                    <PostList>
                      <Link to={`/blog/${post.slug.current}`}>
                        {i !== 0 ? "~" : null} {post.title}{" "}
                        <span>
                          {i !== 0 && i === this.props.data.knife.edges.length
                            ? "~"
                            : null}
                        </span>
                      </Link>
                    </PostList>
                  )
                })}
              </ul>
            </React.Fragment>
          )
        })}
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allSanityPost(limit: $limit, skip: $skip) {
      edges {
        node {
          title
          slug {
            current
          }
        }
      }
    }
    knife: allSanityPost {
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
