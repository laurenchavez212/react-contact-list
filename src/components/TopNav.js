import React from 'react';
import { bindActionCreators } from 'redux';
import { addContact } from '../redux/contactActions';
import { connect } from 'react-redux';
import AddContactForm from './AddContactForm'
import { FaPlus, FaAngleDoubleUp } from "react-icons/fa";

import {
    Navbar,
    NavbarBrand,
    NavItem,
    Button
} from 'reactstrap';

class TopNav extends React.Component {
  state = {
    showAddContactForm: false
  };

  onClick(e) {
    this.setState({ showAddContactForm: !this.state.showAddContactForm });
  }

  render() {
    return <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/">Contact List</NavbarBrand>
            <NavItem>
            <a href="#" class="btn btn-info" onClick={this.onClick.bind(this)}><FaPlus /> Add Contact</a>
            </NavItem>
          </div>
        </Navbar>
        <div className="container">
          {this.state.showAddContactForm && <div>
              <AddContactForm />
              <br />
          <Button onClick={this.onClick.bind(this)}><FaAngleDoubleUp /></Button>
            </div>}
        </div>
      </div>;
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    addContact
}, dispatch)

export default connect(null, mapDispatchToProps)(TopNav)