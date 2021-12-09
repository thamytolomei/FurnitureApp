import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';


export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={require('./assets/cadeira1.png')} style={styles.imagem} />
        <Text style={styles.textcontainer}>
          <Text style={styles.textbg}>
            <Text style={styles.text}>Harris Swoop Dining Chair</Text>
          </Text>
            <Text style={styles.text1}>R$129.00</Text>
            <Text style={styles.text2}>x 1</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <Image source={require('./assets/cadeira2.png')} style={styles.imagem} />
        <Text style={styles.textcontainer}>
        <Text style={styles.textbg2}>
            <Text style={styles.text}>Venice Armchair</Text>
        </Text>
            <Text style={styles.text1}>R$158.00</Text>
            <Text style={styles.text2}>x 2</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <Image source={require('./assets/cadeira3.png')} style={styles.imagem} />
        <Text style={styles.textcontainer}>
        <Text style={styles.textbg1}>
            <Text style={styles.text}>Dahlia Dining Chair</Text>
        </Text>
            <Text style={styles.text1}>R$129.00</Text>
            <Text style={styles.text2}>x 1</Text>
        </Text>
      </View>
    </View>
  );
}
