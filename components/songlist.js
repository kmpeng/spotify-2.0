import { StyleSheet, Image, Text, FlatList, View, SafeAreaView } from "react-native";
import { Themes, Images } from "../assets/Themes";
import Song from "./song.js"

export default function SongList({ tracks }) {
  const renderSong = ({ item }) => (
    <Song
      imageURL={item.album.images[0].url}
      songTitle={item.name}
      songArtists={item.artists}
      albumName={item.album.name}
      duration={item.duration_ms}
      externalURL={item.external_urls.spotify}
      previewURL={item.preview_url}
      />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image source={Images.spotify} style={styles.spotifyLogo}/>
        <Text style={styles.topText}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={(item) => renderSong(item)}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10
  },
  spotifyLogo: {
    width: undefined,
    height: undefined,
    resizeMode: "contain",
    aspectRatio: 1,
  },
  topText: {
    color: Themes.colors.white,
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 7
  }
});
