//display task entry
import React, {useState} from 'react'
import './Task.css'
import Edit from './../assets/svg_edit_2.svg';
import Bin from './../assets/svg_bin_1.svg';
import EditTask from './EditTask';

export default function Task( {task} ) {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false); 

  const toggleModalHandler = () => {
    setIsModalDisplayed(prev => !prev)
  }

  return (
    <>
      <div className='TaskEntry'> 
        <div className='Task'> <p> {task.name} </p> </div>
        <div className='TaskControl'> 
          {/* edit / delete buttons */}
          <div 
            className='ControlElem'
            onClick={toggleModalHandler}
          >
            <img src={Edit}/>
          </div>
          <div className='ControlElem'> 
            <img src={Bin}/>
          </div>
        </div>
      </div>
      {/* EditTask modal */}
      {isModalDisplayed ? 
      <EditTask 
        task={task}
        toggleModalHandler={toggleModalHandler}
        
      /> : null}
    </>
  )
}
