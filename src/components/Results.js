import React from 'react'

const Results = ({ correctResults, wrongResults, countCorrect }) => {
    console.log(correctResults)

    const correctJSX = correctResults.map((word, index) => <div className='row' key={index}><p>{word}</p></div>)
    console.log(correctJSX)
    return(
        <div className='results'>
            <div className='title'>
                <p>Correct Answers: {countCorrect}</p>
            </div>
            <div className='resultsCounter'>
                <div className="correctResults">
                    {correctJSX}
                    {correctResults.map((correctWord, index) => {
                        <div key={index} className='row'>
                            <p>{correctWord}</p>
                        </div>
                    })}
                </div>
                <div className="wrongResults">
                    {wrongResults.map((wrongWord, index) => {
                        <div key={index} className='row'>
                            <p>{wrongWord}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Results
