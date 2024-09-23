import React from 'react';
import {useEffect, useState, useRef} from 'react';
import 'tailwindcss/tailwind.css';

const WordDisplay = ({ selectedWordList, hintRequested, evaluateGuessWord, setHintRequested, cancelHintRequest, correctlyGuessedWords }) => {

    const displayLength = selectedWordList.length || 7;
    const lastBox = displayLength - 1;
    
    const [inputValues, setInputValues] = useState(Array(displayLength).fill(''));
    const [isSubmitButtonFocused, setIsSubmitButtonFocused] = useState(false);
    const [animatedBorders, setAnimatedBorders] = useState(false);
    const [guessCount, setGuessCount] = useState(1);
    const [cursorStyle, setCursorStyle] = useState('cursor-text');
    
    const inputRefs = useRef(Array( displayLength ).fill(null));   
    const priorLettersEntered = useRef(false);  
    const allLettersEntered = useRef(false);
    const currentGuess = useRef('');
    const firstUnguessedWordRef = useRef(null);
    const unguessedWordLettersArrayRef = useRef([]);


  //   const cursorClass = hintRequested 
  // ? (inputValues[index] === '' 
  //     ? 'cursor-pointer' 
  //     : inputValues[index] === unguessedWordLettersArrayRef.current[index] 
  //       ? 'cursor-not-allowed' 
  //       : 'cursor-pointer')
  // : 'bg-yellow-300 cursor-text';


    // let cursorClass; 
    // if (hintRequested) {
    //    if (inputValues[index] === '') {
    //     cursorClass = 'cursor-pointer';
    //     } else if (inputValues[index] === unguessedWordLettersArrayRef.current[index]) {
    //       cursorClass = 'cursor-pointer';
    //     } else if (inputValues[index] === 'correct') {
    //     cursorClass = 'cursor-not-allowed';
    // }  else {
    //   cursorClass='cursor-text';
    // }
    // }
      
      // && (inputValues[index] === '')) {
      //   cursorClass = 'cursor-pointer';
      // } else if {
      //   (hintRequested && (inputValues[index] === unguessedWordLettersArrayRef.current[index])) {
      //     cursorClass = 'cursor-pointer';
      // } else if {
      //   (hintRequested && (inputValues[index] === 'correct')) {
      //   cursorClass = 'cursor-not-allowed';
      //   } else {
      //     cursorClass='cursor-text';
      // }
      // }
    

    // useEffect(() => {
      // const displayHintAnimation = () => {
      //   setAnimatedBorders(true);
      // };
      // if (hintRequested) {
      // displayHintAnimation();
      // }
    // }, [hintRequested]);
    
    firstUnguessedWordRef.current =  (selectedWordList.words.find(word => !correctlyGuessedWords.includes(word)));


    useEffect(() => {
      // Cursor defaults to first input box.
      inputRefs.current[0].focus();
    }, []);

    
    useEffect(() => {
      evaluateGuessedLetters(firstUnguessedWordRef, inputRefs);
      
    }, [hintRequested]);
  
    function evaluateGuessedLetters(firstUnguessedWordRef, inputRefs) {
      if (firstUnguessedWordRef.current) {
        console.log("word:", firstUnguessedWordRef.current);
        //turn the next unguessed word into an array of letters
        unguessedWordLettersArrayRef.current = firstUnguessedWordRef.current.split('');
        console.log("correct letters array:", unguessedWordLettersArrayRef.current);
        } else {
          console.log("UnguessedWord is Not Yet Set.");
        }

      //turn any inputs into an array of letters
      const inputValues = inputRefs.current.map(ref => ref?.value || '');   //question mark refers to "chaining."
      console.log("guessed letters array:", inputValues);

      //compare both arrays

      for (let index = 0; index < inputValues.length; index++) {
        const correctLetter = unguessedWordLettersArrayRef.current[index];
        const guessedLetter = inputValues[index];
        const inputRef = inputRefs.current[index];

      if (inputRef)  {

      

      if (guessedLetter === "") {
        console.log("blank");
        // inputRef.classList.remove('cursor');

        // inputRef.classList.add('show-question-mark');
        //show question mark for clicking on
        // inputRef.innerHTML = "?";
        // inputRef.classList.add(bg-blue-300);
        //substitute for animated borders later.
     
      } else if (guessedLetter === correctLetter) {
          console.log("correct");
          // inputRef.classList.add('cursor-not-allowed');
      } else {
        console.log("wrong");
      }
    }
  }
}
   

    const checkIfMastered = () => {
      console.log("cgw:" + correctlyGuessedWords.length);
      console.log(selectedWordList.words.length);
      if (correctlyGuessedWords.length > 0) {
        (correctlyGuessedWords.length === selectedWordList.words.length)
        console.log("list is mastered")
        return true;
      }
    }

    const handleInputClick = (index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].focus();
      }
    }

    const handleInputChange = (e, index) => {
        let value = e.target.value;

        //uppercase letter only validation
        if (value >= 'A' && value <= 'Z') {
          return;
        } else if (value >= 'a' && value <= 'z') {
          value = value.toUpperCase();
         } else {
          value = ''; 
          }
    
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);
    
    if (index === lastBox && value !== '' && priorLettersEntered) {
      setIsSubmitButtonFocused(true);
    }
    // Focus on the next input if value is not empty
    if (index < lastBox && value !== '') {
      inputRefs.current[index + 1].focus();
      }

      priorLettersEntered.current = updatedValues.slice(0, lastBox).every(val => val !== '');
      allLettersEntered.current = updatedValues.every(val => val !== '');
      // console.log(priorLettersEntered, allLettersEntered);
    };

    const handleKeyDown = (e, index) => {
      // Prevent the default tab behavior when shift + tab is pressed
      if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();

        if (index > 0) {
          inputRefs.current[index - 1].focus();
          // Select the text in the input box for immediate overwrite
          inputRefs.current[index - 1].select();
        }
      } else if (e.key === 'Tab' && !e.shiftKey && index === lastBox) {
        // If 'Tab' is pressed and it's the last input box, focus on the submit button
      }
      setIsSubmitButtonFocused(true);
  
      // Move focus to the previous input box when shift + tab is pressed
      if (e.key === 'Tab' && e.shiftKey && index > 0) {
        inputRefs.current[index - 1].focus();
      }
  
      // If 'Tab' is pressed and it's the last input box, focus on the submit button
      if (e.key === 'Tab' && index === lastBox) {
        setIsSubmitButtonFocused(true);
      };
    }


      //first display message (upon hover only) "once you request a hint, you must commit to finish word"  do you still want to request?


      ///  if (hint requested && letter is correct...)
        //using new cursor type, have a new hover function
        //user selects hint
        //function selectLetterToReveal = () => {
              //takes click event and the new letter is displays (some color)
              //background changes color (both for two seconds or so)

        //after letter reveal
            //state is set back to hintRequested(false)
            //the revealed letter will then look like all of the other letters, 
            //but will either have double border or be underlined so the user knows it was a hint
            //any cursor function for that letter will be disabled
            //any cursor for the letter that was confirmed to be true during hint request will also be disabled
            //if a letter was marked with a red x, the enter letter and x disappear


    
    const updateCursorClass = (values, index) => {
      if (hintRequested) {
        if (values[index] === '') {
          setCursorClass('cursor-pointer bg-yellow-300');
        } else if (values[index] === selectedWordList[index]) {
          setCursorClass('cursor-not-allowed bg-green-600');
        } else {
          setCursorClass('cursor-pointer bg-red-400');
        }
      } else {
        setCursorClass('cursor-text bg-yellow-300');
      }
    };


    const handleSubmitGuess = async () => {

      if (!allLettersEntered.current) {
        window.alert("All letters must be entered.");
      } else {

        const values = inputRefs.current.map(ref => ref.value);
        console.log('Input values:', values);

        currentGuess.current = values.join('');
        console.log(currentGuess.current);

        await evaluateGuessWord(currentGuess.current);

        setGuessCount((prevCount) => prevCount + 1);
        console.log(guessCount);

        setInputValues(Array(displayLength).fill(''));
        setIsSubmitButtonFocused(false);
        inputRefs.current[0].focus();
      }
    };

    ////////////////////////
    return (
      <div>
        <div className="wordDisplay border-2 bg-yellow-100 border-blue-500 p-3 rounded-md relative">
          <div className="flex justify-center gap-1 md:gap-2">
          {[...Array(displayLength)].map((_, index) => (
            <div key={index} className="flex items-center">
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={inputValues[index]}
                className={`letter-box input text-center aspect-square rounded-md 
                          overflow-hidden input-secondary max-w-xs w-[calc(100%-2px)] 
                          h-[calc(100%-2px)] top-[1px] left-[1px] border-2 text-4xl md:text-5xl border-gray-600 cursor-text
                          ${hintRequested 
                            ? 
                              (inputValues[index] === '' 
                                ? ' bg-yellow-300' 
                                : inputValues[index] === unguessedWordLettersArrayRef.current[index] 
                                  ? ' bg-green-600' 
                                  : ' bg-red-400')
                            : 
                              'bg-yellow-300 '}    
                          `}
                maxLength={1}
                // onChange={(e) => handleInputChange(e, index)}
                // onKeyDown={(e) => handleKeyDown(e, index)}
                placeholder={hintRequested && inputValues[index] === '' ? '?' : ''}
                onChange={hintRequested ? undefined : (e) => handleInputChange(e, index)}
                onKeyDown={hintRequested ? undefined : (e) => handleKeyDown(e, index)}
                // cursor={hintRequested ? cursor-pointer : cursor-default}
                onClick={hintRequested ? () => handleInputClick(index) : undefined} 
              />
            </div>
          ))}
        </div>
      </div>
        <div className="flex justify-center mt-2">
          <button
            onKeyDown={handleSubmitGuess}
            onClick={handleSubmitGuess} 
            className={`bg-blue-400 border-2 border-black hover:bg-blue-700 text-white text-md px-1 h-1/2 rounded-md
             sm:mt-2 md:w-20
           
              ${isSubmitButtonFocused ? 'focus:bg-blue-700' : ''}
              ${hintRequested ? 'cursor-not-allowed opacity-50' : ''}
            `}
            onBlur={() => setIsSubmitButtonFocused(false)}
            disabled={hintRequested}>Submit
          </button>
          </div>
        </div>
      
    );
}
export default WordDisplay;



 
  {/* //           ref={(el) => (inputRefs.current[index] = el)}
  //           className="letter-box input bg-purple-500 w-20 h-20 aspect-square rounded-md relative overflow-hidden"
  //         >
  //           <div className={`absolute inset-0 overflow-hidden ${animatedBorders ? 'animate-spin' : ''}`}>
  //             <div className="absolute inset-0 bg-transparent conic-background" style={{ animationDuration: '4s' }}></div>
  //           </div>
  //           <input */}



        // DON'T DELETE
        // <div className="relative">
        // <div className="bg-[purple] h-[300px] w-[300px] absolute overflow-hidden">
        // <div className="absolute conic-background h-[500px] w-[500px] animate-spin top-[-35%] right-[-35%]" style={{ animationDuration: '4s' }}></div>
        // </div>

              // ref={(el) => {
            //   inputRefs.current[index] = el;
            //   console.log(`Ref assigned to index ${index}:`, el);
            // }}

            // ref={(el) => {
            //   if (el) {
            //     console.log(`Ref assigned to index ${index}:`, el);
            //     inputRefs.current[index] = el;
            //   }
            // }}






            // function MyComponent() {
            //   const [isClickable, setIsClickable] = React.useState(true);
            
            //   return (
            //     <div className="p-4">
            //       <button
            //         onClick={() => alert('Button clicked!')}
            //         className={`bg-blue-500 text-white py-2 px-4 rounded ${
            //           isClickable ? 'cursor-pointer' : 'cursor-not-allowed'
            //         }`}
            //         disabled={!isClickable}
            //       >
            //         {isClickable ? 'Click Me' : 'Disabled'}
            //       </button>
            //       <button onClick={() => setIsClickable(!isClickable)}>
            //         Toggle Button State
            //       </button>
            //     </div>
            //   );