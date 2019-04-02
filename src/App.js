import React, { useContext, useEffect } from 'react';
import Cookies from 'js-cookie'
import { Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Test from './components/Contexts/test'
import './App.css';

const App = (props) => {

  const test = useContext(Test)

  const main = () => {
    if (Cookies.get('bigboicred') !== undefined)
    test.value = Cookies.get('bigboicred')
    Cookies.remove('bigboicred')
    return (
      test.value
    )
  }

  useEffect(() => {
    if (Cookies.get('bigboicred') !== null) {
      test.value = Cookies.get('bigboicred')
    }
  }, [])

  return (
    <div className="App">
      <Route path ='/' exact component={Landing} />
      <Route path='/main' exact component={main} />
      <Route path='/recover' exact component={main} />
    </div>
  );
}

export default App;
