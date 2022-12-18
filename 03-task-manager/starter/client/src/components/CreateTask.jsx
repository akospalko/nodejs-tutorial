import React from 'react'
import './CreateTask.css'
import { useFormDataContext } from '../contexts/FormDataContext';
import { TASK_PLACEHOLDER } from '../helper/statusMessages';
import Loader from './Loader';
export default function CreateTask() {
  const operation = 'create';
  const { 
    charCount, 
    validationData, 
    createTaskEntry, 
    inputHandler, 
    submitForm, 
    isSubmittingForm,
    statusMessage,
    isDisabled, 
  } = useFormDataContext();

  //conditional rendering
  let renderedContent = 
    <div className="SubmitTask"> 
      <form>
        <input
          type="text"
          onChange={(e) => inputHandler(e, operation)}
          value={createTaskEntry?.name || ''}
          name="name"
          placeholder={ TASK_PLACEHOLDER } 
          maxLength={validationData?.name?.maxlength}
        /> 
        <button 
          disabled={ isDisabled.create }
          onClick={(e) => submitForm(e, operation)}
        > Submit 
        </button>
      </form>  
      <div className="StatusMessage"> 
        <p> { statusMessage.create } </p>
      </div>
      <div className="CharacterCount"> 
        <p> {`(${ charCount.create } / ${ validationData?.name?.maxlength[0] || 0 })`} </p>
      </div>
    </div>

  if(isSubmittingForm) {
    renderedContent = 
    <div className="SubmitTask"> 
      <Loader/> 
    </div> 
  }
  
  return (
    <>
      { renderedContent }
    </>
  )
}