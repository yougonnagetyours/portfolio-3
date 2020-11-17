import React, { Component } from 'react';
import "./App.css";

class App extends Component {

  state = {
    username: ' ',
    email: '',
    userpassword: '',
    checkbox: false,

    errors: {
      username: false,
      email: false,
      userpassword: false,
      checkbox: false
    }
  }

  messages = {
    name_invalid: 'Imię nie może zawierać spacji!',
    mail_invalid: 'Niepoprawny odres e-mail!',
    password_invalid: 'Hasło musi zawierać conajmniej 8 znaków!',
    checked_invalid: 'Musisz wyrazić zgodę'
  }

  handleInputChange = e => {
    const name = e.target.name;
    if (e.target.type === 'text' || e.target.type === 'email' || e.target.type === 'password') {
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    } else if (e.target.type === 'checkbox') {
      const checked = e.target.checked
      console.log('checked')
      this.setState({
        [name]: checked
      })
    }
  }
  handleSubmit = e => {
    e.preventDefault();

    const validation = this.formValidation()
    if (validation.correct) {
      this.setState({
        username: '',
        email: '',
        userpassword: '',
        checkbox: false,
        message: 'Formularz wysłano!',

        errors: {
          username: false,
          email: false,
          userpassword: false,
          checkbox: false
        }
      })
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          userpassword: !validation.userpassword,
          checkbox: !validation.checkbox
        }
      })
    }
  }

  formValidation = () => {
    let username = false
    let email = false
    let userpassword = false
    let checkbox = false
    let correct = false

    if (this.state.username.indexOf(' ') === -1) {
      username = true
    }
    if (this.state.email.indexOf('@') !== -1) {
      email = true
    }
    if (this.state.userpassword.length > 8) {
      userpassword = true
    }
    if (this.state.checkbox === true) {
      checkbox = true
    }
    if (username && email && userpassword && checkbox) {
      correct = true
    }
    return ({
      username,
      email,
      userpassword,
      checkbox,
      correct,
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="name">
            Twoje imię
            <input
              type="text"
              name="username"
              id="name"
              value={this.state.username}
              onChange={this.handleInputChange} />
            {this.state.errors.username && <p>{this.messages.name_invalid}</p>}
          </label>
          <label htmlFor="email">
            Twój email
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInputChange} noValidate />
            {this.state.errors.email && <p>{this.messages.mail_invalid}</p>}
          </label>
          <label htmlFor="password">
            Twoje hasło
            <input
              type="password"
              name="userpassword"
              id="password"
              value={this.state.userpassword}
              onChange={this.handleInputChange} />
            {this.state.errors.userpassword && <p>{this.messages.password_invalid}</p>}
          </label>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={this.state.checkbox}
              onChange={this.handleInputChange} />
            Wyrażam zgodę na zgodę
            {this.state.errors.checkbox && <p>{this.messages.checked_invalid}</p>}</label>
          <button>Wyślij</button>

        </form>
      </div>
    );
  }
}

export default App;
