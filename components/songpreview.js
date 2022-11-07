import { WebView } from "react-native-webview";

export default function SongPreview({ route }) {
  const { previewURL } = route.params

  return (
      <WebView source={{ uri: previewURL }} />
  );
}
