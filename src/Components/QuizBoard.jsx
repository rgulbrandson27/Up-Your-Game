import './QuizBoard.css';
import wordLists from '../wordLists.db';

/* NOTES - Could possibly use "display: none" when doing mapping of spelled words


PROPS - ChosenLetter
*/

// const Quizboard = ({chosenLetter}, {}, {}) => {




const Quizboard = ({word, chosenLetter}) => {

// function wordToBoard = (wordList) {
//     //for each word in word list, map the letters in the word to the letter boxes
//     for ( i=0, i<wordList.length, i++) {
//         wordList[i].map()
//        }
//     )
//     wordLists.item.map(item[i] => )
// }


    return (
        <div className="quiz-board">
            <span>
                <span className="quiz-word">
                    <div className="blank">{chosenLetter} </div>
                    <div className="quiz-letter letter1"></div>
                    <div className="quiz-letter letter2"></div>
                    <div className="quiz-letter letter3"></div>
                    {/* <div className="quiz-letter fourth-letter">{}</div>
                    <div className="quiz-letter fifth-letter">{}</div>
                    <div className="quiz-letter sixth-letter">{}</div>
                    <div className="quiz-letter seventh-letter">{}</div>
                    <div className="quiz-letter eighth-letter">{}</div> */}
                </span>
            </span>
        </div>
    )
}
export default Quizboard;