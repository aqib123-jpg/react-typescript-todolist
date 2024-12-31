import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header.tsx';
import InputBox from './components/InputBox.tsx';
import OnGoing from './components/OnGoing.tsx';
import { ReactFlowProvider } from 'reactflow';

const App : React.FC = () => {
  return (
    <div className='min-h-[100vh] bg-[#9333ea] text-white overflow-x-hidden'>
      <Header/>
      <InputBox/>
      <OnGoing/>
    </div>
  )
}
export default App;
