import React, { useEffect, useCallback } from 'react'
import { getAllTasks } from '../helper/axiosRequests';
import Task from './Task';
import './Tasks.css';
import { TASKS_LIST_EMPTY } from '../helper/statusMessages';
import { useFormDataContext } from '../contexts/FormDataContext';
import updateState from '../helper/updateState';
import Loader from './Loader';
  
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
    const {data:taskData, resStatusMessage } = response;
    setData(taskData);
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
  }, [data, fetchAllData, isSubmittingForm])

  //conditinal display:
  // data -> display task list
  let renderedContent =
    <div className='TasksContainer'> 
      { data && data.map(task => (
        <div 
          className='Tasks'
          key={task._id}
        >
          <Task 
            task={task}
            taskID={task._id}
          />
        </div>
      )) }
    </div>
  
  if (!data) {
    renderedContent = <Loader background={true}/>
  // no data -> display empty list
  } else if (data.length === 0) {
    renderedContent = 
    <div className='TaskListEmpty'> 
      <p> { TASKS_LIST_EMPTY } </p>
    </div>
  }

  return (
    <> 
      { renderedContent }
    </>
  )
}