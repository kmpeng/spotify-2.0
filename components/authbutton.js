import { StyleSheet, Image, Text, Pressable } from "react-native";
import { Themes, Images } from "../assets/Themes";

export default function SpotifyAuthButton({getSpotifyAuth}) {
  return (
    <Pressable onPress={getSpotifyAuth} style={ ({pressed}) => [
      {
        backgroundColor: pressed ? "#158c3f" : Themes.colors.spotify,
      },
      styles.authButton,
    ] }>
      <Image source={ Images.spotify } style={ styles.spotifyLogo }/>
      <Text style={ styles.authText }>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  authButton: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 99999
  },
  spotifyLogo: {
    width: undefined,
    height: undefined,
    resizeMode: "contain",
    aspectRatio: 1,
  },
  authText: {
    color: Themes.colors.white,
    fontWeight: "bold",
    fontSize: 12,
    paddingLeft: 7
  }
});
