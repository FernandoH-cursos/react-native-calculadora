import React from 'react';
import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';
import {styles} from './config/theme/app-theme';

function App() {
  return (
    <View style={styles.background}>
      {/* Barra de estado superior de nuestro movil donde se ven los icono de bateria, wifi, etc  */}
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <CalculatorScreen />
    </View>
  );
}

export default App;
