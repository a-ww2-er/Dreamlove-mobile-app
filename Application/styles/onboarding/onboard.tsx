import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: wp("46%"),
    height: hp("21%"),
    borderRadius: 5,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: hp("4%"),
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,

    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,

    borderColor: "white",
    borderWidth: 1,
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 5,
    textAlign: "center",

    backgroundColor: "white", // Example background color
    width: wp("14%"),
    height: hp("7%"),
  },
});
