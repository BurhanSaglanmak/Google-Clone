import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const[value,setValue]= useState("")
  const toReplace= `/search/${value.toLocaleLowerCase().replaceAll(" ", "+").replaceAll("ç","c").replaceAll("Ç","c").replaceAll("ğ","g").replaceAll("Ğ","g").replaceAll("ş","s").replaceAll("Ğ","g").replaceAll("ş","s").replaceAll("Ş","s").replaceAll("ü","u").replaceAll("Ü","u").replaceAll("ı","i").replaceAll("I","i").replaceAll("ö","o").replaceAll("Ö","o")}`;
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main value={value} setValue={setValue} />} />        
        <Route path={toReplace} element={<Search value={value}  setValue={setValue} />} />                    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
