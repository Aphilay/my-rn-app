import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { db } from "../config";
const HomeScreen = ({ navigation }) => {
  //adding name in the names collection
  addName = (data) => {
    let key = db.database().ref("/names").push().key;
    db.database()
      .ref("/names")
      .child(key)
      .set({ firstname: "corey", lastname: "nguyen" });
  };

  //adding color in the colors collection
  addColor = () => {
    db.database().ref("/colors").push().set({
      first: "green",
      second: "orange",
    });
  };

  //read a color given the key
  readColor = () => {
    db.database()
      .ref("colors/-M6PgcAH72ic0L7XKOQL")
      .on("value", (snap) => {
        console.log(snap.val());
      });
  };

  //update a color in the colors collection given a key
  updateColor = () => {
    db.database()
      .ref("colors/" + "-M6PgcAH72ic0L7XKOQL")
      //.push()
      .update({
        first: "black",
        second: "orange",
      });
  };

  deleteColor = () => {
    //delete a child e.g. -M6Pe_dG_hoIKUf2jO6y
    db.database()
      .ref("colors/" + "-M6PgdDCy07d4W-m8Ml9")
      .remove();
    //setting to null is acceptable
    //.set(null);
  };
  return (
    <View style={styles.center}>
      <Text>Hello, </Text>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Add a name" onPress={() => this.addName()} />

      <Button title="Create a color" onPress={() => this.addColor()} />
      <Button title="Read a color" onPress={() => this.readColor()} />
      <Button title="Update a color" onPress={() => this.updateColor()} />
      <Button title="Delete a color" onPress={() => this.deleteColor()} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default HomeScreen;
