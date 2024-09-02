import React from 'react';
import {useEffect, useState, useRef} from 'react';
import { TbInfoCircleFilled } from 'react-icons/tb';
import 'tailwindcss/tailwind.css';

const WordDisplay = ({ selectedWordList, hintRequested, evaluateGuessWord, setHintRequested, cancelHintRequest, correctlyGuessedWords, firstUnguessedWordRef }) => {

    const displayLength = selectedWordList.length || 7;
    const lastBox = displayLength - 1;
    
    const [inputValues, setInputValues] = useState(Array(displayLength).fill(''));
    const [isSubmitButtonFocused, setIsSubmitButtonFocused] = useState(false);
    const [animatedBorders, setAnimatedBorders] = useState(false);
    const [guessCount, setGuessCount] = useState(1);
    const [guessLetters, setGuessLetters] = useState(Array(displayLength).fill('')); 
    
    const inputRefs = useRef(Array( displayLength ).fill(null));   
    const priorLettersEntered = useRef(false);  
    const allLettersEntered = useRef(false);
    const currentGuess = useRef('');

    // useEffect(() => {
      // const displayHintAnimation = () => {
      //   setAnimatedBorders(true);
      // };
      // if (hintRequested) {
      // displayHintAnimation();
      // }
    // }, [hintRequested]);
    
    useEffect(() => {
      // Focus on the first input box when the component renders
      inputRefs.current[0].focus();
    }, []);

    useEffect(() => {
      console.log(firstUnguessedWordRef.current);
      displayHintRequestedMode();
    }, [hintRequested]);

    const checkIfMastered = () => {
      console.log("cgw:" + correctlyGuessedWords.length);
      console.log(selectedWordList.words.length);
      if (correctlyGuessedWords.length > 0) {
        (correctlyGuessedWords.length === selectedWordList.words.length)
        console.log("list is mastered")
        return true;
      }
    }

    const displayHintRequestedMode = () => {
      console.log()
    }
    // const cancelHintRequest = () => {
      // setAnimatedBorders(false);
    //   setHintRequested(false);
    // }
    
    // const handleInputClick = (index) => {
    //   if (inputRefs.current[index]) {
    //     inputRefs.current[index].focus();
    // }
    // }

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
        setIsSubmitButtonFocused(true);
      }
  
      // Move focus to the previous input box when shift + tab is pressed
      if (e.key === 'Tab' && e.shiftKey && index > 0) {
        inputRefs.current[index - 1].focus();
      }
  
      // If 'Tab' is pressed and it's the last input box, focus on the submit button
      if (e.key === 'Tab' && index === lastBox) {
        setIsSubmitButtonFocused(true);
      };
    }

 
    // const handleHintClick = () => {
    //   evaluateLetterGuesses();
    // }

      //first display message (upon hover only) "once you request a hint, you must commit to finish word"  do you still want to request?

      //next - if any letters are entered, check to see if they are correct or not

        //check to see if correct or not:
          //using the stemWordList, go to the first word that is not appearing as already correctly entered, 
          //stop at that word
          //make a function to compare the letters in that word to any letters that may already be entered...
                    // if value is not equal to '', checkLetterCorrectness

    // const checkLetterCorrectness = () => {
      //  maybe don't have to first see if it is null
      // just go through each one and compare
      // if letter == letter (change letter green)
      // if blank, do nothing
      // if incorrect, turn box gray and add question makr to it? over top of letter?
    // }


          //evaluateGuessedLetters = () =>
              // for each one that is correct, change text to green, 
              //and 
              // make it so that it cannot be clicked on to request a hint
              //for each one that is not correct, change to a red x over it
              //apply any that is not green correct, to be able to handle a click.
      //check for correct letter


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

    // const checkLetterGuesses = (firstUnguessedWordRef) => {
    //   const unguessedWordLetters = firstUnguessedWordRef.current.split('')
    //   console.log(unguessedWordLetters);
    //   const guessedLetters = inputRefs.current.map(ref => ref.value);
    //   console.log('Input values:', values);
    // }


      // for (let i = 0; i < firstUnguessedWord.length; i++) {
      //   if ()
      // }
    
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
      <div className="wordDisplay border-2 bg-yellow-100 border-blue-500 p-3 rounded-md relative">
        <div className="flex justify-center gap-1 md:gap-2">
          {[...Array(displayLength)].map((_, index) => (
            <div key={index} className="flex items-center">
              <input
                ref={(el) => (inputRefs.current[index] = el)}

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
            
                type="text"
                value={inputValues[index]}
                // className={`letter-box input text-center aspect-square rounded-md z-10 overflow-hidden input-secondary 
                // w-full 

                className={`letter-box input text-center aspect-square rounded-md z-10 overflow-hidden input-secondary 
                max-w-xs 
                w-[calc(100%-2px)] h-[calc(100%-2px)] top-[1px] left-[1px] border-2
                ${hintRequested
                  //letter box style when hint requested
                  ? 'bg-green-300 text-4xl md:text-5xl  border-green-800'
                :  
                  //default letter box style
                'bg-yellow-300 text-3xl md:text-4xl  border-purple-400'
              }
                `}
                maxLength={1}
                // onChange={(e) => handleInputChange(e, index)}
                // onKeyDown={(e) => handleKeyDown(e, index)}
                onChange={hintRequested ? undefined : (e) => handleInputChange(e, index)}
                onKeyDown={hintRequested ? undefined : (e) => handleKeyDown(e, index)}
                // onClick={hintRequested ? () => handleHintClick(index) : undefined} 
              />
            </div>
          ))}
        </div>
        <div className="absolute mt-[82px]">
          <button
            onKeyDown={handleSubmitGuess}
            onClick={handleSubmitGuess}
            className={`bg-blue-400 border-2 border-black hover:bg-blue-700 text-white text-md px-1 h-1/2 rounded-md mt-0
              sm:mt-6
              md:mb-0 md:mt-0
              lg:mt-0
              ${isSubmitButtonFocused ? 'focus:bg-blue-700' : ''}
            `}
            onBlur={() => setIsSubmitButtonFocused(false)}
          >
            Submit
          </button>
        </div>
      </div>
    );
}     
export default WordDisplay;


// w-[calc(100%-2px)] h-[calc(100%-2px)] 

 
  {/* //           ref={(el) => (inputRefs.current[index] = el)}
  //           className="letter-box input bg-purple-500 w-20 h-20 aspect-square rounded-md relative overflow-hidden"
  //         >
  //           <div className={`absolute inset-0 overflow-hidden ${animatedBorders ? 'animate-spin' : ''}`}>
  //             <div className="absolute inset-0 bg-transparent conic-background" style={{ animationDuration: '4s' }}></div>
  //           </div>
  //           <input */}
  {/* //             type="text"
  //             value={inputValues[index]}
  //             className="w-full h-full text-3xl md:text-4xl text-center bg-transparent border-none"
  //             maxLength={1}
  //             onChange={(e) => handleInputChange(e, index)}
  //             onKeyDown={(e) => handleKeyDown(e, index)}
  //           />
  //         </div> */}


        // DON'T DELETE
        // <div className="relative">
        // <div className="bg-[purple] h-[300px] w-[300px] absolute overflow-hidden">
        // <div className="absolute conic-background h-[500px] w-[500px] animate-spin top-[-35%] right-[-35%]" style={{ animationDuration: '4s' }}></div>
        // </div>
      
