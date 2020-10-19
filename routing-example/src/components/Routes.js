import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => {
return (
  <BrowserRouter basename="routing">
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/contact' exact component={Contact} />
    </Switch>
  </BrowserRouter>
)
}

export default Routes