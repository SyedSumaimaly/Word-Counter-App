import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characCount, setCharacCount] = useState(0);


  const countHandler = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {

    const words = text.split('');


    let wordCount = 0;

    words.forEach((word) => {

      if (word.trim() !== '') {
        wordCount++;
      }

    });

    setWordCount(wordCount);

    setCharacCount(text.length);


  }, [text]);

  return (
    <div className='container'>
      <h1>Word Counter App</h1>
      <div className='text_div'>
        <textarea name="" id="" cols="100" rows="15" placeholder='Write Something to count' onChange={countHandler} value={text}></textarea>
      </div>
      <div className='Count_div'>
        <div>
          <p>Word Count: <span>{wordCount}</span></p>
          <p>Character Count: <span>{characCount}</span> </p>
        </div>
      </div>
    </div>
  );
}

export default App;
