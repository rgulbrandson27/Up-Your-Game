import wordLists from '../wordLists.db';
import './LetterBoard.css';
import React, {useState} from 'react';


// return (
//     <form onSubmit={handleSubmit}>
//       <Star />
//       <label htmlFor="user-input" className="form-label">
//         What's Your Name?
//       </label>
//       <input
//         type="text"
//         id="user-input"
//         className="form-control"
//         value={userValue}
//         onChange={(e) => setUserValue(e.target.value)}

{/* <label htmlFor="gavel-1"><img className="gavel gavel-1" src={Gavel} 
                        onClick={() => setRatingsList([...ratingsList, 1])}
                        onMouseOver={() => setRatingDisplay("1.0")}/></label>
                    <image><img className="back-gavel" src={Gavel}/></image> */}


const LetterBoard = () => {

    const [chosenLetter, setChosenLetter] = useState({});

    function handleLetterClick(e) {
        const {nodeName, textContent } = e.target;
        if (nodeName === 'BUTTON') {
            setChosenLetter({textContent});
            console.log(textContent);
    }
}

    return (
        <div className = "letter-board">
            <div className="letters-button-wrapper" onClick={handleLetterClick}>
                <span className="vowel-row">
                    <button className="letter a-button">A</button>
                    <button className="letter e-button">E</button>
                    <button className="letter i-button">I</button>
                    <button className="letter o-button">O</button>
                    <button className="letter u-button">U</button>
                </span>

                <span className="b-j-row">
                        <button className="letter b-button">B</button>
                    <button className="letter c-button">C</button>
                    <button className="letter d-button">D</button>
                    <button className="letter f-button">F</button>
                    <button className="letter g-button">G</button>
                    <button className="letter h-button">H</button>
                    <button className="letter j-button">J</button>
                </span>

                <span className="k-r-row">
                    <button className="letter k-button">K</button>
                    <button className="letter l-button">L</button>
                    <button className="letter m-button">M</button>
                    <button className="letter n-button">N</button>
                    <button className="letter p-button">P</button>
                    <button className="letter q-button">Q</button>
                    <button className="letter r-button">R</button>
                </span>

                <span className="s-z-row">
                    <button className="letter s-button">S</button>
                    <button className="letter t-button">T</button>
                    <button className="letter v-button">V</button>
                    <button className="letter w-button">W</button>
                    <button className="letter x-button">X</button>
                    <button className="letter y-button">Y</button>
                    <button className="letter z-button">Z</button>
                </span>
            </div>

            <div className="non-letter-button-wrapper">
                <span>
                    <button className="none-button" >No correct choices </button>
                    <button className="not-word-button" >Not a valid word</button>
                </span>
            </div>
        </div> 
        );
}



export default LetterBoard; 