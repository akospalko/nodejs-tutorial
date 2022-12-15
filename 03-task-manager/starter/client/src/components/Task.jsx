//display task entry
import React, { useState } from 'react'
import './Task.css'
import Edit from './../assets/svg_edit_2.svg';
import Bin from './../assets/svg_bin_1.svg';
import EditTask from './EditTask';
import axios from 'axios';
import { useFormDataContext } from '../contexts/FormDataContext';

export default function Task( {task, taskID} ) {
  const { setIsSubmittingForm } = useFormDataContext();
  const [isModalDisplayed, setIsModalDisplayed] = useState(false); 

  //hanlders
  const toggleModalHandler = () => {
    setIsModalDisplayed(prev => !prev)
  }
  const deleteTaskEntryHandler = async (id) => {
    if(!id) return; 
    setIsSubmittingForm(true);
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
    } catch (error) {
      console.log(error);
    } 
   setIsSubmittingForm(false);
  }

  return (
    <>
      <div className='TaskEntry'> 
        <div className='Task' style={ task.completed ? { backgroundColor: '#7c0fea' } : null }  > <p style={task.completed ? {textDecoration: 'line-through'} : null}> {task.name} </p> </div>
        <div className='TaskControl'> 
          {/* edit / delete buttons */}
          <div 
            className='ControlElem'
            onClick={toggleModalHandler}
          >
            <img src={ Edit } alt='edit button'/>
          </div>
          <div
            onClick={async () => deleteTaskEntryHandler(task._id)} 
            className='ControlElem'
          > 
            <img src={ Bin } alt='delete button'/>
          </div>
        </div>
      </div>
      {/* EditTask modal */}
      { isModalDisplayed ? 
      <EditTask 
        task= { task }
        taskID={ taskID }
        toggleModalHandler={ toggleModalHandler }
      /> : null }
    </>
  )
}
