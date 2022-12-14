import React from 'react'
import './CreateTask.css'
import { useFormDataContext } from '../contexts/FormDataContext';

export default function CreateTask() {
 const { taskEntry, inputHandler, submitForm } = useFormDataContext();

  return (
    <div className="SubmitTask"> 
      <h2> Add task </h2>
      <form>
        <input
          type="text"
          onChange={(e) => inputHandler(e, 'create')}
          value={taskEntry.name}
          name="name"
          placeholder={"e.g. do the dishes"} /> 
        <button onClick={(e) => submitForm(e, 'create')}> Submit </button>
      </form>  
    </div>
  )
}
