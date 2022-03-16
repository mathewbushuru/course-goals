import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <Text>COURSE GOALS!</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter course goal..."
          style={{
            width: "80%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10,
          }}
        />
        <Button title="ADD" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
