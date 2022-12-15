import React, { useEffect } from 'react';
import './EditTask.css';
import ReturnButton from '../assets/svg_return_1.svg';
import { useFormDataContext } from '../contexts/FormDataContext';

export default function EditTask( {task, taskID, toggleModalHandler}) {
const {
  updateTaskEntry,
  inputHandler,
  submitForm,
  setActiveID,
  charCount,
  setCharCount,
  validationData,
  statusMessage,
  isDisabled } = useFormDataContext();

  // actions when modal is opened: set active id, update char count
  useEffect(() => {
    setActiveID(taskID);
    setCharCount(updateTaskEntry.name.length)
  }, [setActiveID, setCharCount, taskID, updateTaskEntry?.name?.length])

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
                placeholder={ 'task name comes here' }/>
            </label>
            <div className="CharacterCountEdit">
              <p> {`(${ charCount } / ${ validationData?.name?.maxlength[0] || 0 })`} </p>
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
          <div className="StatusMessage">
            <p> { statusMessage } </p>
          </div>
        </div>
        <div className='Button'>
          <button
            disabled={ isDisabled }
            onClick={(e) => submitForm(e, 'update', toggleModalHandler)}
          > Edit
          </button>
        </div>
      </div>
    </div>
  )
}
