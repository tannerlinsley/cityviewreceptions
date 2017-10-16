
    import React, { Component } from 'react'
    import { Switch, Route } from 'react-router-dom'

    import src_containers_Home from '../src/containers/Home'
import src_containers____ from '../src/containers/404'

    export default class Routes extends Component {
      render () {
        return (
          <Switch>
              <Route exact path={'/'} component={src_containers_Home} />
              <Route component={src_containers____} />
          </Switch>
        )
      }
    }
  