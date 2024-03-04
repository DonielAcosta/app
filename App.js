import { Alert,StyleSheet, Text, View,TouchableNativeFeedback} from 'react-native';
import React from 'react'
// import React from 'react' ; 7.4K (gzipped;4k)


export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
      onPress={()=>Alert.alert('texto Seleccionado')}>
        <Text>Rosa erp</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
