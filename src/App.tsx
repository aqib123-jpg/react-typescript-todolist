import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header.tsx';
import InputBox from './components/InputBox.tsx';
import OnGoing from './components/OnGoing.tsx';


const App : React.FC = () => {
  return (
    <div className='h-[100vh] bg-[#9333ea] text-white'>
      <Header/>
      <InputBox/>
      <OnGoing/>
    </div>
  )
}

export default App;



// import React, { useState } from "react";
// import "./App.css";
// type Item = {
//   id: number;
//   name: string;
// };
// function App() {
//   const [items, setItems] = useState<Item[]>([
//     { id: 1, name: "Item 1" },
//     { id: 2, name: "Item 2" },
//     { id: 3, name: "Item 3" },
//   ]);
//   const [droppedItems, setDroppedItems] = useState<Item[]>([]);
//   const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item) => {
//     e.dataTransfer.setData("itemId", item.id.toString()); 
//   };
//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
    // const itemId = e.dataTransfer.getData("itemId");
    // const item = items.find((item) => item.id.toString() === itemId);
    // if (item) {
    //   setDroppedItems((prevItems) => [...prevItems, item]);
    // }
//   };
//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault(); // Allow drop by preventing the default action
//   };
//   return (
//     <div className="App">
//       <div className="container bg-slate-500">
//         <h2>Draggable Items</h2>
//         <div className="draggable-container">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               draggable
//               onDragStart={(e) => handleDragStart(e, item)}
//               className="draggable-item"
//             >
//               {item.name}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div
//         className="h-[100vh] drop-container bg-red-500"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//       >
//         <h2>Dropped Items</h2>
//         {droppedItems.map((item, index) => (
//           <div key={index} className="dropped-item">
//             {item.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



// const App : React.FC = () => {
//   interface myInterface{
//     id : number,
//     item: string
//   }
//   const [items,setItems]=useState<myInterface[]>([
//     {id:1 , item: 'one'},
//     {id:2 , item: 'two'},
//     {id:3 , item: 'three'},
//     {id:4 , item: 'four'},
//     {id:5 , item: 'five'}
//   ]);
//   const [dropItems,setDropItems]=useState<myInterface[]>([]);

//   const draggingProduct = (e:React.DragEvent<HTMLDivElement>,items:myInterface) : void => {
//    e.dataTransfer.setData('dragId',items.id.toString()); 
//   }
//   const handleDrop = (e:React.DragEvent<HTMLDivElement>) : void => {
//     e.preventDefault();
//     const itemId = e.dataTransfer.getData("dragId");
//     const item = items.find((item) => item.id.toString() === itemId);
//     if (item) {
//       setDropItems((prevItems) => [...prevItems, item]);
//     }
//   }
//   return (
//     <div className='text-center'>
//       <h3 >Learning Drag And Drop Items </h3>
//       <div className='bg-blue-300'>
//         <h4>Drag From Here</h4>
//         {
//           (items).map((data) => 
//           (
//             <div key={data.id} draggable onDragStart={(e) => draggingProduct(e,data)}
//             >{data.item}</div>
//           )
//           )
//         }
//       </div>
//       <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className='bg-yellow-400 h-[50vh]'>
//         <h4>Drop Here</h4>
//         {
//           (dropItems).map((data) => 
//           (
//             <div key={data.id} draggable onDragStart={(e) => draggingProduct(e,data)}
//             >{data.item}</div>
//           )
//           )
//         }
//       </div>
//     </div>
//   )
// }


// export default App
