import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const styles = {
  button: {
    margin: "15px"
  }
};

class FormUserDetails extends Component {
  state = { nothing: true };

  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleFieldChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Input user details" />
          <TextField
            hintText="Your first name"
            floatingLabelText="First name"
            onChange={handleFieldChange("firstName")}
            autoFocus={true}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Your last name"
            floatingLabelText="Last name"
            onChange={handleFieldChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Your email"
            floatingLabelText="Email"
            onChange={handleFieldChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
