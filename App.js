import { StyleSheet, SafeAreaView, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { SpotifyAuthButton, SongList } from "./components";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = token ? <SongList tracks={tracks}/> : <SpotifyAuthButton getSpotifyAuth={getSpotifyAuth}/>
  // let contentDisplayed = token ? <SongList {...props} tracks={tracks}/> : <SpotifyAuthButton {...props} getSpotifyAuth={getSpotifyAuth}/>
  return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" options={{headerShown: false}}>
            {() => contentDisplayed}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
