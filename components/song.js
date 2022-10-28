import { StyleSheet, Image, Text, Pressable } from "react-native";
import { Themes, Images } from "../assets/Themes";

export default function Song({songTitle}) {
  console.log({songTitle})
  return (
    <Text style={styles.idk}>aaa {songTitle}</Text>
  );
}

const styles = StyleSheet.create({
  idk: {
    backgroundColor: "#FFFFFF",
    color: "#FFFFFF"
  }
});
