import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr, checkProps } from '../../../utils/TestUtlis';
import GuessedWords from '../../../components/functionalComponents/jotto/GuessedWords';

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}],
}
const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps} />)
}

test("does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps)
})
