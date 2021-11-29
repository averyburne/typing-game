import React from 'react'

const Results = ({ correctResults, wrongResults, countCorrect }) => {
    return(
        <div className='results'>
            <div className='title'>
                <p>Correct Answers: {countCorrect}</p>
            </div>
            <div className='resultsCounter'>
                <div className="correctResults">
                    {correctResults.map((correctWord, index) => {
                        <div key={index} className='row'>
                            <p>{correctWord}</p>
                        </div>
                    })}
                </div>
                <div className="wrongResults">
                    {correctResults.map((wrongWord, index) => {
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