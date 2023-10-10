import wordLists from '../wordLists.js';
import './LetterBoard.css';



const LetterBoard = () => {
    return (
        <div className = "letter-board">
            <span className="vowel-row">
                <button className="a-button">A</button>
                <button className="e-button">E</button>
                <button className="i-button">I</button>
                <button className="o-button">O</button>
                <button className="u-button">U</button>
            </span>
            <span className="b-j-row">
                <button className="b-button">B</button>
                <button className="c-button">C</button>
                <button className="d-button">D</button>
                <button className="f-button">F</button>
                <button className="g-button">G</button>
                <button className="h-button">H</button>
                <button className="j-button">J</button>
            </span>
            <span className="k-r-row">
                <button className="k-button">K</button>
                <button className="l-button">L</button>
                <button className="m-button">M</button>
                <button className="n-button">N</button>
                <button className="p-button">P</button>
                <button className="q-button">Q</button>
                <button className="r-button">R</button>
            </span>
            <span className="s-z-row">
                <button className="s-button">S</button>
                <button className="t-button">T</button>
                <button className="v-button">V</button>
                <button className="w-button">W</button>
                <button className="x-button">X</button>
                <button className="y-button">Y</button>
                <button className="z-button">Z</button>
            </span>
            <span>
                <button className="none-button">No correct choices</button>
            </span>
            {/* <span className="letterboard-settings">
                <button className="animation-toggle">Letter Animation: OFF</button>
                
            </span> */}
        </div> 
        );
}



export default LetterBoard;