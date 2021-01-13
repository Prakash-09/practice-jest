import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr, storeFactory } from '../../../utils/TestUtlis';
import Input from '../../../components/udemyComponents/jotto/Input';

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
describe('update state', () => {

})