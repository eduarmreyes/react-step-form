import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Success extends Component {
  state = { nothing: true };

  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success all your details" />
          <h1>Thank you for your submission</h1>
          <p>We will be emailing you soon</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
