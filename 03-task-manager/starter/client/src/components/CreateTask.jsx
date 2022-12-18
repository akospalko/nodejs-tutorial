import React from 'react'
import './CreateTask.css'
import { useFormDataContext } from '../contexts/FormDataContext';
import { useLoaderContext } from '../contexts/LoaderContext';
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
  const { isLoading, setIsLoading } = useLoaderContext();

  //conditional rendering
  const renderedContent = 
    <div className="SubmitTask"> 
      <form>
        <input
          type="text"
          onChange={ (e) => inputHandler(e, operation) }
          value={ createTaskEntry?.name || '' }
          name="name"
          placeholder={ TASK_PLACEHOLDER } 
          maxLength={ validationData?.name?.maxlength }
          disabled={ isSubmittingForm }
        /> 
        <button 
          disabled={ isDisabled.create }
          onClick={ (e) => submitForm(e, operation, null, setIsLoading) }
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
let loader;
  if(isLoading.create || isLoading.delete) {
    loader = 
    <div className="SubmitTask"> 
      <Loader/> 
    </div> 
  }
  
  return (
    <>
      { loader }
      { renderedContent }
    </>
  )
}