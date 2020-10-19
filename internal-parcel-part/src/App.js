import React, { useState } from 'react'
import Parcel from 'single-spa-react/parcel'

import { v4 as uuid } from 'uuid'

const App = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = evt => {
    updateTask(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    dispatchEvent(new CustomEvent(
      '@dhf/internal-parcel-part',
      {
        detail: {
          id: uuid(),
          describe: task
        }
      }
    ))
    updateTask('')
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={task}
        />
        <button>Adicionar</button>
      </form>
      <Parcel
        config={() => System.import('@dhf/internal-parcel')}
      />
    </>
  )
}

export default App