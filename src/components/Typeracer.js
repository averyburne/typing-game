import React from 'react'
import Button from'./Button.js'

const Typeracer = (props) => {
    const { newWord,
            inputValue, 
            setInputValue, 
            disabled, 
            time, 
            animation,
            handleInput,
            handleStart,
         } = props

    return(
        <div className='typeracer'>
            <div className='wordOutput'>
                <p>{newWord}</p>
            </div>
            <div style={{animation: animation !== null ? animation : ''}} className='time'>
                <p>{time}</p>
            </div>
            <div className='wordValues'>
                <input 
                value={inputValue}
                disabled={disabled && disabled}
                onKeyPress={(e) => handleInput(e)}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={disabled ? '' : 'Start Typing'}
                type='text'/>
                <Button handleStart={handleStart} disbaled={disabled}/>
            </div>
        </div>
    )
}

export default Typeracer