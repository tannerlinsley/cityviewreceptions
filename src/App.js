import React from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
//
import Routes from 'react-static-routes'
//

injectGlobal`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Lato', sans-serif;
    line-height: 1.3rem;
  }
`

export default () => (
  <Router>
    <Routes />
  </Router>
)
