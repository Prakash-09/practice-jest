import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr, storeFactory } from '../../../utils/TestUtlis';
import Input, { UnconnectedInput } from '../../../components/udemyComponents/jotto/Input';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapped;
        beforeEach(() => {
            const initialState = { success: false };
            wrapped = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findTestAttr(wrapped, 'component-input');
            expect(component.length).toBe(1);
        })
        test('renders input box', () => {
            const inputBox = findTestAttr(wrapped, 'input-box');
            expect(inputBox.length).toBe(1);
        })
        test('renders submit button', () => {
            const submitButton = findTestAttr(wrapped, 'submit-button');
            expect(submitButton.length).toBe(1);
        })
    })
    describe('word has been guessed', () => {
        let wrapped;
        beforeEach(() => {
            const initialState = { success: true };
            wrapped = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findTestAttr(wrapped, 'component-input');
            expect(component.length).toBe(1);
        })
        test('does not render input box', () => {
            const inputBox = findTestAttr(wrapped, 'input-box');
            expect(inputBox.length).toBe(0);
        })
        test('does not render submit button', () => {
            const submitButton = findTestAttr(wrapped, 'submit-button');
            expect(submitButton.length).toBe(0);
        })
    })
})
// describe('update state', () => {

// })
describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    })
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
})

describe('`guessWord` action creator call', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';
    beforeEach(() => {
        guessWordMock = jest.fn();
        const props = { guessWord: guessWordMock, };

        wrapper = shallow(<UnconnectedInput {...props} />);
        wrapper.setState({ currentGuess: guessedWord })

        const submitButton = findTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() {} });
    })

    test('`guessWord` was called once', () => {
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    })
    test('calls `guessWord with input value as argument`', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    })
    test('inputBox clear on submit', () => {
        expect(wrapper.state('currentGuess')).toBe('');
    })
})