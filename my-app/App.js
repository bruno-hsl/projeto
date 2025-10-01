import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/NavBar';
import Footer from './src/components/Footer';


export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

      {/* Componente Nav Bar  */}
      <View>
        <NavBar />
      </View>

      <View>
        <Text style={styles.container}>Pagina icial</Text>
      </View>

      {/* Componentes Footer */}
      <View>
        <Footer />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
