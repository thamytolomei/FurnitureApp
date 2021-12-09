import React from "react";
import { View } from 'react-native';
import Cart from "./src/pages/Cart";
import { styles } from "./src/pages/Cart/styles";

export default function App() {

  return(
    <View style={styles.container}>
      <Cart />
    </View>
  )
}