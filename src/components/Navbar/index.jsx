import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

  return (
    <View style={styles.navbar}>
       <FontAwesomeIcon icon={faArrowLeft}  style={styles.icon}/>
        <Text style={styles.text}>CARRINHO DE COMPRAS</Text>
        <FontAwesomeIcon icon={faTrashAlt}  style={styles.icon}/>
    </View>
    );
}