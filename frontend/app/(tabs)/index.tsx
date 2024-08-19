import { Image, StyleSheet, Platform } from 'react-native';

import { SafeAreaView, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.body} >
      <Text>Hello World!!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
