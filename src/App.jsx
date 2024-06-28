import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/header/Navbar';
// import Footer from './componenets/footer';
import Home from './pages/1.home/Home';
import UserDashboard from './pages/2.userdashboard/UserDashboard';
import QuizPage from './pages/3.quizpage/QuizPage';
import React from 'react';



const App = () => {

const [selectedWordList, setSelectedWordList] = useState({id:99, listName:"SAMPLE", words:["one", "two"], mnuemonic: "ABCDEFG" });
const [navigateTo, setNavigateTo] = useState(null);
// const [key, setKey] = useState(0);

useEffect(() => {
  // console.log(selectedWordList);
  // if (selectedWordList.listName == "SAMPLE") {
    // setIsNewSelection(true);
    console.log(selectedWordList.id);
    console.log(selectedWordList.listName);
  // setKey(prevKey=>prevKey + 1);
  //   console.log("nothing has changed");
  // }
}, [selectedWordList]); 


const handleSelectionClick = (wordListInfo) => {
  setSelectedWordList(wordListInfo);
  setNavigateTo('quizpage');

  // setKey(prevKey => prevKey +1);
  // setIsNewSelection(true);

};

  return (
    <div className="bg-blue-300 w-screen h-screen opacity-90
    sm:bg-cyan-400
    md:bg-green-400
    lg:bg-pink-500
    xl:bg-yellow-500">
      <Router>
          <Navbar className="w-screen" />
          {navigateTo && <Navigate to={navigateTo} />}
          <Routes>
            <Route exact path='/' 
                element={<Home
                  selectedWordList={selectedWordList}
                  setSelectedWordList={setSelectedWordList}
                  handleSelectionClick={handleSelectionClick}/>
                  }/>
            <Route path='/userdashboard' element={<UserDashboard/>}/>
            <Route path='/quizpage' element={<QuizPage
            selectedWordList={selectedWordList}
            // isUnchangedSample={selectedWordList.listName !== "SAMPLE"}
            // key={key}
            />}/>
          </Routes>
      
{/*  
        <Footer /> */}
      </Router>
 
    </div>
  )
}   
  
export default App

