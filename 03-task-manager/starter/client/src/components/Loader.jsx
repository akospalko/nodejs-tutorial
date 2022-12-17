import loader from '../assets/loader.svg';
import './Loader.css';

import React from 'react'
export default function Loader({ background }) {
  //background: background for modal. Possible values: true || false
  const loaderAnimation = <img src={ loader } alt={'loader'}/>
  let loaderComponent;
  //with background
  if(background) {
    loaderComponent = 
    <div className='LoaderModal'>
      { loaderAnimation }
    </div>
  //w/o background
  }  else {
    loaderComponent = 
        { loaderAnimation }
  }
  
  return (
    <>
     { loaderComponent }
    </>
  )
}
