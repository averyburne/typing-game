import React from 'react'

const Results = ({ correctResults, wrongResults, countCorrect }) => {

    const correctJSX = correctResults.map((word, index) => <div className='row' key={index}><p>{word}</p></div>)
    const wrongJSX = wrongResults.map((word, index) => <div className='row' key={index}><p>{word}</p></div>)
    return(
        <div className='results'>
            <div className='title'>
                <p>Correct Answers: {countCorrect}</p>
            </div>
            <div className='resultsContainer'>
                <div className="correctResults">
                    {correctJSX}
                </div>
                <div className="wrongResults">
                    {wrongJSX}
                </div>
            </div>
        </div>
    )
}

export default Results
