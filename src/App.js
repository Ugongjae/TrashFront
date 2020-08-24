import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import {Home, Auth} from './pages'
import HeaderContainer from './containers/Base/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <Route exact path="/" component={Home}/>
      <Route path="/auth" component={Auth}/>
    </div>
  );
}

export default App;
