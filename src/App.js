import './App.css';
import Parent from './components/udemyComponents/jotto/parentComponent/Parent'
import { Provider } from 'react-redux';
import store from './components/udemyComponents/jotto/configureStore';
// import Congrats from './components/udemyComponents/jotto/Congrats'
// import GuessedWords from './components/udemyComponents/jotto/GuessedWords';
// import SampleForm from './components/practice/SampleForm';

// import Sum from './components/sum/Sum';
// import Text from './components/displayText/Text';
// import Add from './components/add/Add';
// import SampleCounter from './components/udemyComponents/counter/SampleCounter';


function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Parent />
      </Provider>
      {/* <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{guessedWord: "train", letterMatchCount: 3}]} /> */}

      {/* <SampleForm /> */}
      {/* <Sum /> */}
      {/* <Text label='display something' /> */}
      {/* <Add x="1" y="2" /> */}
      {/* <SampleCounter /> */}

      {/* Hello */}
    </div>
  );
}

export default App;
