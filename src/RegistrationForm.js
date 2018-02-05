import React, {Component} from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`form is submitted. Email value is ${this.state.email}`);
  }

  handleEmailChange = (event) => {
    console.log('email was changed', event.target.value);
    this.setState({email: event.target.value}); //без изменения setState в input ничего не будет отображаться
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default RegistrationForm;
