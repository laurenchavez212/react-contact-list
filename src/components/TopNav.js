import React from 'react';
import { bindActionCreators } from 'redux';
import { addContact } from '../redux/contactActions';
import { connect } from 'react-redux';
import AddContactForm from './AddContactForm'

import {
    Navbar,
    NavbarBrand,
    NavItem,
    Button
} from 'reactstrap';

class TopNav extends React.Component {
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
            <div>
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <NavbarBrand href="/">
                            Contact List
            </NavbarBrand>
                        <NavItem>
                            <Button onClick={this.onClick.bind(this)}>Add Contact</Button>
                        </NavItem>
                    </div>
                </Navbar>
                <div className="container">
                    {this.state.showForm && < AddContactForm />}
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    addContact
}, dispatch)

export default connect(null, mapDispatchToProps)(TopNav)