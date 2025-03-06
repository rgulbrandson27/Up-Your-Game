import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home/Home.jsx';
import UserDashboard from './pages/UserDashboard/UserDashboard.jsx';
import QuizPage from './pages/QuizPage/QuizPage.jsx';

const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
          { 
            path: "/",
            element: < Home />
          },
          { 
            path: "/home",
            element: < Home />
          },
          {
            path: "/userdashboard",
            element: <UserDashboard />
          },
          {
            path: "/quizpage",
            element: 
              <QuizPage 
              // electedWordList={selectedWordList} 
              // currentUser={currentUser} 
              // addToMastered={addToMastered} 
              // updateDateToToday={updateDateToToday}
              />
            },
          { path: "*", element: <Navigate to="/home" /> }
        ],
      },
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router} />  
);

// const Root = () => {

//       return 
//             <>
//             <div>
//                   <Link to="/">Home</Link>
//                   <Link to="/UserDashboar">UserDashboard</Link>
//                   <Link to="/">QuizPage</Link>
//             </div>
//                   <Outlet/>
//             </>
// }
      // createRoutesFromElements(
      //       <Route path="/" element ={<Root />}>
      //             <Route index element={} />
      //       </Route>
      // )


