import React from 'react';
import { Link } from 'react-router-dom'

const App = ({ children }) => {
  return (
    <main>
      <h1>@dhf/routing</h1>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  )
}
 
export default App;