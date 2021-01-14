import React from 'react';
import Congrats from '../Congrats';
import GuessedWords from '../GuessedWords';
import { connect } from 'react-redux';
import { getSecretWord } from '../actions/index';
import Input from '../Input';

export class UnConnectedParentApp extends React.Component{
    componentDidMount() {
        this.props.getSecretWord();
    }
    render(){
        return(
            <div className="container">
                <h1>Jotto</h1>
                <div>The secret word is {this.props.secretWord}</div>
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { success, guessedWords, secretWord } = state;
    return { success, guessedWords, secretWord };
}
export default connect(mapStateToProps, { getSecretWord }) (UnConnectedParentApp);