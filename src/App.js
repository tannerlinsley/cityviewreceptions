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
    font-size: 18px;
    line-height: 1.3rem;

    :after {
      pointer-events: none;
      content: '';
      z-index: 10000;
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0 1rem;
      border-left: 5px solid rgba(193, 150, 32, 0.8);
      border-right: 5px solid rgba(193, 150, 32, 0.8);
    }
  }
`

export default () => (
  <Router>
    <Routes />
  </Router>
)
