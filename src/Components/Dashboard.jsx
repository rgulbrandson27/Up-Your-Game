import './Dashboard.css';
import QuizBoard from './QuizBoard.jsx';
import LetterBoard from './LetterBoard.jsx';

/*  PROPS - CorrectWord (for list items) - use mapping
*/

const Dashboard = () => {


    return (
        <div className="dashboard">
    
       <header> </header> 
       <body>  
            <QuizBoard className="quiz-board-main"/>
            <LetterBoard className="letter-board-main"/>
        <ul className="correct-list">
            <li className="list-title">Correct Words</li>
            <li>{}</li>
            <li>{}</li>

        </ul>
       </body>
       <footer>  </footer>
       </ div>
    )

}

export default Dashboard;