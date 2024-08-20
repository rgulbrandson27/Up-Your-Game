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
// const [currentUser, setCurrentUser] = useState(null);
// const [key, setKey] = useState(0);


const [user, setUser] = useState("user");

const url = "https://66232cb33e17a3ac846eba2b.mockapi.io/user/1";

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network did not respond');
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("error");
  }

};

 
// useEffect(() => {
//   updateUserInfo()
// }, []);
//dependency array will include, changes in all user lists

fetchUser();
console.log(user);
}, []);

const updateUserInfo = () => {
  console.log("this is where the PUT/Patch operation will go")
}

useEffect(() => {
  console.log("hello, testing");
  // console.log(selectedWordList);
  // if (selectedWordList.listName == "SAMPLE") {
    // setIsNewSelection(true);
    console.log(selectedWordList.id);
    console.log(selectedWordList.listName);
  // setKey(prevKey=>prevKey + 1);
  //   console.log("nothing has changed");
  // }
}, [selectedWordList]); 

const addToMastered = () => {
  selectedWordList.listName
}

const handleSelectionClick = (wordListInfo) => {
  setSelectedWordList(wordListInfo);
  setNavigateTo('quizpage');

  // setKey(prevKey => prevKey +1);
  // setIsNewSelection(true);

};

  return (
    <div className="bg-blue-300 min-h-screen pt-12 opacity-90
    sm:bg-cyan-400
    md:bg-green-400
    lg:bg-pink-500
    xl:bg-yellow-500">
      <Router>
          <Navbar className="" />
          {navigateTo && <Navigate to={navigateTo} />}
          <Routes>
            <Route exact path='/' 
                element={<Home
                  selectedWordList={selectedWordList}
                  setSelectedWordList={setSelectedWordList}
                  handleSelectionClick={handleSelectionClick}
                  user={user}/>
                  }/>
            <Route path='/userdashboard' element={<UserDashboard user={user}/>}/>
            <Route path='/quizpage' element={<QuizPage
            selectedWordList={selectedWordList} user={user}
            />}/>
          </Routes>
      </Router>
 
    </div>
  )
}   
  
export default App

