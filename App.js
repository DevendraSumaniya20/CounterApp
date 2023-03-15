import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Counter />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
