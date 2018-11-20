import React from 'react';
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
// Shows and Hides Add Contact Form onclick by changing local state
  onClick(e) {
    this.setState({ showAddContactForm: !this.state.showAddContactForm });
  }

  render() {
    return <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/">Contact List</NavbarBrand>
          <NavItem>
            {/* Shows add contact form onclick */}
            <a href="#" class="btn btn-info" onClick={this.onClick.bind(this)}><FaPlus /> Add Contact</a>
            </NavItem>
          </div>
        </Navbar>
      <div className="container">
        {/* when 'Add Contact' button is clicked the AddContactForm component will show*/}
          {this.state.showAddContactForm && <div>
              <AddContactForm />
          <br />
          {/* Close Form  */}
          <Button onClick={this.onClick.bind(this)}><FaAngleDoubleUp /></Button>
            </div>}
        </div>
      </div>;
  }
}

export default connect(null, {addContact})(TopNav)