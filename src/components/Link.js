import React from 'react'
import { HashNavLink } from './HashLink'

export default ({ to, ...rest }) => {
  if (to.charAt(0) !== '/') {
    return (
      <a href={to} {...rest}>
        {rest.children}
      </a>
    )
  }
  return <HashNavLink to={to} {...rest} />
}
