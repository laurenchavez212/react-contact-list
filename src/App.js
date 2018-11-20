
import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import TopNav from './components/TopNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className="container">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;