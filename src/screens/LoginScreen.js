import {
  StyleSheet,
  Text,
  Image,
  View,
  KeyboardAvoidingView
} from "react-native";
import React, { Component } from "react";
import LoginForm from "../components/LoginForm";

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/icons/logo.png")}
          />
          <Text style={styles.title}>Abuelometro</Text>
        </View>
        <View>
          <LoginForm navigation={this.props.navigation} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    color: "#FFF",
    marginTop: 10,
    width: 300,
    textAlign: "center",
    opacity: 0.9,
    fontSize: 50
  }
});
