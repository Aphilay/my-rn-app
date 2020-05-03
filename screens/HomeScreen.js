import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const HomeScreen = ({ navigation, props }) => {
  console.log(props);
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
    </View>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default HomeScreen;
