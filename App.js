import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { SpotifyAuthButton, SongList, SongDetails, SongPreview } from "./components";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = token ? <SongList tracks={tracks}/> : <SpotifyAuthButton getSpotifyAuth={getSpotifyAuth}/>
  const navTheme = {
    dark: true,
    colors: {
      primary: Themes.colors.spotify,
      background: Themes.colors.background,
      card: Themes.colors.background,
      text: Themes.colors.white,
      border: Themes.colors.background,
      notification: Themes.colors.spotify
    }
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{headerBackTitle: "Back"}}>
        <Stack.Screen name="Main" options={{headerShown: false}}>
          {() => contentDisplayed}
        </Stack.Screen>
        <Stack.Screen name="Details" component={SongDetails} options={{title: 'Song details'}} />
        <Stack.Screen name="Preview" component={SongPreview} options={{title: 'Song preview'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
