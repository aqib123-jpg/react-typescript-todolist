import React from 'react'
import { FaTrashAlt,FaCheck } from 'react-icons/fa';
import { useAppContext } from '../AppContext.tsx';

const Completed = () => {
  const {completedArr,updateCompletedArr} = useAppContext();
  const deleteTask = (data:string) : void => {
    updateCompletedArr(
        completedArr.filter((value,key) => data != value)
    )
}  
    return (
      <div>
        <h1  className='bg-[#8b5cf6] py-3 text-center text-2xl font-body'>Completed</h1>
          {
              completedArr.map((data,key) => {
                  return ( 
                      <>
                          <h1 key={key} className='bg-[#581c87] my-2 h-12 flex items-center px-2'>
                              <span className='font-handwriting break-words overflow-hidden w-4/5 '>{data}</span>
                              <div className='flex justify-center w-1/5 text-2xl'>
                                  <button className='hover:scale-110 hover:text-red-500' onClick={() => deleteTask(data)}><FaTrashAlt /></button>
                              </div>    
                          </h1>
                          
                      </>
                  );
              })
          }
      </div>
    );
}

export default Completed