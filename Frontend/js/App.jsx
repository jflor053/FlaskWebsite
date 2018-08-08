import React from "react";
import {BrowserRouter as Router,Route,Link,IndexRoute} from 'react-router-dom';
import {browserHistory} from 'react-router';
import {Button} from 'mdbreact';
import LoginForm from "./Components/forms/LoginForm";
// command + Z hard reload of cache so Win + Z on keyboard 
class App extends React.Component {
  render () {
    return (
        <LoginForm> </LoginForm>
    );
    }
}
export default App;