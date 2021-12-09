import React from "react";
import { View, Text, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Details() {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    return (
      <View style={styles.container}>
          <Text style={styles.text}>Detalhes 
             <Text style={styles.text1}>do Carrinho</Text>
          </Text>
              <FontAwesomeIcon icon={faAngleDown}  size={25} style={styles.icon}/>
      </View>
      );
  }