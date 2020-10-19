import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const App = ({name}) => {
return (
  <BrowserRouter>
    <header>
      <h1>{name}</h1>
      <nav>
        <ul>
        <li>
            <Link to='/'>Home</Link>
          </li>
        <li>
            <Link to="/independent-project">Independente</Link>
          </li>
          <li>
            <Link to="/routing">Rotas</Link>
          </li>
          <li>
            <Link to="/lazy">Rotas com Lazy</Link>
          </li>
          <li>
            <Link to='/parcel'>Parcel encadeado</Link>
          </li>
        </ul>
      </nav>
    </header>
  </BrowserRouter>
)
}

export default App