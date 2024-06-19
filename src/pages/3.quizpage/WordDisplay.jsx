import React from 'react';
import {useEffect, useState, useRef} from 'react';

const WordDisplay = ({ selectedWordList }) => {
    const displayLength = selectedWordList.length || 7;
    const lastBox = displayLength - 1;
    
    const [inputValues, setInputValues] = useState(Array(displayLength).fill(''));
    const [isSubmitButtonFocused, setIsSubmitButtonFocused] = useState(false);
    // const [wordToSubmit, setWordToSubmit] = useState('');

    const inputRefs = useRef(Array( displayLength ).fill(null));
    const guessWord = useRef('');
    const priorLettersEntered = useRef(false);
    const allLettersEntered = useRef(false);

    useEffect(() => {
      // Focus on the first input box when the component mounts
      inputRefs.current[0].focus();
    }, []);

//functions 
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
    
        //update state
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
     
    const handleSubmit = () => {
        const values = inputRefs.current.map(ref => ref.value);
        console.log('Input values:', values);

        guessWord.current = values.join('');
        console.log(guessWord);

        setInputValues(Array(displayLength).fill(''));
        setIsSubmitButtonFocused(false);
        inputRefs.current[0].focus();
      }
 
    return (
        <div className="wordDisplay border-2 bg-yellow-100 border-blue-400 p-3 rounded-md">
            <div className="flex justify-center mx-3 gap-1 md:gap-2">
                {[...Array(displayLength)].map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={inputValues[index]}
                    className="letter-box input input-bordered bg-yellow-300 text-xl md:text-4xl text-center input-secondary w-full max-w-xs aspect-square rounded-md"
                    maxLength={1} // Limit input length to 1 character
                    onChange={(e) => {handleInputChange(e, index)}} // Call handleInputChange when input changes
                    onKeyDown={(e) => handleKeyDown(e, index)} // Listen for keydown event 
                  />
                  ))}            

                  </div>  
            <div className="flex justify-center">
                <button 
                  onKeyDown={handleSubmit}
                  onClick={handleSubmit}
                  className={`bg-blue-400 border-2 border-black hover:bg-blue-700 text-white text-xs px-1 h-1/4 rounded-md mt-3
                        ${isSubmitButtonFocused ? 'focus:bg-blue-700' : ''}
                        `}
                  onBlur={() => setIsSubmitButtonFocused(false)}
                  >Submit
                  </button>  
            </div>
              </div>
    );
};
                        
export default WordDisplay;


    // const preFillBoxes = () => {
    //     const filledBoxes = [...inputValues];
    //     filledBoxes[0] = 'C'; // Example: Pre-fill the first box with 'C'
    //     filledBoxes[2] = 'D'; // Example: Pre-fill the third box with 'D'
    //     setInputValues(filledBoxes);
    //   };
    //   useEffect(() => {
    //     preFillBoxes();
    //   }, []);