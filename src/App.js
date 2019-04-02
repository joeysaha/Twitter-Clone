import React, { useContext } from 'react';
import { Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Test from './contexts/test'
import './App.css';

const main = () => {

  const test = useContext(Test)

  const lol = test.value
  return (
    lol
  )
}

const App = (props) => {
    return (
      <div className="App">
        <Route path ='/' exact component={Landing} />
        <Route path='/main' exact component={main} />
      </div>
    );
}

export default App;
