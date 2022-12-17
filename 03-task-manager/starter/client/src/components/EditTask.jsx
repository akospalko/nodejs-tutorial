import React, { useEffect, useCallback } from 'react';
import './EditTask.css';
import ReturnButton from '../assets/svg_return_1.svg';
import { useFormDataContext } from '../contexts/FormDataContext';
import { TASK_PLACEHOLDER } from '../helper/statusMessages';
import { getTask } from '../helper/axiosRequests';
import updateState from '../helper/updateState';
import Loader from './Loader';

export default function EditTask({ taskID, toggleModalHandler }) {
const {
  updateTaskEntry,
  inputHandler,
  submitForm,
  isSubmittingForm,
  setActiveID,
  charCount,
  validationData,
  statusMessage,
  isDisabled,
  setUpdateTaskEntry,
  setStatusMessage
} = useFormDataContext();

  // fetch single task from api endpoint
  const getSingleTask = useCallback(async (taskID) => {
    const response = await getTask(taskID);
    const { data, resStatusMessage } = response;
    setUpdateTaskEntry(data);
    updateState(setStatusMessage, getSingleTask, resStatusMessage)
  }, [setStatusMessage, setUpdateTaskEntry])

  //set active id && get single task using id on first mount 
  useEffect(() => {
    getSingleTask(taskID);
      setActiveID(taskID);
  }, [getSingleTask, setActiveID, taskID])

  //conditional rendering
  let renderedContent =  
  // default: render form 
  <form>
    <label className='InputGroup'>
      <span className='Label'> ID </span>
      <div className='ID'> { taskID } </div>
    </label >
    <label className='InputGroup'>
      <span className='Label'> Name </span>
      <input
        className='InputText'
        onChange={(e) => inputHandler(e, 'update')}
        type="text"
        value={ updateTaskEntry.name || '' }
        name={'name'}
        placeholder={ TASK_PLACEHOLDER }
        maxLength={validationData?.name?.maxlength}
      />
    </label>
    <div className="CharacterCountEdit">
      <p> {`(${ charCount.update } / ${ validationData?.name?.maxlength[0] || 0 })`} </p>
    </div>
    <label className='InputGroup Checkbox'>
      <span className='Label'> Completed  </span>
      <input
        className='InputCheckbox'
        onChange={(e) => inputHandler(e, 'update')}
        type="checkbox"
        name={"completed"}
        checked={updateTaskEntry.completed}
      />
    </label>
  </form>
  if(isSubmittingForm) {
    //show loader
    renderedContent = <Loader /> 
  }
  

  return (
    <div className='Background'>
      <div className='Modal'>
        <div className='Title'>
          <div
            className='ReturnButton'
            onClick={toggleModalHandler}
          >
            { <img src={ ReturnButton } alt='return button' /> || '<'}
          </div>
          <h2> Edit task </h2>
          <div className='Dummy'>  </div>
        </div>
        {/* form  */}
        <div className='EditTaskForm'>
          { renderedContent }
          <div className="StatusMessage">
            <p> { statusMessage.update } </p>
          </div>
        </div>
        <div className='Button'>
          <button
            disabled={ isDisabled.update }
            onClick={(e) => submitForm(e, 'update', toggleModalHandler)}
          > Edit
          </button>
        </div>
      </div>
    </div>
  )
}