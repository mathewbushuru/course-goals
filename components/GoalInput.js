import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredtext) => {
    setEnteredGoal(enteredtext);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter course goal..."
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});


// FLEXBOX
// - automatically organizes in column(flex-direction column)
// - To make items appear in row, change flex-direction to row (row,row-reverse,column,column-reverse)
// - row reverse has main axis from right to left instead
// - justifyContent to organize items along main axis (center,flex-end,flex-start,space-around,space-between,space-evenly,stretch)
// - alignItems to organize content along cross-axis (eg top-bottom if flex-direction is row) (stretch(default), center)
// - removing with and height on child elements make them take only as much space as they need
// - Adding height to flexbox parent element adds this height to all child components
// - To fully control how much space a child takes, add flex property to child element
// - if flex =1 , that child takes as muh space as it can to leave just enought for the others
// - flex 1 on multiple child containers make both take as much (but distributed evenly) after the others take just as much
// Flex numbers are relative, eg flex=3, flex =2, then in a space of 5, three is bigger space