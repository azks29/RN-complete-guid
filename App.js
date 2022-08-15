import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  const [loaded] = useFonts({
    openSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <RootNavigator />;
}
