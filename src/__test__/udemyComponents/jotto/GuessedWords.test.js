import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr, checkProps } from '../../../utils/TestUtlis';
import GuessedWords from '../../../components/udemyComponents/jotto/GuessedWords';

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

describe("if there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []})
    })
    test("renders guessed words component without error", () => {
        const component = findTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })
    test("render instructions to guess a word", () => {
        const guessInstructions = findTestAttr(wrapper, 'guess-instructions')
        expect(guessInstructions.text().length).not.toBe(0)
    })
})
describe("if there are words guessed", () => {
    let wrapper;
    const guessedWords = [
        {guessedWord: "train", letterMatchCount: 3},
        {guessedWord: "agile", letterMatchCount: 1},
        {guessedWord: "party", letterMatchCount: 5},
    ]
    beforeEach(() => {
        wrapper = setup({guessedWords})
    })

    test("renders guessed words component without error", () => {
        const component = findTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })
    test("reders guessed words section", () => {
        const guessedWordsSection = findTestAttr(wrapper, 'guessed-words-section')
        expect(guessedWordsSection.length).toBe(1)
    })
    test("correct number of guessed words", () => {
        const guessedWordsNodes = findTestAttr(wrapper, 'guessed-word')
        expect(guessedWordsNodes.length).toBe(guessedWords.length)
    })
})
