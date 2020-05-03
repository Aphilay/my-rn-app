import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { db } from "../config";

function AuthScreen({ navigation }) {
  // useState hooks to keep track of email and password entered
  // the parent component keeps track of the variables and passes the state to it's child components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = (email, password) => {
    try {
      db.auth()
        .signInWithEmailAndPassword(email, password)
        //.then((user) => console.log(user))
        .then(() => console.log("logged in"))
        .then(() => navigation.navigate("Home"));
    } catch (error) {
      console.group(error.toString());
    }
  };

  signUpUser = (email, password) => {
    try {
      db.auth().createUserWithEmailAndPassword(email, password);
      console.log("signed up user");
    } catch (error) {
      console.log(error.toString());
    }
  };

  //functions to update state
  updateEmail = (email) => {
    setEmail(email);
  };

  updatePassword = (password) => {
    setPassword(password);
  };

  return (
    <View style={styles.container}>
      <Input value={email} onChangeText={(newEmail) => updateEmail(newEmail)} />
      <Spacer />
      <Input
        value={password}
        onChangeText={(newPassword) => updatePassword(newPassword)}
      />
      <Spacer />
      <Button title="Login" onPress={() => this.loginUser(email, password)} />
      <Spacer />
      <Button
        title="Sign up"
        onPress={() => this.signUpUser(email, password)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#888",
    fontSize: 18,
  },
});

export default AuthScreen;
