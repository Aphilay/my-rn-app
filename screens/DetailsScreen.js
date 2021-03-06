import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Auth" onPress={() => navigation.navigate("Auth")} />
      <Button title="Add animal" onPress={() => addAnimal()} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default DetailsScreen;
