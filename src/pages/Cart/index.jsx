import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card"
import Total from "../../components/Total"
import Details from "../../components/Details"
import Fonts from "./fonts"


export default function Cart() {

  return (
    <View style={styles.container}>
      <Fonts />
      <Navbar />
      <Card /> 
      <Total /> 
      <Details />
    </View>
    );
}