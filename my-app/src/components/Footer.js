import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.navbar}>
      <StatusBar style="light" />
      <Text style={styles.navText}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
