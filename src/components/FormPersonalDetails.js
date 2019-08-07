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

class FormPersonalDetails extends Component {
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
    const { values, handleFieldChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Input personal details" />
          <TextField
            hintText="Your occupation"
            floatingLabelText="Occupation"
            onChange={handleFieldChange("occupation")}
            autoFocus={true}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Your city"
            floatingLabelText="City"
            onChange={handleFieldChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Your bio"
            floatingLabelText="Bio"
            onChange={handleFieldChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
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

export default FormPersonalDetails;
