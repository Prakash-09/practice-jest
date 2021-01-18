import React from 'react';
import { shallow } from 'enzyme';
import SampleCounter from '../../../components/udemyComponents/counter/SampleCounter';



const setup = () => shallow(<SampleCounter />)
const findTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('display count', () => {
    const wrapper = setup()
    const counterDisplay = findTestAttr(wrapper, 'display-count')
    expect(counterDisplay.length).toBe(1)
})

test('increment button', () => {
    const wrapper = setup()
    const buttonCounter = findTestAttr(wrapper, 'increment-count-button')
    expect(buttonCounter.length).toBe(1)
})

test('counter starts at 0', () => {
    const wrapper = setup()
    const displayIncrementedCount = findTestAttr(wrapper, 'display-incremented-count').text()
    expect(displayIncrementedCount).toBe("0")
})

test('clicking on the button increments counter display', () => {
    const wrapper = setup()
    const buttonCounter = findTestAttr(wrapper, 'increment-count-button')
    buttonCounter.simulate('click')
    const displayIncrementedCount = findTestAttr(wrapper, 'display-incremented-count').text()
    expect(displayIncrementedCount).toBe("1")

})