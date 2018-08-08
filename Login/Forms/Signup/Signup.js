import React from "react";
import { View } from "react-native";

import BaseForm from "../BaseForm";
import { Input, Button } from "../../Structure";

class Signup extends BaseForm {
  submit = () => {
    this.props.onSignup(this.state.username, this.state.password, this.state.passwordConfirm);
  };

  renderResetPasswordLink = () => {
    return (
      <Button
        onPress={this.props.onResetPasswordClick}
        style={this.props.signupResetPasswordLinkStyle}
        textStyle={this.props.signupResetPasswordLinkTextStyle}
        text={this.props.labels.forgotPassword}
      />
    );
  };

  render() {
    return (
      <View style={this.props.signupFormWrapperStyle}>
        {this.renderLogo()}

        <View style={this.props.fieldsetWrapperStyle}>
          <Input
            icon={this.props.userIdentificationInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange("username")}
            label={this.props.labels.userIdentification}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
            keyboardType={"email-address"}
            testID={"Email"}
            accessibilityLabel={"Email"}
            accessible={true}
          />

          <Input
            icon={this.props.userIdentificationInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange("firstName")}
            label={this.props.labels.firstName}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
            testID={"First Name"}
            accessibilityLabel={"First Name"}
            accessible={true}
          />

          <Input
            icon={this.props.userIdentificationInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange("lastName")}
            label={this.props.labels.lastName}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
            testID={"Last Name"}
            accessibilityLabel={"Last Name"}
            accessible={true}
          />

          <Input
            icon={this.props.passwordInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange("password")}
            secureTextEntry
            label={this.props.labels.password}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
            testID={"Password"}
            accessibilityLabel={"Password"}
            accessible={true}
          />

          <Input
            icon={this.props.passwordInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange("passwordConfirm")}
            secureTextEntry
            label={this.props.labels.passwordConfirm}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
            testID={"Password confirm"}
            accessibilityLabel={"Password confirm"}
            accessible={true}
          />
        </View>

        {this.props.haveResetPassword ? this.renderResetPasswordLink() : null}

        <Button
          onPress={this.submit}
          style={[this.props.baseButtonStyle, this.props.signupFormSubmitButtonStyle]}
          textStyle={[this.props.baseButtonTextStyle, this.props.signupFormSubmitButtonTextStyle]}
          text={this.props.labels.signupFormButton}
          testID={"Signup button"}
          accessibilityLabel={"Signup button"}
          accessible={true}
        />

        {this.props.haveLogin && (
          <Button
            onPress={this.props.onLoginClick}
            style={[this.props.baseButtonStyle, this.props.signupFormSubmitButtonStyle]}
            textStyle={[this.props.baseButtonTextStyle, this.props.signupFormSubmitButtonTextStyle]}
            text={this.props.labels.back}
            testID={"Show login button"}
            accessibilityLabel={"Show login button"}
            accessible={true}
          />
        )}
      </View>
    );
  }
}

export default Signup;
