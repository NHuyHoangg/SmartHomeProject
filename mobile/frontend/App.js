import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Index from './index/index';


export default function App() {
  return (
    <View className={styles.text} style={{ width: '100%' }}>
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/45ce2986d79fc7cd05014bd522a88834.jpg')} resizeMode='cover'>
        <Index />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NunitoSans-Thin',
  }
});
