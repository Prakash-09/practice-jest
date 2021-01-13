import React from 'react';
import Add from '../../components/add/Add';
// import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

test('add', () => {
    const div = document.createElement("div",);
    // render(<Add />)
    ReactDOM.render(<Add x="2" y="4" />, div)
    expect(div.innerHTML).toBe("6")
})