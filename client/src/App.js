import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage";
import News from './components/news/News';
import { TitleDiv, TitleText } from './styledComponents';
function App() {
  return (
    <>
    <TitleDiv><TitleText>Search World Cup Matches</TitleText></TitleDiv>
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<MainPage />} />

        <Route path="/news" element={<News />} />

        
      </Routes>
    </BrowserRouter>
      


    
    </>
  );
}

export default App;
