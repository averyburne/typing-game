import React, { useState, useEffect} from 'react';
import Words from './components/Words.js'
import Container from './components/Container.js'
import Results from './components/Results.js'
import './App.css';
import Typeracer from './components/Typeracer.js';

const App = () => {
  const [ word, setWord ] = useState(Words)
  let randomWord = Math.floor(Math.random() * word.length)
  const [ newWord, setNewWord ] = useState(word[randomWord])
  const [ disabled, setDisabled ] = useState(true)
  const [ correctResults, setCorrectResults ] = useState([])
  const [ wrongResults, setWrongResults ] = useState([])
  const [ countCorrect, setCountCorrect ] = useState(0)
  const [ time, setTime ] = useState(30)
  const [ inputValue, setInputValue ] = useState('')
  const [ animation, setAnimation ] = useState(null)


  return (
    <div className="App">
      <Container>
        <Typeracer 
          newWord = {newWord}
          inputValue = {inputValue}
          setInputValue = {setInputValue}
          disabled = {disabled}
          time = {time}
          animation = {animation}
        />
      </Container>
        <Results
          correctResults = {correctResults}
          wrongResults = {wrongResults}
          countCorrect = {countCorrect}
        />

    </div>
  );
}

export default App;
