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

  const checkAnswer = () => {
    if(inputValue.trim() === newWord) {
      setCorrectResults(prevCorrect => [...prevCorrect, newWord])
      console.log(correctResults)
      setCountCorrect((prevCount) => prevCount + 1)
      return
    }
    setWrongResults((prevWrong) => [...prevWrong, inputValue])
  }

  const handleInput = e => {
    if(e.charCode === 13 && inputValue.trim() !== '') {
      checkAnswer()
      setNewWord(word[randomWord])
      setInputValue('')
    }
  }

  const handleStart = () => {
    console.log(1, disabled)
    setDisabled(!disabled)
    console.log(2, disabled)
    setCorrectResults([])
    setWrongResults([])
    setCountCorrect(0)
    setInputValue('')
  }

  useEffect(() => {
    if(time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => setTime(prevTime => prevTime - 1), 1000)
    } else if (disabled) {
      setTime(30)
      setAnimation(null)
    } else if (time === 0) {
      setDisabled(true)
    }

    if(time <= 10) {
      setAnimation("scaleNumber 2s infinite")
    }
  }, [disabled, time])

  useEffect(() => {
    setNewWord(word[randomWord])
  }, [])

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
          handleInput = {handleInput}
          handleStart = {handleStart}
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
