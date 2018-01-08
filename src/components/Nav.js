import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

class Nav extends React.Component {
  constructor() {
    super()
    this.handleNavClick = this.handleNavClick.bind(this)
    this.state = { navVisible: false }
  }
  handleNavClick() {
    this.setState({ navVisible: !this.state.navVisible })
  }
  render() {
    return (
      <div>
        <button 
          className={buttonStyle}
          onClick={() => this.handleNavClick()}
          style={{ 'transform': this.state.navVisible ? 'rotate(90deg)' : '' }}
        >
          <span>Toggle Navigation</span>
        </button>
        <div className={navWrapperStyles} style={{'display' : this.state.navVisible ? 'block' : ''}}>
          <nav className={navStyles}>
            <Link onClick={() => this.handleNavClick()} to={'/'}>Home</Link>
            <Link onClick={() => this.handleNavClick()} to={'/about'}>About</Link>
            <Link onClick={() => this.handleNavClick()} to={'/philosophy'}>Philosophy</Link>
            <Link onClick={() => this.handleNavClick()} to={'/events'}>Events</Link>
          </nav>
          <section className={contactStyles}>
            <p>Email me at <a href="mailto:mike@herchel.com" target="_blank">mike@herchel.com</a></p>
            <p>Follow me at <a href="http://twitter.com/mikeherchel" target="_blank">@mikeherchel</a></p>
            <p>I'm on github at <a href="https://github.com/mherchel" target="_blank">github.com/mherchel</a></p>
            <p>Facebook profile is <a href="http://www.facebook.com/mherchel" target="_blank">facebook.com/mherchel</a></p>
            <p>Find me on D.O at <a href="http://drupal.org/user/118428" target="_blank">drupal.org/user/118428</a></p>
            <p>I don't use LinkedIn <a href="http://www.linkedin.com/in/mherchel" target="_blank">linkedin.com/in/mherchel</a></p>
          </section>
        </div>
      </div>
    )
  }
}

const buttonStyle = css`
  position: fixed;
  top: 35px;
  right: 20px;
  z-index: 3;
  border: 0;
  background: transparent;
  color: white;
  font-size: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: 0.2s;

  @media (min-width: 700px) {
    display: none;
  }

  &:before {
    content: "☰"
  }
  span {
    font-size: 0;
    position: absolute;
    visibility: hidden;
  }
`

const navWrapperStyles = css`
  @media (max-width: 700px) {
    display: none;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background: var(--primary);
    padding: 40px;
    text-align: left;
  }
`

const navStyles = css`
  margin: 0 0 20px;
  font-size: 40px;
  font-weight: bold;

  @media (min-width: 700px) {
    margin-top: 20px;
  }

  a {
    display: block;
    color: white;
    text-decoration: none;
  }
`

const contactStyles = css`
  color: rgba(255, 255, 255, 0.8);

  a {
    color: white;
  }
`

export default Nav