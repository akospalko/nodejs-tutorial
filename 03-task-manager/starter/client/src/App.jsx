import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import './App.css'
import FormDataContext from './contexts/FormDataContext';

function App() {
  return (
    <div className="App">
      <div className='BackgroundOverlay'>
        <div className="Header">
          <h1> Task manager </h1>
        </div>
        <FormDataContext>
          <div className="CreateTask">
            <CreateTask/>
          </div>
          <Tasks/>
        </FormDataContext>
      </div>
    </div>
  )
}

export default App
