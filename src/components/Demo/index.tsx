import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Demo = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "purple",
    borderRadius: 8,
  },
  text: { color: "white" },
});
