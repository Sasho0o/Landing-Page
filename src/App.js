import React, { useState } from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown'
import GlobalStyle from './globalStyles';
import { SliderData } from "./data/SliderData";
import InfoSection from './components/InfoSection';
import { InfoData } from './data/infoData';

function App() {
  const [isOpen, setIsOpen]= useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div >
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData} />
    </div>
  );
}

export default App;
