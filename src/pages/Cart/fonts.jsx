import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_300Light, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from "@expo-google-fonts/open-sans";

 export default () =>{
    let [fontsLoaded] = useFonts({
      OpenSansLight: OpenSans_300Light,
      OpenSans: OpenSans_400Regular,
      OpenSansSemibold: OpenSans_600SemiBold,
      OpenSansBold: OpenSans_700Bold,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>

      );
    }
  }