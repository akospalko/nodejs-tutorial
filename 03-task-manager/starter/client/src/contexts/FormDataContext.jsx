import React, {createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios';
const FormContext = createContext();

export const useFormDataContext = () => {
  return useContext(FormContext);
}

export default function FormDataLayout({ children }) {
  //form template
  const formData = {name: '', completed: false};
  //states
  const [data, setData] = useState('');
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [activeID, setActiveID] = useState('');
  const [createTaskEntry, setCreateTaskEntry] = useState(formData); // container for a single task entry: either to create or update (filtered out) task.
  const [updateTaskEntry, setUpdateTaskEntry] = useState(formData); // container for a single task entry: either to create or update (filtered out) task.
  const [statusMessage, setStatusMessage] = useState('add a task...');
  const [charCount, setCharCount] = useState(0);
  const [validationData, setValidationData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  //requests:
  const patchRequest = async () => {
    try {
      await axios.patch(`/api/v1/tasks/${activeID}`, updateTaskEntry)
      //.then {}
    } catch (error) {
      console.log(error);
    }
  }

  const postRequest = async () => { 
    try {
      await axios.post('/api/v1/tasks', createTaskEntry)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    } catch (error) {
      console.log(error);
    }
  }

  //request db validation data on first run
  useEffect(() => {
    console.log('fetching schema');
    const getValidationData = async () => {
      try {
        await axios.get('/api/v1/schema') 
        .then(res => {
          const { required, maxlength } = res.data.name;
          const { default: value } = res.data.completed;
          console.log(required, maxlength , value)
          console.log(res.data);
          //set max char count:
          setValidationData(res.data)
        })
        .catch(err => console.log(err))
      } catch (error) {
        console.log(error);
      }
    }
    getValidationData();
  }, [])

  //filter out current active entry using activeID
  useEffect(() => { 
    if(!activeID) return;
    if(!data) return; 
    const filteredEntry = data.filter(task => task._id === activeID);
    if(filteredEntry) {
      setUpdateTaskEntry(filteredEntry[0]);
    }
  }, [activeID, data])

  //form validation
  const formValidation = (operation, value, statusMessage) => {
    if(operation === 'create') {
      if(value.length > validationData.name.maxlength[0]) {
        console.log(validationData.name.maxlength[0]);
        setStatusMessage(`${validationData.name.maxlength[1]}`);
        setIsDisabled(true);
      } else if(value.length < 1) {
        setStatusMessage('add a new task...'); 
        setIsDisabled(true);
      } else {
        setStatusMessage('');
        setIsDisabled(false);
      }
    } else if(operation === 'update') {
      //separate isDisabled, statusMesage
      if(value.length > validationData.name.maxlength[0]) {
        console.log(validationData.name.maxlength[0]);
        setStatusMessage(`${validationData.name.maxlength[1]}`);
        setIsDisabled(true);
      } else if(value.length < 1) {
        setStatusMessage('edit task'); 
        setIsDisabled(true);
      } else {
        setStatusMessage('');
        setIsDisabled(false);
      }
    }
  }

  //form handlers
  const submitForm = async (e, operation, toggleModal) => {
    e.preventDefault();
    setIsSubmittingForm(true);
    setIsDisabled(true);// disable button on submit  
    //execute axios request
    if(operation === 'create') {
      await postRequest();
      setStatusMessage('task is created');
      setCreateTaskEntry(formData);
      setCharCount(0);
      setIsSubmittingForm(false);
      setTimeout(() => setStatusMessage('create new task'), 1000);
    } else if(operation === 'update') {
      await patchRequest();
      setStatusMessage('task is updated');
      setUpdateTaskEntry(formData);
      setCharCount(0);
      setIsSubmittingForm(false);
    }
    //post request to the appropriate api endpoint (requires task's id)
  
    if(toggleModal) {
      toggleModal(); // close modal after form is submitted
    }
  }

  // input handler for create - update
  const inputHandler = (e, operation) => {
    const { name, value, checked } = e.target;
    let tempData = null;
    //CREATE Task
    if(operation === 'create') {
      formValidation('create', value);
      const inputData = { ...createTaskEntry };
      if(name === 'name') {
        setCharCount(value.length)
        tempData = { ...inputData, [name]: value };
      }  
      if(!tempData.hasOwnProperty('completed')) { // assign 'completed' entry to the obj when handler is first run
        tempData = { ...inputData, completed: false };
      }
      setCreateTaskEntry(tempData);
    } //UPDATE Task
    else if( operation === 'update') {
      formValidation('update', value);
      const inputData = { ...updateTaskEntry };
      if(name === 'name') {
        tempData = { ...inputData, [name]: value };
      } else if(name === 'completed') {
        tempData = { ...inputData, [name]: checked };
      }
      setUpdateTaskEntry(tempData); // create - update task
    }
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
        activeID, 
        setActiveID,
        createTaskEntry, 
        setCreateTaskEntry,
        updateTaskEntry, 
        setUpdateTaskEntry,
        statusMessage, 
        setStatusMessage,
        charCount, 
        setCharCount,
        validationData, 
        setValidationData,
        isDisabled, 
        setIsDisabled
      }}
    >
      {children}
    </FormContext.Provider>
  )
}