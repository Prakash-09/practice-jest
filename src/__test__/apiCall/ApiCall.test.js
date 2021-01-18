import React from 'react';
import { mount } from 'enzyme';
import ApiCall from '../../components/apiCall/ApiCall';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
        status: 200,
        response: [{ name: 'sai'}, { name: 'prakash' }],
    })
})
afterEach(() => {
    moxios.uninstall();
})

test('renders ApiCall component', () => {
    const wrapper = mount(<ApiCall />);
    const apiCallComponent = wrapper.find("[data-test='api-call-component']")
    expect(apiCallComponent.length).toBe(1)
})
test('get a list of users and display them', (done) => {
    const wrapper = mount(<ApiCall />);

    moxios.wait(() => {
        wrapper.update();

        expect(wrapper.find("[data-test='users-list']").length).toBe(2)
        done();
        wrapper.unmount();
    })
})
