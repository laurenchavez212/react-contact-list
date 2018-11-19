import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { addContact } from '../redux/contactActions'
import { bindActionCreators } from 'redux'

class AddContactForm extends React.Component {
    state = {
        id: 0,
        name: '',
        phone: '',
        email: '',
        company: '',
        address: '',
        photo_url: "http://placehold.it/100x100"
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addContact(this.state)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="nameField">Name</Label>
                    <Input type="text" id="nameField" placeholder="name" onChange={e => this.setState({ name: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="phoneField">Phone</Label>
                    <Input type="text" id="phoneField" placeholder="phone" onChange={e => this.setState({ phone: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="emailField">Email</Label>
                    <Input type="email" id="emailField" placeholder="email" onChange={e => this.setState({ email: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="companyField">Company</Label>
                    <Input type="text" id="companyField" placeholder="company" onChange={e => this.setState({ company: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="addressField">Address</Label>
                    <Input type="text" id="addressField" placeholder="address" onChange={e => this.setState({ address: e.target.value })} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addContact
}, dispatch)

export default connect(null, mapDispatchToProps)(AddContactForm)