import React from "react";
import { View } from "react-native";

import BaseForm from "../BaseForm";
import { Input, Button } from "../../Structure";

class Login extends BaseForm {
  submit = () => {
    this.props.onLogin(this.state.userIdentification, this.state.password);
  };

  componentWillReceiveProps(props) {
    if (props.labels.userIdentificationValue !== "") {
      this.setState({ userIdentification: props.labels.userIdentificationValue });
    }
  }

  renderResetPasswordLink = () => {
    return (
      <Button
        onPress={this.props.onResetPasswordClick}
        style={this.props.loginResetPasswordLinkStyle}
        textStyle={this.props.loginResetPasswordLinkTextStyle}
        text={this.props.labels.forgotPassword}
      />
    );
  };

  render() {
    return (
      <View style={this.props.loginFormWrapperStyle}>
        {this.renderLogo()}

        <View style={this.props.fieldsetWrapperStyle}>
          <Input
            icon={this.props.userIdentificationInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange("userIdentification")}
            label={this.props.labels.userIdentification}
            defaultValue={this.props.labels.userIdentificationValue}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
            keyboardType={"email-address"}
            testID={"Email"}
            accessibilityLabel={"Email"}
            accessible={true}
          />

          <Input
            icon={this.props.passwordInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange("password")}
            secureTextEntry
            label={this.props.labels.password}
            defaultValue={this.props.labels.passwordValue}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
            testID={"Password"}
            accessibilityLabel={"Password"}
            accessible={true}
          />
        </View>

        {this.props.haveResetPassword ? this.renderResetPasswordLink() : null}

        <Button
          onPress={this.submit}
          style={[this.props.baseButtonStyle, this.props.loginFormSubmitButtonStyle]}
          textStyle={[this.props.baseButtonTextStyle, this.props.loginFormSubmitButtonTextStyle]}
          text={this.props.labels.loginFormButton}
          testID={"Login button"}
          accessibilityLabel={"Login button"}
          accessible={true}
        />
      </View>
    );
  }
}

export default Login;
