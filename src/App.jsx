import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/header/Navbar';
// import Footer from './componenets/footer';
import Home from './pages/1.home/Home';
import UserDashboard from './pages/2.userdashboard/UserDashboard';
import QuizPage from './pages/3.quizpage/QuizPage';
import React from 'react';

const url = "https://66232cb33e17a3ac846eba2b.mockapi.io/users";

function App() {

const [selectedWordList, setSelectedWordList] = useState({id:99, listName:"SAMPLE", words:["one", "two"], mnuemonic: "ABCDEFG" });
const [navigateTo, setNavigateTo] = useState(null);
const [currentUser, setCurrentUser] = useState(null);

const currentDate = new Date().toLocaleDateString();


//if you want to run async code in a side effect, you have to put within another function ("double bag")
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCurrentUser(data.find(user => user.id === "1") || null);

      console.log(data.find(user => user.id === "1")); // Logs the user with id 1 or null
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // The find method is used on arrays to search for an element that matches a given condition. It returns the first element that satisfies the condition or undefined if no such element is found.
  // data: This is the array of user objects returned from the API.
  // .find(user => user.id === "1"): This is a callback function that specifies the condition for finding the desired user. It checks each user object to see if the id matches "1".

  // const response = await fetch(url);
  // const data = await response.json();
  // setCurrentUser(data);
  // }

  fetchUser()
}, []);         //[]=runs only on initial render

if (!currentUser) {
  return <div>Loading...</div>;
}



// useEffect(() => {
//   updateUserInfo()
// }, []);
//dependency array will include, changes in all user lists


const addToMastered = async (updatedMasteredList) => {
  if (!currentUser) return;
  try {
    // Prepare the updated user data with the new mastered list
    const updatedUser = {
      ...currentUser,
      mastered: updatedMasteredList
    };
    // Send a PATCH request to update the user
    const response = await fetch(`${url}/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    });
    if (!response.ok) {
      throw new Error('Failed to update mastered list');
    }
    const updatedUserData = await response.json();
    setCurrentUser(updatedUserData);
    console.log('Updated user:', updatedUserData);
    setNavigateTo('userdashboard')
  } catch (error) {
    console.error('Error updating mastered list:', error);
  }
};

const updateDateToToday = async () => {
  // Implement logic to update the date of the mastered list in the server or state
  const updatedMasteredList = masteredList.map(item =>
    item.word === selectedWordList.listName
      ? { ...item, date: new Date().toLocaleDateString() }
      : item
  );
  setMasteredList(updatedMasteredList);
};


// const updateDateToToday = async () => {
//   if (!currentUser) return;
//   try {
//     // Prepare the updated user data with the new mastered list
//     const updatedUser = {
//       ...currentUser,
//       mastered: updatedMasteredList
//     };
//     // Send a PATCH request to update the user
//     const response = await fetch(`${url}/${currentUser.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedUser)
//     });
//     if (!response.ok) {
//       throw new Error('Failed to update mastered list');
//     }
//     const updatedUserData = await response.json();
//     setCurrentUser(updatedUserData);
//     console.log('Updated user:', updatedUserData);
//     setNavigateTo('userdashboard')
//   } catch (error) {
//     console.error('Error updating mastered list:', error);
//   }
// };

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
                  currentUser={currentUser}/>
                  }/>
            <Route path='/userdashboard' element={<UserDashboard currentUser={currentUser} 
            addToMastered={addToMastered}
            />}/>
            <Route path='/quizpage' element={<QuizPage
            selectedWordList={selectedWordList} currentUser={currentUser} 
            addToMastered={addToMastered} setNavigateTo={setNavigateTo} updateDateToToday={updateDateToToday}
            />}/>
          </Routes>
      </Router>
 
    </div>
  )
}   
  
export default App

