import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from './firebase';

export default class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      text: '',
      sent: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.email,
      name: this.state.name,
      text: this.state.text,
    };
    // push the object item in Firebase
    itemsRef.push(item);
    // update the states
    this.setState({
      email: '',
      name: '',
      text: '',
    });
    setTimeout(
      this.setState({
        sent: 'your message has been sent',
      }),
      3000
    );
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className="CotactForm">
        {this.state.sent !== '' ? this.state.sent : ''}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                onChange={this.handleChange}
                value={this.state.name}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Your Content
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="text"
                id="body"
                required
                onChange={this.handleChange}
                value={this.state.text}
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
