import React from 'react'
import './CreateTask.css'

export default function CreateTask() {
  return (
    <div className="SubmitTask"> 
      <h2> Add task </h2>
      <form>
          <input placeholder={"e.g. do the dishes"} /> 
          <button> Submit </button>
      </form>  
    </div>
  )
}
