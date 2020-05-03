import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from "firebase";
import Spacer from "../components/Spacer";

const firebaseConfig = {
  apiKey: "AIzaSyDlSTOGET4Zo7EVbNf2Dp7pqko_z4NfTL8",
  authDomain: "react-native-firebase-83666.firebaseapp.com",
  databaseURL: "https://react-native-firebase-83666.firebaseio.com",
  projectId: "react-native-firebase-83666",
  storageBucket: "react-native-firebase-83666.appspot.com",
};

firebase.initializeApp(firebaseConfig);

function AuthScreen({ navigation }) {
  // useState hooks to keep track of email and password entered
  // the parent component keeps track of the variables and passes the state to it's child components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => console.log(user));
    } catch (error) {
      console.group(error.toString());
    }
  };

  signUpUser = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
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
