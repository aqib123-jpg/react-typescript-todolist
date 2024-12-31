// import React from 'react';
// import { FaTrashAlt, FaCheck } from 'react-icons/fa';
// import { useAppContext } from '../AppContext.tsx';

// const OnGoing: React.FC = () => {
//     const { arr, updateArr, completedArr, updateCompletedArr } = useAppContext();
//     const deleteTask = (index: number): void => {
//         // updateArr(arr.filter((value) => data !== value));
//         const updatedArr = [...arr];
//         updatedArr.splice(index, 1);
//         updateArr(updatedArr);
//     };
//     const finishTask = (index: number): void => {
//       const task = arr[index];
//       updateCompletedArr([...completedArr, task]);
//       const updatedArr = [...arr];
//       updatedArr.splice(index, 1);
//       updateArr(updatedArr);
//     };
//     const deleteTaskCompleted = (index:number): void => {
//         const updatedArr = [...completedArr];
//         updatedArr.splice(index, 1);
//         updateCompletedArr(updatedArr);
//     };
//     const draggingStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
//       e.dataTransfer.setData('taskIndex', index.toString());
//     };
//     const dropOver = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         const taskIndex = e.dataTransfer.getData('taskIndex');
//         if (taskIndex) {
//             const index = parseInt(taskIndex, 10);
//             const task = arr[index];
//             updateCompletedArr([...completedArr, task]);
//             const updatedArr = [...arr];
//             updatedArr.splice(index, 1);
//             updateArr(updatedArr);
//         } else {
//             alert('No task data found on drop');
//         }
//     };
    
//     const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         console.log('Drag over - default prevented');
//     };
//     return (
//         <div className="flex w-[100vw] justify-center my-3">
//             <div className="w-[80vw] grid md:grid-cols-2 grid-cols-1 gap-2">
//                 <div>
//                   <h1 className="bg-[#581c87] py-3 text-center text-2xl font-body">Pending</h1>
//                   {arr.map((data, index) => (
//                       <h1
//                           key={index}
//                           className="bg-[#7e22ce]  my-2 h-12 flex items-center px-2 cursor-grab"
//                           draggable
//                           onDragStart={(e) => draggingStart(e, index)}
//                       >
//                           <span className="font-handwriting break-words overflow-hidden w-3/4 text-xl">
//                               {data}
//                           </span>
//                           <div className="flex justify-between w-1/4 text-2xl">
//                               <button
//                                   className="hover:scale-110 hover:text-red-500"
//                                   // onClick={() => deleteTask(data)}
//                                   onClick={() => deleteTask(index)}
//                               >
//                                   <FaTrashAlt />
//                               </button>
//                               <button
//                                   className="hover:scale-110 hover:text-green-500"
//                                   onClick={() => finishTask(index)}
//                               >
//                                   <FaCheck />
//                               </button>
//                           </div>
//                       </h1>
//                   ))}
//               </div>
//               <div onDragOver={(e) => dragOver(e)} onDrop={(e) => dropOver(e)} className="min-h-[70vh] border-2 border-red-600">
//                   <h1 className="bg-[#581c87] py-3 text-center text-2xl font-body">Completed</h1>
//                   {completedArr.map((data, index) => (
//                       <h1 key={index} className="bg-[#7e22ce]  my-2 h-12 flex items-center px-2">
//                           <span className="font-handwriting break-words overflow-hidden w-4/5">
//                               {data}
//                           </span>
//                           <div className="flex justify-center w-1/5 text-2xl">
//                               <button className="hover:scale-110 hover:text-red-500" onClick={() => deleteTaskCompleted(index)}>
//                                   <FaTrashAlt />
//                               </button>
//                           </div>
//                       </h1>
//                   ))}
//               </div>

//             </div>
//         </div>
//     );
// };

// export default OnGoing;




import React from 'react';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';
import { useAppContext } from '../AppContext.tsx';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';


// Helper function to reorder the list after dragging
const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const OnGoing: React.FC = () => {
  const { arr, updateArr, completedArr, updateCompletedArr } = useAppContext();

  // Handle task deletion
  const deleteTask = (index: number): void => {
    const updatedArr = [...arr];
    updatedArr.splice(index, 1);
    updateArr(updatedArr);
  };

  // Handle task completion
  const finishTask = (index: number): void => {
    const task = arr[index];
    updateCompletedArr([...completedArr, task]);
    const updatedArr = [...arr];
    updatedArr.splice(index, 1);
    updateArr(updatedArr);
  };

  // Handle task deletion from completed list
  const deleteTaskCompleted = (index: number): void => {
    const updatedArr = [...completedArr];
    updatedArr.splice(index, 1);
    updateCompletedArr(updatedArr);
  };

  // Handle drag and drop event for Pending tasks
  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    // If dropped outside the list or there's no destination
    if (!destination) {
      return;
    }

    // Handle moving within the same list (Pending)
    if (destination.droppableId === source.droppableId) {
      const updatedArr = reorder(arr, source.index, destination.index);
      updateArr(updatedArr);
    } else {
      // Handle moving from Pending to Completed
      const updatedArr = Array.from(arr);
      const [removed] = updatedArr.splice(source.index, 1);
      updateArr(updatedArr);
      updateCompletedArr([...completedArr, removed]);
    }
  };

  return (
    <div className="flex w-[100vw] justify-center my-3">
      <div className="w-[80vw] grid md:grid-cols-2 grid-cols-1 gap-2">
        {/* Pending Tasks */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="pending" direction="vertical">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                // className="border-2 border-red-600"
              >
                <h1 className="bg-[#581c87] py-3 text-center text-2xl font-body">Pending</h1>
                {arr.map((data, index) => (
                  <Draggable key={index} draggableId={data} index={index}>
                    {(provided) => (
                      <div
                        className="bg-[#7e22ce] my-2 h-12 flex items-center px-2 cursor-grab"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className="font-handwriting break-words overflow-hidden w-3/4 text-xl">
                          {data}
                        </span>
                        <div className="flex justify-between w-1/4 text-2xl">
                          <button
                            className="hover:scale-110 hover:text-red-500"
                            onClick={() => deleteTask(index)}
                          >
                            <FaTrashAlt />
                          </button>
                          <button
                            className="hover:scale-110 hover:text-green-500"
                            onClick={() => finishTask(index)}
                          >
                            <FaCheck />
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* Completed Tasks */}
          <Droppable droppableId="completed" direction="vertical">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="min-h-[70vh]"
              >
                <h1 className="bg-[#581c87] py-3 text-center text-2xl font-body">Completed</h1>
                {completedArr.map((data, index) => (
                  <div
                    key={index}
                    className="bg-[#7e22ce] my-2 h-12 flex items-center px-2"
                  >
                    <span className="font-handwriting break-words overflow-hidden w-4/5">
                      {data}
                    </span>
                    <div className="flex justify-center w-1/5 text-2xl">
                      <button
                        className="hover:scale-110 hover:text-red-500"
                        onClick={() => deleteTaskCompleted(index)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default OnGoing;
