import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

const About = React.lazy(() => import('../pages/About'))
const Contact = React.lazy(() => import('../pages/Contact'))
const Home = React.lazy(() => import('../pages/Home'))

const Routes = () => {
return (
  <Suspense fallback={<h1>Carregando...</h1>}>
    <BrowserRouter basename="lazy">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </BrowserRouter>
  </Suspense>
)
}

export default Routes