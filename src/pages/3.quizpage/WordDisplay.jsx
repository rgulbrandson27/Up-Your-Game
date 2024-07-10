import React from 'react';
import {useEffect, useState, useRef} from 'react';

const WordDisplay = ({ selectedWordList, hintRequested, evaluateGuessWord }) => {

    const displayLength = selectedWordList.length || 7;
    const lastBox = displayLength - 1;
    
    const [inputValues, setInputValues] = useState(Array(displayLength).fill(''));
    const [isSubmitButtonFocused, setIsSubmitButtonFocused] = useState(false);
    const [animatedBorders, setAnimatedBorders] = useState(false);
    const [guessCount, setGuessCount] = useState(1);

    const inputRefs = useRef(Array( displayLength ).fill(null));
    const priorLettersEntered = useRef(false);
    const allLettersEntered = useRef(false);
    const currentGuess = useRef('');

    useEffect(() => {
      const displayHintAnimation = () => {
        setAnimatedBorders(true);
      };
      if (hintRequested) {
      displayHintAnimation();
      }
    }, [hintRequested]);
    
    useEffect(() => {
      // Focus on the first input box when the component mounts
      inputRefs.current[0].focus();
    }, []);

    const checkIfMastered = () => {
      if (correctlyGuessedWords.length > 0) {
        (correctlyGuessedWords.length === selectedWordList.length)
        return true;
      }
    }
//or do i put this prompt function in the return section of checkIfMastered
    // const promptAddToMasteredList = () => {
    //   checkIfMastered && 
    // }

    const cancelAnimatedBorders = () => {
      setAnimatedBorders(false);
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
      console.log(priorLettersEntered, allLettersEntered);
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
     
    const handleSubmitGuess = () => {

      if (!allLettersEntered.current) {
        window.alert("All letters must be entered.");
      } else {

        const values = inputRefs.current.map(ref => ref.value);
        console.log('Input values:', values);

        currentGuess.current = values.join('');
        console.log(currentGuess.current);

        evaluateGuessWord(currentGuess.current);

        setGuessCount((prevCount) => prevCount + 1);
        console.log(guessCount);

        setInputValues(Array(displayLength).fill(''));
        setIsSubmitButtonFocused(false);
        inputRefs.current[0].focus();

        checkIfMastered();
      }
    };

      return (
        <div className="wordDisplay border-2 bg-yellow-100 border-blue-500 p-3 rounded-md relative">
          <div className="flex justify-center gap-1 md:gap-2 overflow-hidden">
            {[...Array(displayLength)].map((_, index) => (
              <div key={index} className="flex items-center">
              
         {/* DON'T DELETE */}
    {/* <div className="relative">
      <div className="bg-[purple] h-[300px] w-[300px] absolute overflow-hidden">
        <div className="absolute conic-background h-[500px] w-[500px] animate-spin top-[-35%] right-[-35%]" style={{ animationDuration: '4s' }}></div>
        </div>

      <div className="bg-blue-300 h-[280px] w-[280px] ml-[10px] mt-[10px] relative"></div>
    </div>  */}

      {/* {hintRequested ? ( */}
        {/* // <div className="relative">
        //   <div className="bg-purple-700  w-[100%] h-[100%] absolute overflow-hidden">
        //       <div className="absolute conic-background h-[150%] w-[150%] animate-spin top-[-35%] right-[-35%]" style={{ animationDuration: '4s' }}></div>
        //       <input */}
        {/* //         ref={(el) => (inputRefs.current[index] = el)}
        //         type="text"
                // value={inputValues[index]}
                // className="letter-box input text-3xl md:text-4xl text-center input-secondary 
                //      max-w-xs aspect-square rounded-md z-10 overflow-hidden"
                // maxLength={1}
                // cursor="pointer" */}
    
          {/* />
          </div>
          <div className="bg-blue-300 h-[90%] w[90%] ml-[5%] mt-[5%] relative"></div>
         */}

        {/* </div> */}

{/*           
      ) : ( */}
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={inputValues[index]}
                  className="letter-box input
                     bg-yellow-300 text-3xl md:text-4xl text-center input-secondary 
                     max-w-xs aspect-square rounded-md z-10 overflow-hidden
                    w-[calc(100%-2px)] h-[calc(100%-2px)] top-[1px] left-[1px] border-2
                     border-purple-400"
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
      {/* )} */}
          </div>
            ))}
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
        </div>
      );
    };
        
export default WordDisplay;