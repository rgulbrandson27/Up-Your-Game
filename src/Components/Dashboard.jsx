import './Dashboard.css';
import QuizBoard from './QuizBoard.jsx';
import LetterBoard from './LetterBoard.jsx';
import {useState} from 'react';

/*  PROPS - CorrectWord (for list items) - use mapping
*/

const Dashboard = () => {

    const [correctWords, setCorrectWords] = useState(["cat", "bat"]);
    

    return (
    // <div className="grid-container">
    //     <div className="box box1">1</div>
    //     <div className="box box2">2</div>
    //     <div className="box box3">3</div>
    //     <div className="box box4">4</div>
    //     <div className="box box5">5</div>
    //     <div className="box box6">6</div>
     

    <div className="dashboard-main">

       <header> header </header> 

       

        <QuizBoard className="quiz-board-main"/>

        <ul className="correct-words-list">
            <p className="list-title">Correct </p>
            {correctWords.map((word) => (
                <li className="list-item" >{ word }</li>
            ))}
        </ul>
            
        <LetterBoard className="letter-board-main"/>

     
       <footer> footer </footer> 
    </ div>

    )
}

export default Dashboard;