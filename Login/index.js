import PropTypes from "prop-types";
import React, { Component } from "react";
import DefaultStyles from "./DefaultStyles";
import defaultLabels from "./constants/defaultLabels";

import { LoginForm, SignupForm, ResetPasswordForm } from "./Forms";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { activeForm: "login" };
  }

  changeToResetPasswordForm = () => {
    this.setState({ activeForm: "resetPassword" });
  };

  changeToLoginForm = () => {
    this.setState({ activeForm: "login" });
  };

  changeToSignupForm = () => {
    this.setState({ activeForm: "signup" });
  };

  getLabels = () => {
    return {
      ...defaultLabels,
      ...this.props.labels
    };
  };

  onLogin = (userIdentification, password) => {
    this.props.onLogin(userIdentification, password);
  };

  onResetPassword = userIdentification => {
    this.props.onResetPassword(userIdentification);
    this.changeToLoginForm();
  };

  renderResetPassword = () => {
    return (
      <ResetPasswordForm
        {...this.props}
        labels={this.getLabels()}
        onBackClick={this.changeToLoginForm}
        onResetPassword={this.onResetPassword}
        showLogo={this.props.showLogoOnResetPassword}
      />
    );
  };

  renderLoginForm = () => {
    return (
      <LoginForm
        {...this.props}
        haveResetPassword={!!this.props.onResetPassword}
        haveSignup={!!this.props.onSignup}
        labels={this.getLabels()}
        onResetPasswordClick={this.changeToResetPasswordForm}
        onSignupClick={this.changeToSignupForm}
        onLogin={this.onLogin}
        showLogo={this.props.showLogoOnLogin}
      />
    );
  };

  renderSignupForm = () => {
    return (
      <SignupForm
        {...this.props}
        haveLogin={!!this.props.onLogin}
        labels={this.getLabels()}
        onLoginClick={this.changeToLoginForm}
        onLogin={this.onLogin}
        showLogo={this.props.showLogoOnLogin}
      />
    );
  };

  render() {
    if (this.state.activeForm === "resetPassword" && this.props.onResetPassword) {
      return this.renderResetPassword();
    } else if (this.state.activeForm === "signup") {
      return this.renderSignupForm();
    }

    return this.renderLoginForm();
  }
}

Login.propTypes = {
  labels: PropTypes.object,
  logoImage: PropTypes.any,
  onLogin: PropTypes.func.isRequired,
  onResetPassword: PropTypes.func,
  onSignup: PropTypes.func,
  passwordInputIcon: PropTypes.any,
  resetPasswordHeaderRenderer: PropTypes.func,
  showLogoOnLogin: PropTypes.bool,
  showLogoOnResetPassword: PropTypes.bool,
  userIdentificationInputIcon: PropTypes.any,
  inputPlaceholderTextColor: PropTypes.string,

  backButtonStyle: PropTypes.any,
  backButtonTextStyle: PropTypes.any,
  baseButtonStyle: PropTypes.any,
  baseButtonTextStyle: PropTypes.any,
  inputIconStyle: PropTypes.any,
  loginResetPasswordLinkStyle: PropTypes.any,
  loginResetPasswordLinkTextStyle: PropTypes.any,
  fieldsetWrapperStyle: PropTypes.any,
  inputWrapperStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  loginFormSubmitButtonStyle: PropTypes.any,
  loginFormSubmitButtonTextStyle: PropTypes.any,
  loginFormWrapperStyle: PropTypes.any,
  logoStyle: PropTypes.any,
  resetPasswordFormWrapperStyle: PropTypes.any,
  resetPasswordFormSubmitButtonTextStyle: PropTypes.any,
  resetPasswordFormSubmitButtonStyle: PropTypes.any
};

export default Login;
