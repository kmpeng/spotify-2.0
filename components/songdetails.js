import { WebView } from "react-native-webview";

export default function SongDetails({ route }) {
  const { externalURL } = route.params
  
  return (
      <WebView source={{ uri: externalURL }} />
  );
}
