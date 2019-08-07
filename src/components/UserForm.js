import React, { Component } from "react";

import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleFieldChange = input => e => {
    this.setState({ [input]: e.currentTarget.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleFieldChange={this.handleFieldChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleFieldChange={this.handleFieldChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            values={values}
            previousStep={this.previousStep}
            nextStep={this.nextStep}
          />
        );
      case 4:
        return <h2>Success</h2>;
      default:
        return <h5>Default</h5>;
    }
  }
}

export default UserForm;
