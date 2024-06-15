import React from 'react';
import {useEffect, useState, useRef} from 'react';

const WordDisplay = ({ selectedWordList }) => {

    const displayLength = selectedWordList.length || 7;

    const [inputValues, setInputValues] = useState(Array(7).fill(''));
    const [wordToSubmit, setWordToSubmit] = useState('');
    const [isSubmitButtonFocused, setIsSubmitButtonFocused] = useState(false);

    const inputRefs = useRef(Array( displayLength ).fill(null));
  
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
        
        if (index === displayLength -1 && value !== '') {
          setIsSubmitButtonFocused(true);
        }

        if (index < displayLength - 1 && value !== '') {
          inputRefs.current[index + 1].focus();

      }
      };



    const handleKeyDown = (e, index) => {
      // Prevent the default tab behavior when shift + tab is pressed
      if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();
      }
  
      // Move focus to the previous input box when shift + tab is pressed
      if (e.key === 'Tab' && e.shiftKey && index > 0) {
        inputRefs.current[index - 1].focus();
      }
  
      // If 'Tab' is pressed and it's the last input box, focus on the submit button
      if (e.key === 'Tab' && index === displayLength - 1) {
        setIsSubmitButtonFocused(true);
      }
    };

              //   const handleLastInputKeyDown = (e) => {
    //     if (e.key === 'Tab' || (e.key.length === 1 && e.key.match(/[a-zA-Z]/))) {
    //       e.preventDefault(); // Prevent default tab behavior
    //       document.getElementById('submitBtn').focus();
    //   }
          //   if (index === combinedInputRefs.length - 1) {
              
     
    const handleSubmit = () => {
              // if (e.key === 'Enter' && e.target === submitButtonRef.current) {

        // console.log(inputRefs)
        // setWordToSubmit(inputRefs.join());
        // console.log(word);
        const values = inputRefs.current.map(ref => ref.value);
        console.log('Input values:', values);

        const word = values.join('');
        setWordToSubmit(word);
        console.log("Submission Word:", word);
        // Reset the inputs after submission
        inputRefs.current.forEach((ref) => {
        ref.value = '';
        });
        // Reset input values and focus on the first input
        inputRefs.current.forEach((ref) => {
          ref.value = '';
        });
        if (inputRefs.current.length > 0) {
          inputRefs.current[0].focus();
        }
    
        setIsSubmitButtonFocused(false);
      };

    // if (e.key === 'Tab' && index === inputRefs.current.length - 1) {
    //   submitButtonRef.current.focus();
// Set the state to indicate submit button is focused


          
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
    )
                }
                        
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


