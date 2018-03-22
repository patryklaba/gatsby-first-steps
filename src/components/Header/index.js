import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h1 style={{ 
        margin: 0,
        display: 'inline-block'
        }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        fontFamily: 'sans-serif'
      }}>
        <Link to="/" style={{color: "white", textDecoration: 'none'}}>
          Home
        </Link>
        <Link to="/page-2" style={{color: "white", textDecoration: 'none'}}>
          Page 2
        </Link>
        <Link to="/page-3" style={{color: "white", textDecoration: 'none'}}>
          Page 3
        </Link>
      </div>
    </div>
  </div>
)

export default Header
