import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Theme from "@/constants/theme";
import {
  responsiveWidth,
  responsiveHeight,
}from "react-native-responsive-dimensions"
export const commonStyles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  // buttonContainer: {
  //   // position: "absolute",
  //   // bottom: 30,
  //   // right: 30,
  // },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    textAlign: "center",
    backgroundColor:Theme.colors.primaryBtn,
    width: responsiveWidth(88),
    marginBottom:15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    
  },
})