import { useState } from 'react'
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='BackgroundOverlay'>
        <div className="Header">
          <h1> Task manager </h1>
        </div>
        <div className="CreateTask">
          <CreateTask/>
        </div>
        <Tasks/>
      </div>
    </div>
  )
}

export default App
