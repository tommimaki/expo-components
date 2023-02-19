import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [text, setText] = useState("");

  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
        placeholder="Type something to hear"
      />
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
