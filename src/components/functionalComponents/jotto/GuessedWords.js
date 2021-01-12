import React from 'react';
import propTypes from 'prop-types';

function GuessedWords() {
    return(
        <div>

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