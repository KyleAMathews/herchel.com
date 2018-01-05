import React from 'react'
import Helmet from 'react-helmet'

const pageName = 'Contact'

export default ({ data }) =>
  <div>
    <Helmet title={`${pageName} | ${data.site.siteMetadata.title}`} />
    <h1>{pageName}</h1>
    <h2>Email Addy</h2>
    <p>Email me at <a href="mailto:mike@herchel.com" target="_blank">mike@herchel.com</a></p>
    <h2>Tweet me on Twitter</h2>
    <p>Follow me at <a href="http://twitter.com/mikeherchel" target="_blank">@mikeherchel</a></p>
    <h2>Find out where I'll be speaking next</h2>
    <p>I'm on Lanyrd at <a href="http://lanyrd.com/profile/mherchel/" target="_blank">lanyrd.com/profile/mherchel/</a></p>
    <h2>Git me on Github</h2>
    <p>I'm on github at <a href="https://github.com/mherchel" target="_blank">github.com/mherchel</a></p>
    <h2>Friend me on Facebook</h2>
    <p>Facebook profile is at <a href="http://www.facebook.com/mherchel" target="_blank">facebook.com/mherchel</a></p>
    <h2>Drupal.org Profile</h2>
    <p>Find me on D.O at <a href="http://drupal.org/user/118428" target="_blank">drupal.org/user/118428</a></p>
    <h2>I don't use LinkedIn</h2>
    <p>But when I do, I'm at <a href="http://www.linkedin.com/in/mherchel" target="_blank">linkedin.com/in/mherchel</a></p>
  </div>

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`