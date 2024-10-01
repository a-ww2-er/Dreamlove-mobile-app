import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboard";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";


const OnBoardingScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#E5ECF9", "#E5ECF9","#E5ECF9","#E5ECF9","#FD4DA860"]}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.firstContainer}>
            <Image source={require("@/assets/logo1.jpg")} style={styles.image} />
          {/* <Image source={require("")}
            /> */}
          <View style={styles.titleContainer}>
          
            <Text style={[styles.title, { fontFamily: "Raleway_700Bold",color:"#9E4244" }]}>
              DreamLove
            </Text>
          </View>
       
      </View>
      <TouchableOpacity
      onPress={()=>router.push("/(routes)/welcome")}
      style={styles.buttonContainer}>
        <View style={[styles.buttonText]}>
        <AntDesign name="arrowright" size={24} color="#9E4244" />
            </View>
       </TouchableOpacity>
    </LinearGradient>
  );
};

export default OnBoardingScreen;
