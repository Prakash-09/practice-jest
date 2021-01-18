import React from 'react';
import SampleForm from '../../components/practice/SampleForm';
import { shallow } from 'enzyme';

const setup = () => shallow(<SampleForm />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('render sampleForm component', () => {
    const wrapped = setup();
    let sampleFormComponent = findByTestAttr(wrapped, 'sample-form-component');
    expect(sampleFormComponent.length).toBe(1)
})

describe('render form fields', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })
    test('render firstName field', () => {
        let firstNameInputField = findByTestAttr(wrapper, 'firstName');
        expect(firstNameInputField.length).toBe(1)
    })
    test('render lastName field', () => {
        let lastNameInputField = findByTestAttr(wrapper, 'lastName');
        expect(lastNameInputField.length).toBe(1)
    })
    test('render phNumber field', () => {
        let phNumberInputField = findByTestAttr(wrapper, 'phNumber');
        expect(phNumberInputField.length).toBe(1)
    })
    test('render dob field', () => {
        let dobInputField = findByTestAttr(wrapper, 'dob');
        expect(dobInputField.length).toBe(1)
    })
    test('render male field', () => {
        let maleInputField = findByTestAttr(wrapper, 'male');
        expect(maleInputField.length).toBe(1)
    })
    test('render female field', () => {
        let femaleInputField = findByTestAttr(wrapper, 'female');
        expect(femaleInputField.length).toBe(1)
    })
    test('render interested field', () => {
        let interestedInputField = findByTestAttr(wrapper, 'interested');
        expect(interestedInputField.length).toBe(1)
    })
    test('render submitButton field', () => {
        let submitButtonInputField = findByTestAttr(wrapper, 'submitButton');
        expect(submitButtonInputField.length).toBe(1)
    })
})

describe('render form fields handle change', () => {
    let wrapper;
    let properties;
    beforeEach(() => {
        wrapper = setup();
        properties = {
            firstName: 'sai',
            lastName: 'prakash',
            phNumber: '9876543210',
            dob: '10-07-96',
            gender: 'male',
            interested: 'education',
            layout: 1
        }
    })

    test('handle change of firstName', () => {
        let firstNameInputField = findByTestAttr(wrapper, 'firstName');
        firstNameInputField.value = properties.firstName;
        expect(firstNameInputField.value).toBe('sai')
    })
    test('handle change of lastName', () => {
        let lastNameInputField = findByTestAttr(wrapper, 'lastName');
        lastNameInputField.value = properties.lastName;
        expect(lastNameInputField.value).toBe('prakash')
    })
    test('handle change of phNumber', () => {
        let phNumberInputField = findByTestAttr(wrapper, 'phNumber');
        phNumberInputField.value = properties.phNumber;
        expect(phNumberInputField.value).toBe('9876543210')
    })
    test('handle change of dob', () => {
        let dobInputField = findByTestAttr(wrapper, 'dob');
        dobInputField.value = properties.dob;
        expect(dobInputField.value).toBe('10-07-96')
    })
    test('handle change of gender', () => {
        let genderInputField = findByTestAttr(wrapper, 'gender');
        genderInputField.value = properties.gender;
        expect(genderInputField.value).toBe('male')
    })
    test('handle change of interested', () => {
        let interestedInputField = findByTestAttr(wrapper, 'interested');
        interestedInputField.value = properties.interested;
        expect(interestedInputField.value).toBe('education')
    })
    test('handle submit button', () => {
        let submitButton = findByTestAttr(wrapper, 'submitButton');
        submitButton.simulate('click', { preventDefault() {} } );
        wrapper.update();

        let formSubmitted = findByTestAttr(wrapper, 'form-submitted');
        expect(formSubmitted.text()).toContain('submitted')
    })
})