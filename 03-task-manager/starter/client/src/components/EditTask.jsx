import React, { useEffect } from 'react';
import './EditTask.css';
import ReturnButton from '../assets/svg_return_1.svg';
import { useFormDataContext } from '../contexts/FormDataContext';

export default function EditTask( {task, taskID, toggleModalHandler}) {
const { taskEntry, inputHandler, submitForm, setActiveID } = useFormDataContext();
  // set active id when open entry modal
  useEffect(() => {
    setActiveID(taskID);
  }, [setActiveID, taskEntry, taskID]) 

  return (
    <div className='Background'> 
      <div className='Modal'> 
        <div className='Title'> 
          <div 
            className='ReturnButton'
            onClick={toggleModalHandler}
          > 
            <img src={ReturnButton} alt='return button' />
          </div>
          <h2> Edit task </h2>
          <div className='Dummy'>  </div>
        </div>
        {/* form  */}
        <div className='EditTaskForm'>
          <form>
            <label className='InputGroup'> 
              <span className='Label'> ID </span>
              <div className='ID'> {taskID} </div>
            </label >
            <label className='InputGroup'> 
              <span className='Label'> Name </span>
              <input 
                className='InputText' 
                onChange={(e) => inputHandler(e, 'update')} 
                type="text" 
                value={taskEntry.name || ''} 
                name={'name'} 
                placeholder={'task name comes here.'}/>
            </label>
            <label className='InputGroup Checkbox'> 
              <span className='Label'> Completed  </span>
              <input 
                className='InputCheckbox'
                onChange={(e) => inputHandler(e, 'update')} 
                type="checkbox"  
                name={"completed"} 
                checked={taskEntry.completed}
              />
            </label>
          </form>
        </div>
        <div className='Button'> 
          <button 
            onClick={(e) => submitForm(e, 'update', toggleModalHandler)} 
          > Edit 
          </button> 
        </div>
      </div>
    </div>
  )
}
