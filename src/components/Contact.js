import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeContact } from '../redux/contactActions'
import { editContact } from '../redux/contactActions'
import { Button } from 'reactstrap';
import EditContact from './EditContact'

class Contact extends React.Component {

    state = {
        showForm: false
    }

    onClick(e) {
        e.preventDefault();
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        return (

            <tr>
                <td>{this.props.contact.name} <img src={this.props.contact.photo_url} alt=""></img> </td>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.email}</td>
                <td>{this.props.contact.company}</td>
                <td>{this.props.contact.address}</td>
                <td>
                    <Button onClick={() => this.props.removeContact(this.props.contact.id)}>Delete</Button>
                </td>
                <td>
                    <Button onClick={this.onClick.bind(this)}>Edit</Button>
                </td>
                <tr className="container">
                    {this.state.showForm && < EditContact />}
                </tr>
            </tr>

        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeContact,
    editContact
}, dispatch)

export default connect(null, mapDispatchToProps)(Contact)