import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
      <Text style={ styles.tittleText}>Silvinha health App</Text>
      <StatusBar style="auto" />
    </View>
    
    <StatusBar style= "light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f4',
   
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 120,
    backgroundColor: '#ef233c',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  tittleText: {
    color: '#edf2f4',
    frontSize: 28,
    frontWeight: 'bold',
    marginBottom: 20,

  }

});
