import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home/Home.jsx';
import UserDashboard from './pages/UserDashboard/UserDashboard.jsx';
import QuizPage from './pages/QuizPage/QuizPage.jsx';

const router = createBrowserRouter([
      {
        path: "*",
        element: <App />,
        children: [
          { 
            path: "home",
            element: < Home />
          },
          {
            path: "userdashboard",
            element: <UserDashboard />,
          },
          {
            path: "quizpage",
            element: <QuizPage />,
          },
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
 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   document.getElementById('root')
// );
// export default main;
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// function AppWithCallbackAfterRender() {
//       useEffect(() => {
//         console.log('rendered');





