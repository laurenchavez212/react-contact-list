import React from "react";
import { Button, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { addContact } from "../redux/contactActions";

class AddContactForm extends React.Component {
  state = {
    showAddContactForm: true,
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    photo_url:
      "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg"
  };

// Renders the Add Conatct Form OnClick
  onClick(e) {
    this.setState({ showAddContactForm: !this.state.showAddContactForm });
  }
// On Form submit alert will confirm contact add and set 'addContact' action to new state
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    alert("New Contact Added!");
  };

  render() {
      return (
        // Form onSubmit will preform handleSubmit action above
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          id="nameField"
                  placeholder="Name..."
                //   When typing state will be updated 
          onChange={e => this.setState({ name: e.target.value })}
          autoFocus
        />
        <Input
          type="text"
          id="phoneField"
          placeholder="Phone..."
          onChange={e => this.setState({ phone: e.target.value })}
        />
        <Input
          type="email"
          id="emailField"
          placeholder="Email..."
          onChange={e => this.setState({ email: e.target.value })}
        />
        <Input
          type="text"
          id="companyField"
          placeholder="Company..."
          onChange={e => this.setState({ company: e.target.value })}
        />
        <Input
          type="text"
          id="addressField"
          placeholder="Address..."
          onChange={e => this.setState({ address: e.target.value })}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}



export default connect(null,{addContact})(AddContactForm);
