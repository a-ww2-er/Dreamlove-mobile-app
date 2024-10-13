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
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
// import { styles } from "@/styles/welcome/onboard";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Constants from "@/constants/constants";
import { commonStyles } from "@/styles/common/common.styles";
import { responsiveWidth } from "react-native-responsive-dimensions";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SignUpScreen = () => {
  const [isPasswordVisble, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  return (
    <LinearGradient
      colors={["#E7BBF0", "#F9F8FC", "#FFFDFF", "#F9E7F9", "#E7BBF0"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 0.45, 0.55, 0.8, 1]}
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
            Lets get started!
          </Text>
          <Text style={styles.headerSubtext}>
            Sign up to start finding partners.
          </Text>
        </View>
        <View id="Form" style={{ gap: 10, marginVertical: 40 }}>
          <View id="firstName" style={styles.inputsContainer}>
            <Text style={styles.inputIconContainer}>
            <Ionicons name="person-outline" size={24} color="#BB2E5F" />
            </Text>
            <TextInput
              style={styles.inputs}
              // keyboardType="email-address"
              placeholder="First name"
              // value={userInfo.email}
            />
          </View>
          <View id="lastName" style={styles.inputsContainer}>
            <Text style={styles.inputIconContainer}>
            <Ionicons name="person-outline" size={24} color="#BB2E5F" />
            </Text>
            <TextInput
              style={styles.inputs}
              // keyboardType="email-address"
              placeholder="Last name"
              // value={userInfo.email}
            />
          </View>
          <View id="gender" style={styles.inputsContainer}>
            <Text style={styles.inputIconContainer}>
            <MaterialCommunityIcons name="gender-male-female" size={24} color="#BB2E5F" />
            </Text>
            <TextInput
              style={styles.inputs}
              // keyboardType="email-address"
              placeholder="Gender"
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
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
      <View id="footer" style={styles.footer}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.text}>Continue with</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 24,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 34, height: 34 }}
              source={require("@/assets/icons/google.png")}
            />
            <Text style={{ fontSize: 17, marginRight: 23 }}>Google</Text>
          </View>
          <View
            style={{ backgroundColor: "white", padding: 8, borderRadius: 50 }}
          >
            <Image
              style={{ width: 34, height: 34 }}
              source={require("@/assets/icons/facebook.png")}
            />
          </View>
          <View
            style={{ backgroundColor: "white", padding: 8, borderRadius: 50 }}
          >
            <Image
              style={{ width: 34, height: 34 }}
              source={require("@/assets/icons/facebook.png")}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => router.push("/(routes)/auth/login")}
          >
            <Text style={{ color: "#D95886", textAlign: "center" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignUpScreen;

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
    alignItems: "center",
    paddingBottom: 20,
  },
});
