import LetterBoard from './Components/LetterBoard.jsx';
import User from './Components/User.jsx';
import QuizBoard from './Components/QuizBoard.jsx';
import './App.css';
import WordLists from './wordLists.js';

function App() {
  return (
    <div className="App">
      <h1 className="status">Status: beginning Stage - in progress</h1>
        <QuizBoard />
        <LetterBoard />
        <User />

    </div>

  );
}

export default App;
