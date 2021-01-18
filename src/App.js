import React from 'react';
import './App.css';
// import Parent from './components/udemyComponents/jotto/parentComponent/Parent'
// import { Provider } from 'react-redux';
// import store from './components/udemyComponents/jotto/configureStore';

// import Congrats from './components/udemyComponents/jotto/Congrats';
// import GuessedWords from './components/udemyComponents/jotto/GuessedWords';
// import { getSecretWord } from './components/udemyComponents/jotto/actions/index';
// import { connect } from 'react-redux';
// import Input from './components/udemyComponents/jotto/Input';

import SampleForm from './components/practice/SampleForm';
import ApiCall from './components/apiCall/ApiCall';

// // import Sum from './components/sum/Sum';
// // import Text from './components/displayText/Text';
// // import Add from './components/add/Add';
// // import SampleCounter from './components/udemyComponents/counter/SampleCounter';


// export class UnconnectedApp extends React.Component {
//   componentDidMount() {
//     this.props.getSecretWord();
//   }

//   render() {
//     return (
//       <div className="container">
//         <h1>Jotto</h1>
//         <div>The secret word is {this.props.secretWord}</div>
//         <Congrats success={this.props.success} />
//         <Input />
//         <GuessedWords guessedWords={this.props.guessedWords} />

//         <SampleForm /> 
//         {/* <Sum /> */}
//         {/* <Text label='display something' /> */}
//         {/* <Add x="1" y="2" /> */}
//         {/* <SampleCounter /> */}

//         {/* Hello */}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   const { success, guessedWords, secretWord } = state;
//   return { success, guessedWords, secretWord };
// }

// export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);

function App() {
  return (
    <div>
      {/* <Provider store={store}>
        <Parent />
      </Provider> */}
      <SampleForm />
      <ApiCall />
    </div>
  );
}
export default App;
