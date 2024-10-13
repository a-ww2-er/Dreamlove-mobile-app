import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { LinearGradient } from "expo-linear-gradient";
// import { styles } from "@/styles/welcome/onboard";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Constants from "@/constants/constants";
import { commonStyles } from "@/styles/common/common.styles";
import { responsiveWidth } from "react-native-responsive-dimensions";

const LoginScreen = () => {
  const [isPasswordVisble, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  return (
    <LinearGradient
      colors={["#E7BBF0", "#F9F8FC", "#FFFDFF", "#F9E7F9", "#E7BBF0"]}
      start={{ x: 0, y: 1 }} 
      end={{ x: 1, y: 0 }} 
      locations={[0, 0.45, 0.55, 0.8,1]}
      style={{
        flex: 1,
        padding: 12,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View id="Header" style={styles.headerContainer}>
          <Text
            style={[
              styles.headerText,
              { fontFamily: "Raleway_700Bold", color: "black" },
            ]}
          >
            Welcome Back!
          </Text>
          <Text style={styles.headerSubtext}>Resume your partner search </Text>
        </View>
        <View id="Form" style={{ gap: 10, marginVertical: 40 }}>
          <View id="Email" style={styles.inputsContainer}>
            <Text style={styles.inputIconContainer}>
              <FontAwesome name="at" size={22} color="#BB2E5F" />
            </Text>
            <TextInput
              style={styles.inputs}
              keyboardType="email-address"
              placeholder="Email"
              // value={userInfo.email}
            />
          </View>
          <View id="password" style={styles.inputsContainer}>
            <Text style={styles.inputIconContainer}>
              <MaterialIcons name="lock-outline" size={22} color="#BB2E5F" />
            </Text>
            <TextInput
              style={styles.inputs}
              keyboardType="email-address"
              placeholder="Password"
              // value={userInfo.email}
            />
          </View>

        <Text style={{textAlign:"right",paddingHorizontal:16,fontSize:14}}>Forgot password?</Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/(routes)/auth/signup")}
          style={[commonStyles.buttonContainer]}
        >
          <Text
            style={[
              commonStyles.buttonText,
              { fontFamily: "Raleway_700Bold", color: "white" },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View id="footer" style={styles.footer}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.text}>Continue with</Text>
          <View style={styles.line} />
        </View>
        <View style={{flexDirection:"row",gap:15,alignItems:"center",justifyContent:"center",marginVertical:24}}>
          <View style={{backgroundColor:"white",padding:8,alignItems:"center",justifyContent:"center",borderRadius:50,flexDirection:"row"}}>
            <Image style={{width:34,height:34}} source={require('@/assets/icons/google.png')}/><Text style={{fontSize:17,marginRight:23}}>Google</Text>
          </View>
          <View style={{backgroundColor:"white",padding:8,borderRadius:50}}>
           <Image style={{width:34,height:34}} source={require('@/assets/icons/facebook.png')}/>
          </View>
          <View style={{backgroundColor:"white",padding:8,borderRadius:50}}>
           <Image style={{width:34,height:34}} source={require('@/assets/icons/facebook.png')}/>
          </View>
        </View>
        <View style={{flexDirection:"row",gap:4}}>
        <Text>Not a member?</Text>
        <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}} onPress={()=>router.push("/(routes)/auth/signup")}><Text style={{color:"#D95886",textAlign:"center"}}>Register Now</Text></TouchableOpacity></View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 15,
    marginTop: Constants.margins.top,
    // alignItems: "center",
    gap: 5,
    // justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerSubtext: {
    fontSize: 15,
    // fontWeight: "300",
  },
  inputsContainer: {
    gap: 8,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    width: responsiveWidth(88),
    borderColor: "#bfbfbf",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  inputs: {
    height: "100%",
    width: "100%",
  },
  inputIconContainer: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FFDCF2",
    // width:"100%",
    // height:"100%"
  },
lineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#bfbfbf",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
  },
  footer: {
    justifyContent: "flex-end",
    alignItems:"center",
    paddingBottom:20
  },
});
