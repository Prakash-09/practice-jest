import React from 'react';
import ReactDOM from 'react-dom';
import Text from '../../components/displayText/Text';

test("renders with out crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Text label='test something' />, div)
    expect(div.innerHTML).toContain('something')
})