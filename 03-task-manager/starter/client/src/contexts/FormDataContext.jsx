import React, {createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios';
const FormContext = createContext();

export const useFormDataContext = () => {
  return useContext(FormContext);
}

export default function FormDataLayout({ children }) {
  //states
  const [data, setData] = useState('');
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [activeID, setActiveID] = useState('');
  const [taskEntry, setTaskEntry] = useState({name: '', completed: false}); // container for a single task entry: either to create or update (filtered out) task.
  
  //requests:
  const patchRequest = async () => {
    await axios.patch(`/api/v1/tasks/${activeID}`, taskEntry);
  }
  const postRequest = async () => { 
    try {
      await axios.post('/api/v1/tasks', taskEntry)
    } catch (error) {
      console.log(error);
    }
  }

  //filter out current active entry using activeID
  useEffect(()=> { 
    if(!activeID) return;
    if(!data) return; 
    const filteredEntry = data.filter(task => task._id === activeID);
    if(filteredEntry) {
      setTaskEntry(filteredEntry[0])
    }
  }, [activeID, data])

  //form handlers
 const submitForm = async (e, operation, toggleModal) => {
  e.preventDefault();
  setIsSubmittingForm(true);
  //execute axios request:u
  if(operation === 'create') {
    await postRequest();
  } else if(operation === 'update') {
    await patchRequest();
  }
  //post request to the appropriate api endpoint (requires task's id)
  setIsSubmittingForm(false);
  if(toggleModal){
    toggleModal(); // close modal after form is submitted
  }
}

//update
const inputHandler = (e, operation) => {
  const { name, value, checked } = e.target;
  const inputData = { ...taskEntry };
  let tempData = null;
  //CREATE Task
  if(operation === 'create') {
    if(name === 'name') {
      tempData = { ...inputData, [name]: value };
    }
    if(!tempData.hasOwnProperty('completed')) { //assign 'completed' entry to the obj when handler is first run
      tempData = { ...inputData, completed: false };
    }
  } //UPDATE Task
  else if( operation === 'update') {
    if(name === 'name') {
      tempData = { ...inputData, [name]: value };
    } else if(name === 'completed') {
      tempData = { ...inputData, [name]: checked };
    }
  }
  setTaskEntry(tempData); // create - update task
}

  return (
    <FormContext.Provider  
      value={{
        data, 
        setData, 
        isSubmittingForm, 
        setIsSubmittingForm,
        submitForm,
        inputHandler,
        taskEntry, 
        setTaskEntry,
        activeID, 
        setActiveID
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
