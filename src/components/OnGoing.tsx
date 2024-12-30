// import React from 'react'
// import Completed from './Completed.tsx';
// import Current from './Current.tsx';

// const OnGoing = () => {
//   return (
//     <div className='flex w-[100vw] justify-center my-3'>
//         <div className='w-[80vw] grid md:grid-cols-2 grid-cols-1 gap-2'>
//             <div><Current/></div>
//             <div><Completed/></div>
//         </div>
//     </div>
//   )
// }

// export default OnGoing;


import React from 'react'
import { FaTrashAlt,FaCheck } from 'react-icons/fa';
import { useAppContext } from '../AppContext.tsx';

interface DragAndDropProps {}

const OnGoing: React.FC<DragAndDropProps> = () => {
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
  const deleteTaskCompleted = (data:string) : void => {
      updateCompletedArr(
          completedArr.filter((value,key) => data != value)
      )
  }  

  const  draggingStart = (e:React.DragEvent<HTMLDivElement>,data:string) => {
    e.dataTransfer.setData('logicGate',data);
  } 

  const dropOver = (e:React.DragEvent<HTMLDivElement>)  => {
    e.preventDefault();

    

  } 

  
  return (
    <div className='flex w-[100vw] justify-center my-3'>
        <div className='w-[80vw] grid md:grid-cols-2 grid-cols-1 gap-2'>
            <div>
                <h1  className='bg-[#8b5cf6] py-3 text-center text-2xl font-body'>Pending</h1>
                {
                  arr.map((data,key) => {
                    return ( 
                      <>
                        <h1 key={key} className='bg-[#581c87] my-2 h-12 flex items-center px-2'  draggable onDragStart={(e) => draggingStart(e,data)}>
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
            <div>
              <h1  className='bg-[#8b5cf6] py-3 text-center text-2xl font-body'>Completed</h1>
                {
                  completedArr.map((data,key) => {
                    return ( 
                      <>
                        <h1 key={key} className='bg-[#581c87] my-2 h-12 flex items-center px-2'  onDragOver={(e:React.DragEvent<HTMLDivElement>) => e.preventDefault()} onDrop={(e) => dropOver(e)}>
                          <span className='font-handwriting break-words overflow-hidden w-4/5 '>{data}</span>
                          <div className='flex justify-center w-1/5 text-2xl'>
                            <button className='hover:scale-110 hover:text-red-500' onClick={() => deleteTaskCompleted(data)}><FaTrashAlt /></button>
                          </div>    
                        </h1>
                      </>
                      );
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default OnGoing;