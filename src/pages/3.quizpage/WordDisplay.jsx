import React from 'react';
import {useEffect, useState, useRef} from 'react';

const WordDisplay = ({ selectedWordList, hintRequested }) => {
    const displayLength = selectedWordList.length || 7;
    const lastBox = displayLength - 1;
    
    const [inputValues, setInputValues] = useState(Array(displayLength).fill(''));
    const [isSubmitButtonFocused, setIsSubmitButtonFocused] = useState(false);
    const [animatedBorders, setAnimatedBorders] = useState(false);
    const [hintBordersDisplayed, setHintBordersDisplayed] = useState(false);
    // const [wordToSubmit, setWordToSubmit] = useState('');

    const inputRefs = useRef(Array( displayLength ).fill(null));
    const guessWord = useRef('');
    const priorLettersEntered = useRef(false);
    const allLettersEntered = useRef(false);

    useEffect(() => {
      // Focus on the first input box when the component mounts
      inputRefs.current[0].focus();
    }, []);

    useEffect(() => {
      hintRequested && setHintBordersDisplayed(true);
    }, [hintRequested]);

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
    </div> */}
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={inputValues[index]}
                  className="letter-box input
                     bg-yellow-300 text-4xl md:text-4xl text-center input-secondary 
                     max-w-xs aspect-square rounded-md z-10 overflow-hidden
                    w-[calc(100%-2px)] h-[calc(100%-2px)] top-[1px] left-[1px] border-2 border-purple-400"
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              </div>
            ))}
            <div className="absolute mt-[82px]">
              <button
                onKeyDown={handleSubmit}
                onClick={handleSubmit}
                className={`bg-blue-400 border-2 border-black hover:bg-blue-700 text-white text-md px-1 h-1/2 rounded-md
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

        
        // <div className="wordDisplay border-2 bg-yellow-100 border-blue-500 p-3 rounded-md">
        //     <div className="flex relative justify-center gap-1 md:gap-2">
        //         {[...Array(displayLength)].map((_, index) => (
              //  <div key={index} className="flex">   
              //       <input
              //         ref={(el) => (inputRefs.current[index] = el)}
              //         type="text"
              //         value={inputValues[index]}
              //         className={`letter-box input 
              //           ${hintBordersDisplayed 
              //             ? 'border-red-900 border-2' 
              //             : 'border-2 border-blue-400'} bg-yellow-300 text-4xl md:text-4xl text-center input-secondary w-full max-w-xs aspect-square rounded-md`}
              //         maxLength={1} // Limit input length to 1 character
              //         onChange={(e) => {handleInputChange(e, index)}} // Call handleInputChange when input changes
              //         onKeyDown={(e) => handleKeyDown(e, index)} // Listen for keydown event 
              //       />
              //   </div>
              // <div className="bg-black flex p-0.5 relative bg-gradient-to-b from-slate-300 to-slate-800 rounded-md">
              // <div className="conic-background animate-spin inset-0">
              //   <div className="flex">
              //     {[...Array(displayLength)].map((_, index) => (
              //       <div key={index} className="relative flex items-center">
              //         <div className="absolute inset-0 animate-spin">
              //           {/* Black box that spins */}
              //           <div className="w-10 h-10 bg-black rounded-md"></div>
              //         </div>
              //         {/* Yellow input box that stays static */}
              //         <input
              //           ref={(el) => (inputRefs.current[index] = el)}
              //           type="text"
              //           value={inputValues[index]}
              //           className={`letter-box input
              //             ${hintBordersDisplayed ? 'border-red-900 border-2' : 'border-2'}
              //             bg-yellow-300 text-4xl md:text-4xl text-center input-secondary w-full max-w-xs aspect-square rounded-md`}
              //           maxLength={1}
              //           onChange={(e) => handleInputChange(e, index)}
              //           onKeyDown={(e) => handleKeyDown(e, index)}
              //         />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//                   ))}       
//                   <div className="absolute top-16 mt-1">
//                     <button 
//                         onKeyDown={handleSubmit}
//                         onClick={handleSubmit}
//                         className={`bg-blue-400 border-2 border-black hover:bg-blue-700 text-white text-sm px-1 h-1/2 rounded-md
//                         ${isSubmitButtonFocused ? 'focus:bg-blue-700' : ''}
//                         `}
//                         onBlur={() => setIsSubmitButtonFocused(false)}
//                         >Submit
//                     </button>  
//                   </div>     
//             </div>  
//         </div>
//     );
// };
// export default WordDisplay;

// return (
//   <div className="wordDisplay border-2 bg-yellow-100 border-blue-500 p-3 rounded-md">
//     <div className="flex relative justify-center gap-1 md:gap-2">
//       {[...Array(displayLength)].map((_, index) => (
//         <div key={index} className="relative flex items-center">
//           {/* Black spinning box */}
//           <div className="absolute inset-0 animate-spin bg-black rounded-md w-10 h-10"></div>
//           {/* Yellow static input box */}
//           <input
//             ref={(el) => (inputRefs.current[index] = el)}
//             type="text"
//             value={inputValues[index]}
//             className={`letter-box input
//               ${hintBordersDisplayed ? 'border-red-900 border-2' : 'border-2 border-blue-400'}
//               bg-yellow-300 text-4xl md:text-4xl text-center input-secondary w-full max-w-xs aspect-square rounded-md`}
//             maxLength={1}
//             onChange={(e) => handleInputChange(e, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//           />
//         </div>
//       ))}
//       <div className="absolute top-16 mt-1">
//         <button
//           onKeyDown={handleSubmit}
//           onClick={handleSubmit}
//           className={`bg-blue-400 border-2 border-black hover:bg-blue-700 text-white text-sm px-1 h-1/2 rounded-md
//             ${isSubmitButtonFocused ? 'focus:bg-blue-700' : ''}
//           `}
//           onBlur={() => setIsSubmitButtonFocused(false)}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   </div>
// );

    // const preFillBoxes = () => {
    //     const filledBoxes = [...inputValues];
    //     filledBoxes[0] = 'C'; // Example: Pre-fill the first box with 'C'
    //     filledBoxes[2] = 'D'; // Example: Pre-fill the third box with 'D'
    //     setInputValues(filledBoxes);
    //   };
    //   useEffect(() => {
    //     preFillBoxes();
    //   }, []);