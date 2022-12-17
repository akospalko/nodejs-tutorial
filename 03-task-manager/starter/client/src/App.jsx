import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import './App.css'
import FormDataContext from './contexts/FormDataContext';

function App() {
  return (
    <div className="App">
      <FormDataContext>
        {/* <Loader/> */}
        <div className='BackgroundOverlay'>
          <div className="Header">
            <h1> Task manager </h1>
          </div>
          <div className="CreateTask">
            <CreateTask/>
          </div>
          <Tasks/>
        </div>
      </FormDataContext>
    </div>
  )
}

export default App;
