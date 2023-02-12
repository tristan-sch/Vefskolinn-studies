import React from "react";
import { View } from "react-native";

export const Separator = ({ color = blue }) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: color,
        marginTop: 24,
        marginBottom: 24,
      }}
    />
  );
};
