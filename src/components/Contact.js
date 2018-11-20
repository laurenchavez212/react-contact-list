import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeContact } from "../redux/contactActions";
import { editContact } from "../redux/contactActions";
import Modal from "react-awesome-modal";
import { Button, FormGroup, Label, Input, Form } from 'reactstrap'
import { FaTrash } from 'react-icons/fa';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            editContact: {
                id: this.props.contact.id,
                name: this.props.contact.name,
                phone: this.props.contact.phone,
                email: this.props.contact.email,
                company: this.props.contact.company,
                address: this.props.contact.address,
                photo_url: this.props.contact.photo_url
            }
        }
    };

  openModal() {
    this.setState({
      visible: !this.state.visible
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

    handleEditChange = e => {
        this.setState({
            ...this.state,
            editContact: {
                ...this.state.editContact,
                [e.target.name]: e.target.value
            }
        });
    };

    handleEditSubmit = e => {
        e.preventDefault();
        return this.props.editContact(this.state.editContact);
    };

  render() {
    return <tr>
        <td>
          <i>{this.props.contact.name}</i> <br />
          <img src={this.props.contact.photo_url} alt="" />
        </td>
        <td>
          <a href={`tel:${this.props.contact.phone}`}>
            {this.props.contact.phone}
          </a>
        </td>
        <td>
          <a href={`mailto:${this.props.contact.email}`}>
            {this.props.contact.email}
          </a>
        </td>
        <td>{this.props.contact.company}</td>
        <td>{this.props.contact.address}</td>
        <td>
          <Button
            onClick={() => this.props.removeContact(this.props.contact.id)}
          >
            <FaTrash />
          </Button>
        </td>
        <td>
          <Button onClick={() => this.openModal()}>Edit</Button>
        </td>

        {/* Edit Contact Modal */}
        <Modal className="editModal" visible={this.state.visible} effect="fadeInRight" width="400" height="470" onClickAway={() => this.closeModal()}>
          <Form onSubmit={this.handleEditSubmit}>
            <FormGroup>
              <Label for="nameField">Name</Label>
              <Input id={this.props.contact.name} type="text" value={this.state.editContact.name} onChange={this.handleEditChange} name="name" required />
            </FormGroup>
            <FormGroup>
              <Label for="phoneField">Phone</Label>
              <Input id={this.props.contact.phone} type="integer" value={this.state.editContact.phone} onChange={this.handleEditChange} name="phone" required />
            </FormGroup>
            <FormGroup>
              <Label for="emailField">Email</Label>
              <Input id={this.props.contact.email} type="email" value={this.state.editContact.email} onChange={this.handleEditChange} name="email" />
            </FormGroup>
            <FormGroup>
              <Label for="companyField">Company</Label>
              <Input id={this.props.contact.company} type="text" value={this.state.editContact.company} onChange={this.handleEditChange} name="company" />
            </FormGroup>
            <FormGroup>
              <Label for="addressField">Address</Label>
              <Input id={this.props.contact.address} type="text" value={this.state.editContact.address} onChange={this.handleEditChange} name="address" />
            </FormGroup>
            <Button onClick={() => this.openModal()} type="submit">
              Submit
            </Button>
          </Form>
        </Modal>
      </tr>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeContact,
      editContact
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Contact);
