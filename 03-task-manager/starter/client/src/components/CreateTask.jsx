import React, { useEffect } from 'react'
import './CreateTask.css'
import { useFormDataContext } from '../contexts/FormDataContext';

export default function CreateTask() {
  const operation = 'create';
  const { 
    charCount, 
    validationData, 
    createTaskEntry, 
    inputHandler, 
    submitForm, 
    statusMessage,
    isDisabled, 
  } = useFormDataContext();

  useEffect(()=>{
    console.log(isDisabled);
  }, [isDisabled])
  return (
    <div className="SubmitTask"> 
      {/* <h2> Add task </h2> */}
      <form>
        <input
          type="text"
          onChange={(e) => inputHandler(e, operation)}
          value={createTaskEntry?.name || ''}
          name="name"
          placeholder={ "e.g. do the dishes "} 
          maxLength={validationData?.name?.maxlength}
        /> 
        <button 
          disabled={ isDisabled }
          onClick={(e) => submitForm(e, operation)}
        > Submit 
        </button>
      </form>  
      <div className="StatusMessage"> 
        <p> { statusMessage } </p>
      </div>
      <div className="CharacterCount"> 
        <p> {`(${ charCount } / ${ validationData?.name?.maxlength[0] || 0 })`} </p>
      </div>
    </div>
  )
}
