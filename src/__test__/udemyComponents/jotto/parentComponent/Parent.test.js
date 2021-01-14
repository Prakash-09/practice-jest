import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../../../utils/TestUtlis';
import Parent, { UnConnectedParentApp } from '../../../../components/udemyComponents/jotto/parentComponent/Parent';

const setup = (state={}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<Parent store={store} />).dive().dive();
    return wrapper;
}

describe('redux properties', () => {
    test('has access to `success` state', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test('has access to `secretWord` state', () => {
        const secretWord = 'party';
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });
    test('test has to `guessedWords` state', () => {
        const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
        const wrapper = setup({ guessedWords });
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toEqual(guessedWords);
    })
    test('`getSecretWord` action creator is a function on the props', () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    })
})
test('`getSecretWord` runs on ParentApp mount', () => {
    const getSecretWordMock = jest.fn();
    const props = { getSecretWord: getSecretWordMock, success: false, guessedWords: [],}
    const wrapper = shallow(<UnConnectedParentApp {...props} />);
    wrapper.instance().componentDidMount();
    const getSecretWordCallMount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallMount).toBe(1);
})