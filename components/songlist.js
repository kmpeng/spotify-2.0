import { StyleSheet, Image, Text, FlatList, View } from "react-native";
import { Themes, Images } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import { Song } from "./song.js"

export default function SongList({tracks}) {
  const renderSong = ({ item }) => (
    <Song
      songTitle={item.name}
    />
  );
  // for (let track of tracks.tracks) {
  //   console.log("Album image url: " + track.album.images[0].url)
  //   console.log("Song title: " + track.name)
  //   let artists = ""
  //   for (let artist of track.artists) {
  //     artists += artist.name + ", "
  //   }
  //   console.log("Song artists: " + artists)
  //   console.log("Album name: " + track.album.name)
  //   console.log("Duration: " + millisToMinutesAndSeconds(track.duration_ms))
  // }
  return (
    <View>
      <View style={styles.topBar}>
        <Image source={Images.spotify} style={styles.spotifyLogo}/>
        <Text style={styles.topText}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({item}) => renderSong(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
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
  },
});
