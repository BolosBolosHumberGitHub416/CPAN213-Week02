import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
 
export default function App() {
  const [content, setContent] = useState("");
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View style={styles.container}>
        <Text>Some more text</Text>
        <Image
        source={{
          uri: 'https://www.mycism.com/wp-content/uploads/2022/07/Humber-College-1024x625.jpg'
        }}
        style={{width: 200, height: 200}}
        />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});