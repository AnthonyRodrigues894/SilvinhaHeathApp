import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
      <Text style={ styles.tittleText}>Silvinha!</Text>
      <StatusBar style="auto" />
    </View>

    <StatusBar style= "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
   paddingTop: 50
  },
});
