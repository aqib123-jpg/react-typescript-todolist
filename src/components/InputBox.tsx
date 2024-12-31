import React, { useState } from 'react'
import { useAppContext } from '../AppContext.tsx';

const InputBox = () => {
  const {input,updateInput,arr,updateArr}=useAppContext();
  
  const setInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateInput(e.target.value);
    // updateArr([...arr, e.target.value]);
  };
  const addItem = () : void => {
    if (!(input.length)) {
      alert('write something in the input box');
    } else{
      updateArr([...arr,input]);
      updateInput('');
    }
  }
  return (

    <div className='flex gap-2 justify-center'>
        <input type="text" className='focus:outline-none h-12 w-[50vw] rounded-full text-xl font-semibold px-4 text-black' autoFocus placeholder='Enter a Task' value={input} onChange={setInput}/>
        <button className="px-4 py-2 bg-[#581c87] text-white rounded animate-bounce" onClick={addItem}>Click Me</button>
    </div>
  )
}

export default InputBox;