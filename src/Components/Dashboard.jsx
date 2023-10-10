import './Dashboard.css';
import QuizBoard from './QuizBoard.jsx';
import LetterBoard from './LetterBoard.jsx';

const Dashboard = () => {


    return (
        <div className="dashboard">
    
       <header> </header> 
       <body>  
            <QuizBoard className="quiz-board-main"/>
            <LetterBoard className="letter-board-main"/>

       </body>
       <footer>  </footer>
       </ div>
    )

}

export default Dashboard;