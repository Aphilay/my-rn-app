import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>SettingsScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});
export default SettingsScreen;
