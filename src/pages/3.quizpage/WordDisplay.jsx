
import React from 'react';
import {useEffect, useState} from 'react';

const WordDisplay = ({ selectedWordList, isNewSelection }) => {
  const [stemWordLetters, setStemWordLetters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isNewSelection ) {
      setStemWordLetters(selectedWordList.listName.split(""));
      setLoading(false);
    }
    console.log('selectedWordList has changed on quizpage in wordDisplay component:', selectedWordList);
    }, [selectedWordList])
            
            return (
              <div className="wordDisplay border-2 bg-yellow-100 border-blue-700 p-2">
                <div className="flex justify-center">
                  {stemWordLetters.map((letter, index) => (
                    <div key={index} className="letter-box text-4xl w-1/7 tracking-wider border-b-2">{letter}</div>
                  ))}
                </div>
              </div>
  );
};


export default WordDisplay;

