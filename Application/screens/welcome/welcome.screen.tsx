import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
// import { styles } from "@/styles/welcome/onboard";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Constants from "@/constants/constants";

const WelcomeScreen = () => {
  //  padding:10
  return (
    <LinearGradient
      colors={["#E7BBF0", "#F9F8FC", "#FFFDFF", "#F9E7F9", "#E7BBF0"]}
      start={{ x: 0, y: 1 }} 
      end={{ x: 1, y: 0 }} 
      locations={[0, 0.45, 0.55, 0.8,1]}
      style={{
        flex: 1,
        padding: 12,
        justifyContent: "flex-end",
      }}
    >
      <View style={styles.firstContainer}>
        <Image source={require("@/assets/images/welcome-img.png")}  />
        {/* <Image source={require("")}
          /> */}
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              { fontFamily: "Raleway_700Bold", color: "black" },
            ]}
          >
            Discover Your Dream Partner
          </Text>
          <Text
            style={[
              styles.title2,
              { fontFamily: "Raleway_400Regular", color: "black" },
            ]}
          >
            Swipe right to like someone and if you both like each other? its a
            match
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
           onPress={()=>router.push("/(routes)/auth/login")}
          style={[styles.buttonContainer,{backgroundColor:"#8912C4"}]}
        >
          <Text style={[styles.buttonText,{color:"white"}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>router.push("/(routes)/auth/signup")}
          style={styles.buttonContainer}
        >
          <Text style={[styles.buttonText]}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign:"center",fontWeight:300,marginBottom:Constants.margins.bottom}}>Flirt, chat and meet people around you</Text>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    gap: 20,
    marginVertical:40
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  title2: {
    fontSize: 17,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    textAlign: "center",
    backgroundColor: "white", 
    width: "100%",
    marginBottom:15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    
  },
});
