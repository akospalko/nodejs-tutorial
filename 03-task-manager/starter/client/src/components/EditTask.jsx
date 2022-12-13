import React, { useState } from 'react';
import './EditTask.css';
import ReturnButton from '../assets/svg_return_1.svg';

export default function EditTask( {task, toggleModalHandler}) {
const [updatedTask, setUpdatedTask] = useState({})
  //form handlers
  const SubmitForm = () => {

  }
  const InputCheckboxHandler = () => {

  }
  const TextInputHandler = () => {
    
  }

  return (
    <div className='Background'> 
      <div className='Modal'> 
        <div className='Title'> 
          <div 
            className='ReturnButton'
            onClick={toggleModalHandler}
          > 
            <img src={ReturnButton}/>
          </div>
          <h2> Edit task </h2>
          <div className='Dummy'>  </div>
        </div>
        {/* form  */}
        <div className='EditTaskForm'>
          <form>
            <label className='InputGroup'> 
              <span className='Label'> ID </span>
              <div className='ID'> {task._id} </div>
            </label >
            <label className='InputGroup'> 
              <span className='Label'> Name </span>
              <input 
                className='InputText' 
                onChange={InputCheckboxHandler} 
                type="text" 
                value={task.name} 
                name={'name'} 
                placeholder={' task name comes here.'}/>
            </label>
            <label className='InputGroup Checkbox'> 
              <span className='Label'> Completed  </span>
              <input 
                className='InputCheckbox'
                onChange={TextInputHandler} 
                type="checkbox"  
                name="scales" 
                checked={task.completed}
              />
            </label>
          </form>
        </div>
        <div className='Button'> <button> Edit </button> </div>
      </div>
    </div>
  )
}
