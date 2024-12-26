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
