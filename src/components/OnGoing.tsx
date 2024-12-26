import React from 'react'
import Completed from './Completed.tsx';
import Current from './Current.tsx';

const OnGoing = () => {
  return (
    <div className='flex w-[100vw] justify-center my-3'>
        <div className='w-[80vw] grid md:grid-cols-2 grid-cols-1 gap-2'>
            <div><Current/></div>
            <div><Completed/></div>
        </div>
    </div>
  )
}

export default OnGoing;