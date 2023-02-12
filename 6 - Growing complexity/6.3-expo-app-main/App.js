import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Separator } from "./components/Separator";
import image from "./assets/unsplash.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.headerStyle, styles.headerColor]}>
        Welcome to my first app!
      </Text>
      <Separator color="violet" />
      <Image style={{ width: 400, height: 400 }} source={image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  headerStyle: {
    fontWeight: "bold",
  },
  headerColor: {
    color: "violet",
  },
});
