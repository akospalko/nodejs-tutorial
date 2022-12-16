import React, { useEffect, useCallback } from 'react'
import { getAllTasks } from '../helper/axiosRequests';
import Task from './Task';
import './Tasks.css';
import { useFormDataContext } from '../contexts/FormDataContext';
import updateState from '../helper/updateState';

export default function Tasks() {
  const { 
    isSubmittingForm, 
    data, 
    setData,
    setStatusMessage
  } = useFormDataContext();

  //fetch data memoized fn
  let fetchAllData = useCallback(async () => {
      const response = await getAllTasks();
      const {data, resStatusMessage } = response;
      if(response.data.length < 1) return // empty task arr
        setData(data);
        updateState(setStatusMessage, 'getAllTasks', resStatusMessage);
  }, [setData, setStatusMessage])

  //fetch data on first run
  useEffect(() => {
    fetchAllData();
  }, [fetchAllData])

  //refetch data each time form is submitted
  useEffect(() => {
    if(!isSubmittingForm) return;
    fetchAllData();
  }, [fetchAllData, isSubmittingForm])

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