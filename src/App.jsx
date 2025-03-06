import { Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
import Navbar from './components/header/Navbar';
// import Home from './pages/Home/Home';
// import UserDashboard from './pages/UserDashboard/UserDashboard';
// import QuizPage from './pages/QuizPage/QuizPage';
import React from 'react';
import './index.css';


const url = "https://66232cb33e17a3ac846eba2b.mockapi.io/users";

 export const DataContext = createContext();

const App =() => {

const [selectedWordList, setSelectedWordList] = useState( 
  //defaults to highest probability stem word
  {id: 1,
  listName: "TISANE",
  words: 
  ["ENTASIA", "TAENIAS", "BANTIES", "BASINET", "ACETINS", "CINEAST", "DESTAIN", "DETAINS", "INSTEAD", "NIDATES", "SAINTED", "SATINED", "STAINED", "ETESIAN", "FAINEST", "EASTING", "EATINGS", "GENISTA", "INGATES", "INGESTA", "SEATING", "TAGINES", "TEASING", "SHEITAN", "STHENIA", "ISATINE", "TAJINES", "INTAKES", "ELASTIN", "ENTAILS", "NAILSET", "SALIENT", "SALTINE", "SLAINTE", "TENAILS", "ETAMINS", "INMATES", "TAMEINS", "INANEST", "STANINE", "ATONIES", "PANTIES", "PATINES", "SAPIENT", "SPINATE", "ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "ENTASIS", "NASTIES", "SEITANS", "SESTINA", "TANSIES", "TISANES", "INSTATE", "SATINET", "AUNTIES", "SINUATE", "NAIVEST", "NATIVES", "VAINEST", "TAWNIES", "WANIEST", "ANTISEX", "SEXTAIN", "ZANIEST", "ZEATINS"],    mnuemonic: "TUCKSHOP WIZ FIXES MEDICINAL BEVERAGE JUICE",
  length: 7})


const [currentUser, setCurrentUser] = useState(null);

const navigate = useNavigate();


// const firstUnguessedWordRef = useRef(null);

const currentDate = new Date().toLocaleDateString();

//if you want to run async code in a side effect, you have to put within another function ("double bag")
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCurrentUser(data.find(user => user.id === "1") || null);
      console.log(data.find(user => user.id === "1")); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  fetchUser()
  }, []);       

if (!currentUser) {
  return <div>Loading...</div>;
}
console.log(currentUser);

// useEffect(() => {
//   if (navigateTo) {
//     navigate(`/${navigateTo}`);
//   }
// }, [navigateTo, navigate]);


// useEffect(() => {
//   removeFromMastered(index)
//       const response = await fetch(url);
//       const data = await response.json();

//       setCurrentUser(data.find(user => user.id === "1") || null);

//       console.log(data.find(user => user.id === "1")); // Logs the user with id 1 or null
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

const handleSelectionClick = (wordListInfo) => {
  setSelectedWordList(wordListInfo);
  // firstUnguessedWordRef.current = selectedWordList.words[0];
  // console.log(firstUnguessedWordRef);
  navigate('/quizpage');
  // setKey(prevKey => prevKey +1);
  // setIsNewSelection(true);
};

////PATCH////
const addToMastered = async (updatedMasteredList) => {
  if (!currentUser) return;
  try {
    // Prepare the updated user data with the new mastered list
    const updatedUser = {
      ...currentUser,
      mastered: updatedMasteredList
    };
   
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
    navigate('/userdashboard')
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

const removeFromMastered = async (index) => {
  if (!currentUser || !currentUser.mastered) return;
  try {
      // Create a new array excluding the item at the specified index
      const updatedMasteredList = currentUser.mastered.filter((_, i) => i !== index);
      
      // Prepare the updated user data with the new mastered list
      const updatedUser = {
          ...currentUser,
          mastered: updatedMasteredList
      };
      
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
      } catch (error) {
      console.error('Error removing from mastered list:', error);
      }
    }; 

    return (
        <DataContext.Provider value={{ currentUser, selectedWordList, setSelectedWordList, handleSelectionClick, addToMastered, removeFromMastered, updateDateToToday }}>
          <div className="App bg-sky-300">
            <Navbar />
            <Outlet /> {/* This will render child routes */}
          </div>
        </DataContext.Provider> 
  );
};
export default App


// return (
//   <div className="bg-sky-300">
//     <Navbar />
//     <Outlet 
//         />
    /* <Home
        selectedWordList={selectedWordList}
        setSelectedWordList={setSelectedWordList}
        handleSelectionClick={handleSelectionClick}
        currentUser={currentUser}
      />
    <UserDashboard 
        currentUser={currentUser} 
        addToMastered={addToMastered} 
        removeFromMastered={removeFromMastered} 
      />
    <QuizPage 
        selectedWordList={selectedWordList} 
        currentUser={currentUser} 
        addToMastered={addToMastered} 

        updateDateToToday={updateDateToToday} 
      /> */

      
    // </div>


// <Routes>
// <Route 
//     path="/" 
//     element={
//       <Home 
//         selectedWordList={selectedWordList}
//         setSelectedWordList={setSelectedWordList}
//         handleSelectionClick={handleSelectionClick}
//         currentUser={currentUser} />} 
//       />
// <Route 
//     path="/userDashboard" 
//     element={
//       <UserDashboard 
//         currentUser={currentUser} 
//         addToMastered={addToMastered} 
//         removeFromMastered={removeFromMastered} />} 
//       />
// <Route 
//     path="/quizpage" 
//     element={
//       <QuizPage 
//         selectedWordList={selectedWordList} 
//         currentUser={currentUser} 
//         addToMastered={addToMastered} 
//         // setNavigateTo={setNavigateTo} 
//         updateDateToToday={updateDateToToday} />} 
//       />
// </Routes>
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

// const firstUnguessedWord = selectedWordList.words.find(word => !correctlyGuessedWords.includes(word));

    // <div className="bg-blue-300 min-h-screen pt-12 opacity-90
    // sm:bg-cyan-400
    // md:bg-green-400
    // lg:bg-pink-500
    // xl:bg-yellow-500
    // 2xl:bg-purple-400">
    //   <Router>
    //       <Navbar className="e" />
    //       {navigateTo && <Navigate to={navigateTo} />}


    //       <Routes>
    //         <Route exact path='/' 
    //             element={<Home
    //               selectedWordList={selectedWordList}
    //               setSelectedWordList={setSelectedWordList}
    //               handleSelectionClick={handleSelectionClick}
    //               firstUnguessedWord
    //               currentUser={currentUser}/>
    //               }/>
    //         <Route exact path='/userdashboard' element={<UserDashboard currentUser={currentUser} 
    //         addToMastered={addToMastered} removeFromMastered={removeFromMastered}
    //         />}/>
    //         <Route exact path='/quizpage' element={<QuizPage
    //         selectedWordList={selectedWordList} currentUser={currentUser} 
    //         addToMastered={addToMastered} setNavigateTo={setNavigateTo} updateDateToToday={updateDateToToday}
    //         // firstUnguessedWordRef={firstUnguessedWordRef}
    //         />}/>
    //  


