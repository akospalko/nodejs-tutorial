import React, { useEffect, useCallback } from 'react'
import axios from 'axios';
import Task from './Task';
import './Tasks.css';
import { useFormDataContext } from '../contexts/FormDataContext';
export default function Tasks() {
  const { 
    isSubmittingForm, 
    data, 
    setData
  } = useFormDataContext();

  //fetch data memoized fn
  let fetchData = useCallback(async () => {
    return await axios.get('/api/v1/tasks')
    .then(response => {
      const fetchedData = response.data.tasks;
      if(response.data < 1) { return } // empty task arr
      setData(fetchedData);
    })
    .catch(error => console.log(error) )
  }, [setData])


  //fetch data on first run
  useEffect(() => {
    fetchData();
  }, [fetchData])

  //refetch data each time form is submitted
  useEffect(() => {
    if(!isSubmittingForm) return;
    fetchData();
  }, [data, fetchData, isSubmittingForm])

  return (
    <div className='TasksContainer'> 
      {data && data.map(task => (
        <div 
          className='Tasks'
          key={task._id}>
          <Task 
            task={task}
            taskID={task._id}
        />
        </div>
      ))}
    </div>
  )
}
