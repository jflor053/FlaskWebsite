import React from "react";
import {BrowserRouter as Router,Route,Link,IndexRoute} from 'react-router-dom';
import {browserHistory} from 'react-router';
import HomePage from './Components/pages/HomePage';
import LoginPage from './Components/pages/LoginPage';
import {Button} from 'mdbreact';
import NavBar from '../js/Components/NavBar';
// command + Z hard reload of cache so Win + Z on keyboard 
class App extends React.Component {
  render () {
    return (
        <NavBar> </NavBar>
      
    );
    }
}
export default App;