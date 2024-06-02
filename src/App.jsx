import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {useState, useEffect} from 'react'
import Navbar from './components/header/Navbar';
// import Footer from './componenets/footer';
import Home from './pages/1.home/Home';
import UserDashboard from './pages/2.userdashboard/UserDashboard';
import QuizPage from './pages/3.quizpage/QuizPage';
import React from 'react';
import sixLetterStems from './data/bingoStems';

const App = () => {

const [selectedWordList, setSelectedWordList] = useState({id:100, listName:"SAMPLE", 
words:["one", "two", "three"], mnuemonic: "TUCKSHOP" });



useEffect(() => {
  console.log(selectedWordList);
  if (selectedWordList) {
    console.log(selectedWordList.id);
    console.log(selectedWordList.listName);
  }
  // console.log(selectedWordList + "hello");
}, [selectedWordList]); // Add selectedWordList as a dependency


const handleSelectionClick = (wordListInfo) => {
  setSelectedWordList(wordListInfo)



}

  return (
    <div className="bg-blue-300 w-screen h-screen">
      <Router>
          <Navbar className="w-screen" />
          <Routes>
            <Route exact path='/' 
                element={<Home
                  selectedWordList={selectedWordList}
                  setSelectedWordList={setSelectedWordList}
                  handleSelectionClick={handleSelectionClick}/>
                  }/>
            <Route path='/userdashboard' element={<UserDashboard/>}/>
            <Route path='/quizpage' element={<QuizPage
            selectedWordList={selectedWordList}/>}/>
          </Routes>
      
{/*  
        <Footer /> */}
      </Router>
    </div>
  )
}   
  
export default App

