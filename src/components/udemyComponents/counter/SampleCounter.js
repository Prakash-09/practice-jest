import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

export default function SampleCounter() {
    const [ counter, setCounter ] = useState(0)

    const handleCounter = () => {
        setCounter(counter + 1)
    }
    return(
        <div className="text-center mt-3">
            <h5 data-test="display-count">Count is <span data-test='display-incremented-count'>{counter}</span></h5>
            <Button data-test="increment-count-button" variant="primary" size="sm" onClick={handleCounter}> Click to increment Count  </Button>
        </div>
    );
}