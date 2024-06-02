import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';



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
//       });
    
// 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <App />


);


