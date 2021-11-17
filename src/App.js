import React, { useState, useEffect} from 'react';
import Words from './components/Words.js'
import Container from './components/Container.js'
import './App.css';

function App() {
  const [ word, setWord ] = useState(Words)
  const [ newWord, setNewWord ] = useState(word[0])
  const [ disabled, setDisabled ] = userState(true)
  const [ currentResults, setCurrentResults ] = useState([])
  const [ wrontResults, setWrongResults ] = useState([])
  const [ correctCount, setCorrectCount ] = useState([])
  const [ time, setTime ] = useState(30)
  const [ inputValue, setInputValue ] = useState('')
  const [ animation, setAnimation ] = userState(null)

  let randomWord = Math.floor(Math.random() * word.length)

  return (
    <div className="App">
      <Container></Container>
    </div>
  );
}

export default App;
