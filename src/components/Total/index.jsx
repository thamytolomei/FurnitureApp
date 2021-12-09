import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Total() {

    return (
      <View style={styles.container}>
          <Text style={styles.total}>Preço Total:</Text>
          <Text style={styles.total1}>R$416.00</Text>
      </View>
      );
  }