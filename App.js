import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredtext) => {
    setEnteredGoal(enteredtext);
  };

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <Text>COURSE GOALS!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter course goal..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.list}>
            <Text >{goal}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    // borderWidth: 1,
    padding: 10,
  },
  list: {
    padding: 10,
    marginVertical:5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
