import React from "react";
import { Button, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { addContact } from "../redux/contactActions";
import { bindActionCreators } from "redux";

class AddContactForm extends React.Component {
  state = {
    showAddContactForm: true,
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    photo_url: "http://placehold.it/100x100"
  };

  onClick(e) {
    this.setState({ showAddContactForm: !this.state.showAddContactForm });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    alert("New Contact Added!");
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          id="nameField"
          placeholder="Name..."
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addContact
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(AddContactForm);
