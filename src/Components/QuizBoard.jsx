import './QuizBoard.css'

/* NOTES - Could possibly use "display: none" when doing mapping of spelled words


PROPS - ChosenLetter
*/

// const Quizboard = ({chosenLetter}, {}, {}) => {

const Quizboard = () => {


    return (
        <div className="quiz-board">
            <span>
                <span className="quiz-word">
                    <div className="blank">{} </div>
                    <div className="quiz-letter first-letter">A</div>
                    <div className="quiz-letter second-letter">R</div>
                    <div className="quiz-letter third-letter">E</div>
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