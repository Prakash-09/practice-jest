import React from 'react';
import { Row, Col } from 'reactstrap';
import './SampleForm.css';
import { Button } from 'react-bootstrap';

export default class SampleForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            layout: 0,
            firstName: '',
            lastName: '',
            phNumber: '',
            dob: '',
            gender: '',
            interested: '',
        }
    }

    handleChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name === 'male'){
            this.setState({gender: 'male'})
        }else if(name === 'female'){
            this.setState({gender: 'female'})
        }else{
            this.setState({
                [name] : value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ 
            layout: 1
        })
    }

    render() {
        const { layout, firstName, lastName, phNumber, dob, gender, interested } = this.state;
        return (
            <div className="p-4" data-test="sample-form-component">
                {layout === 0 &&
                    <form >
                        <Row xs="1" md="2" className="m-0 text-center">
                            <Col className="pr-2 my-3">
                                <h6 className="text-left">First Name</h6>
                                <input type="text" name="firstName" data-test='firstName' className='input-field' onChange={this.handleChangeInput} value={firstName} />
                            </Col>
                            <Col className="pr-2 my-3">
                                <h6 className="text-left">Last Name</h6>
                                <input type="text" name="lastName" data-test='lastName' className='input-field' onChange={this.handleChangeInput} value={lastName} />
                            </Col>
                            <Col className="pr-2 my-3">
                                <h6 className="text-left">Mobile number</h6>
                                <input type="number" name="phNumber" data-test='phNumber' className='input-field' onChange={this.handleChangeInput} value={phNumber} />
                            </Col>
                            <Col className="pr-2 my-3">
                                <h6 className="text-left">Date of birth</h6>
                                <input type="date" name="dob" data-test='dob' className='input-field' onChange={this.handleChangeInput} value={dob} />
                            </Col>
                            <Col className="pr-2 my-3">
                                <h6 className="text-left">Gender</h6>
                                <Row className="m-0">
                                    <Col className="p-0 text-left">
                                        <input type='radio' name="male" data-test='male' className='radio-btn' value={gender} onChange={this.handleChangeInput} checked={gender === 'male'} /><span>Male</span>
                                    </Col>
                                    <Col className="p-0 text-left">
                                        <input type='radio' name="female" data-test='female' className='radio-btn' value={gender} onChange={this.handleChangeInput} checked={gender === 'female'} /><span>Female</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="pr-2 my-3">
                                <h6 className="text-left">Interested</h6>
                                <select name='interested' data-test="interested" className="input-field-select" value={interested} onChange={this.handleChangeInput}>
                                    <option> </option>
                                    <option>Education</option>
                                    <option>Sports</option>
                                    <option>Events</option>
                                    <option>Other activities</option>
                                </select>
                            </Col>
                        </Row>
                        <Row className="m-0">
                            <Col className="px-2 my-3 text-center">
                                <Button variant="primary" data-test="submitButton" size="sm" className="w-100" onClick={this.handleSubmit}>Submit</Button>
                            </Col>
                        </Row>
                    </form>
                }
                {layout === 1 &&
                    <h4 data-test="form-submitted">Form has been submitted</h4>
                }
            </div>
        )
    }
}