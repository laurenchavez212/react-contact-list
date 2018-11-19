import React from 'react'

class Contact extends React.Component {

    render() {
        return (
            
// Individual Contact Information
            <tr>
                <td>{this.props.contact.name} <img src={this.props.contact.photo_url} alt="Contact Photo"></img></td>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.email}</td>
                <td>{this.props.contact.address}</td>
            </tr>

        )
    }

}


export default Contact;