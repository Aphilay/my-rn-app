import React from "react";
import { StyleSheet, Text, View } from "react-native";

function LogInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
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

export default LogInScreen;
