import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, posts }) => {
  console.log(siteTitle)
  const title = siteTitle[0].siteMetadata?.title
  return (
    <>
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {title}
            </Link>
            {posts.map(post => {
              return (
                <Link to={`/${post.slug}`} key={post.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
              )
            })}
          </h1>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  posts: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  posts: [],
}

export default Header
