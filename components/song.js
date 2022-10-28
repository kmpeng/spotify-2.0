import { View, StyleSheet, Image, Text } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";

export default function Song({ index, imageURL, songTitle, songArtists, albumName,  duration}) {
  let artists = ""
  for (let [i, artist] of songArtists.entries()) {
    if (i !== 0) {
      artists += ", "
    }
    artists += artist.name
  };

  duration = millisToMinutesAndSeconds(duration);

  return (
    <View style={styles.songList}>
      <Text style={styles.index}>{index}</Text>
      <Image style={styles.albumCover} source={{uri: imageURL}}/>
      <View style={styles.titleArtists}>
        <Text numberOfLines={1} style={styles.songTitle}>{songTitle}</Text>
        <Text numberOfLines={1} style={styles.artists}>{artists}</Text>
      </View>
      <Text numberOfLines={1} style={styles.albumName}>{albumName}</Text>
      <Text style={styles.duration}>{duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  songList: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7
  },
  index: {
    color: Themes.colors.gray,
    width: "6%",
  },
  albumCover: {
    height: undefined,
    width: "17%",
    aspectRatio: 1,
  },
  titleArtists: {
    width: "40%",
    paddingLeft: 12,
    paddingRight: 10
  },
  songTitle: {
    color: Themes.colors.white,
    fontWeight: "600",
  },
  artists: {
    color: Themes.colors.gray,
    fontWeight: "600",
  },
  albumName: {
    color: Themes.colors.white,
    width: "27%",
    fontWeight: "600",
    paddingRight: 7
  },
  duration: {
    width: "10%",
    color: Themes.colors.white,
    paddingRight: 7
  }
});
