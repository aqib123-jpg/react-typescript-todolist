import React from 'react'
import { FaTrashAlt,FaCheck } from 'react-icons/fa';
import { useAppContext } from '../AppContext.tsx';

const Current = () => {
  const {arr,updateArr,completedArr,updateCompletedArr} = useAppContext();

const deleteTask = (data:string) : void => {
    updateArr(
        arr.filter((value,key) => data != value)
    )
}
const finishTask = (data:string) : void => {
    updateCompletedArr([...completedArr,data]);
    updateArr(
        arr.filter((value,key) => data != value)
    )

}
  return (
    <div>
        <h1  className='bg-[#8b5cf6] py-3 text-center text-2xl font-body'>Pending</h1>
        {
            arr.map((data,key) => {
                return ( 
                    <>
                        <h1 key={key} className='bg-[#581c87] my-2 h-12 flex items-center px-2'>
                            <span className='font-handwriting break-words overflow-hidden w-3/4 '>{data}</span>
                            <div className='flex justify-between w-1/4 text-2xl'>
                                <button className='hover:scale-110 hover:text-red-500' onClick={() => deleteTask(data)}><FaTrashAlt /></button>
                                <button className='hover:scale-110 hover:text-green-500' onClick={() => finishTask(data)}><FaCheck /></button>
                            </div>    
                        </h1>
                        
                    </>
                );
            })
        }
    </div>
  );
}

export default Current