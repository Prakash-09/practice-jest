import React from 'react';
import propTypes from 'prop-types';

function GuessedWords(props) {
    let contents;
    if(props.guessedWords.length === 0){
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        )
    } else{
        const guessedWordsRows = props.guessedWords.map((word, wordIdx) => (
            <tr data-test="guessed-word" key={wordIdx}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test="guessed-words-section">
                <h3>Guessed words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matching letters</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </table>
            </div>
        )
    }
    return(
        <div data-test="component-guessed-words">
            { contents }
        </div>
    );
}

GuessedWords.propTypes = {
    guessedWords: propTypes.arrayOf(
        propTypes.shape({
            guessedWord: propTypes.string.isRequired,
            letterMatchCount: propTypes.number.isRequired,
        })
    ).isRequired,
}

export default GuessedWords;