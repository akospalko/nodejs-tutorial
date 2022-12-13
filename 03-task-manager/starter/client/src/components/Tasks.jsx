import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Task from './Task';
import './Tasks.css';

export default function Tasks() {
  const [data, setData] = useState(null);
 
  //fetch data from api
  useEffect(() => {
    let fetchData = async () => {
      return await axios.get('/api/v1/tasks')
      .then(response => {
        const fetchedData = response.data.tasks;
        if(response.data < 1) { return } // empty task arr
        setData(fetchedData);
      })
      .catch(error => { console.log(error);})
    }
    fetchData();
  }, [])

  return (
    <div className='TasksContainer'> 
      {data && data.map(task => (
        <div 
          className='Tasks'
          key={task._id}>
          <Task task={task}/>
        </div>
      ))}
    </div>
    
  )
}
