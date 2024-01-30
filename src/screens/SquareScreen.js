import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrese={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter 
      onIncrese={() => setBlue(blue + 1)}
      onDecrease={() => setBlue(blue - 1)}
      color="Blue" 
      />
      <ColorCounter 
      onIncrese={() => setGreen(green + 1)}
      onDecrease={() => setGreen(green - 1)}
      color="Green" 
      />
        <View
            style={{
            height: 150,
            width: 150,
            backgroundColor: `rgb(${red},${green},${blue})`,
            }}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;