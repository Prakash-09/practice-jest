import React from 'react';
import { shallow } from 'enzyme';
import Congrats from '../../../components/functionalComponents/jotto/Congrats';
import { findTestAttr, checkProps } from '../../../utils/TestUtlis';
// import checkPropTypes from 'check-prop-types';

const defaultProps = {success: false}
const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />)
}

test('render without error', () => {
    const wrapper = setup();
    const congratsComponent = findTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.length).toBe(1)
})
test("renders no text when `success` prop is false", () => {
    const wrapper = setup({success: false});
    const congratsComponent = findTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.text()).toBe('')
})
test('render text when `success` prop is true', () => {
    const wrapper = setup({success: true});
    const congratsComponent = findTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.length).not.toBe(0)
})
// test('render success message', () => {
//     const wrapper = setup({success: true});
//     const congratsMessage =  findTestAttr(wrapper, 'congrats-message')
//     expect(congratsMessage.text()).toContain('Congratulations')
// })
test('does not throw warning with expected props', () => {
    const expectedProps = {success: false};
    // const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name)
    // expect(propError).toBeUndefined();
    checkProps(Congrats, expectedProps);
})