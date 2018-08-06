import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="name" name="name" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        </Form>
        );
    }
}

export default NavBar;