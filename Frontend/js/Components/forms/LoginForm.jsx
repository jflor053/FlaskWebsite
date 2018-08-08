import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button,Form,FormGroup,Label,Input } from 'reactstrap';
class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      description: '',
      start_time: '',
      end_time: '',
      day_week: '',
      date_event: '',
      event_location:'',
    };
  }
   submitForm(){
    /*alert(this.state.name)
    alert(this.state.description)
    alert(this.state.start_time)
    alert(this.state.end_time)
    alert(this.state.day_week)
    alert(this.state.date_event)
    alert(this.state.event_location)*/

    fetch(' https://agile-headland-18478.herokuapp.com/clubs/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        time_start: this.state.start_time,
        time_end : this.state.end_time,
        date_week: this.state.day_week,
        event_date: this.state.date_event,
        location : this.state.event_location,
      })
    })
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        alert(data.message)
        alert(data.secret_id)
      })
  }
  updateInput(event){
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <Form>
      <FormGroup style={{margin: '20px', width:'250px'}}>
        <Label>Name</Label>
        <Input name= "name" type="text" value = {this.state.name} onChange= {this.updateInput.bind(this)} placeholder="" />
      </FormGroup>
      <FormGroup style={{margin: '20px', width:'250px'}}>
        <Label>Description</Label>
        <Input name= "description" type="text" value = {this.state.description} onChange= {this.updateInput.bind(this)} placeholder="" />
      </FormGroup>
      <FormGroup style={{margin: '20px', width:'250px'}}>
        <Label>Start time</Label>
        <Input name= "start_time" type="text" value = {this.state.start_time} onChange= {this.updateInput.bind(this)} placeholder="" />
      </FormGroup>
      <FormGroup style={{margin: '20px', width:'250px'}}>
        <Label>End time</Label>
        <Input name= "end_time" type="text" value = {this.state.end_time} onChange= {this.updateInput.bind(this)} placeholder="" />
      </FormGroup>
      <FormGroup style={{margin: '20px', width:'250px'}}>
        <Label>Day of the week</Label>
        <Input name= "day_week" type="text" value = {this.state.day_week} onChange= {this.updateInput.bind(this)} placeholder="" />
      </FormGroup>
      <FormGroup style={{margin: '20px', width:'250px'}}>
        <Label>Date of the event</Label>
        <Input name= "date_event" type="text" value = {this.state.date_event} onChange= {this.updateInput.bind(this)} placeholder="" />
      </FormGroup>
      <FormGroup style={{margin: '20px', width:'250px'}}>
        <Label>Event Location</Label>
        <Input name= "event_location" type="text" value = {this.state.event_location} onChange= {this.updateInput.bind(this)} placeholder="" />
      </FormGroup>
      <Button onClick = {this.submitForm.bind(this)}style={{margin:'20px'}}color="danger" > Submit </Button>
      </Form>

    
    )
  }
}
export default LoginForm;