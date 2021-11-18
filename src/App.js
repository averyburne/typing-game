import React, { useState, useEffect} from 'react';
import Words from './components/Words.js'
import Container from './components/Container.js'
import './App.css';
import Typeracer from './components/Typeracer.js';

const App = () => {
  const [ word, setWord ] = useState(Words)
  const [ newWord, setNewWord ] = useState(word[0])
  const [ disabled, setDisabled ] = useState(true)
  const [ currentResults, setCurrentResults ] = useState([])
  const [ wrongResults, setWrongResults ] = useState([])
  const [ correctCount, setCorrectCount ] = useState([])
  const [ time, setTime ] = useState(30)
  const [ inputValue, setInputValue ] = useState('')
  const [ animation, setAnimation ] = useState(null)
  console.log(Container)

  let randomWord = Math.floor(Math.random() * word.length)

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
    </div>
  );
}

export default App;
