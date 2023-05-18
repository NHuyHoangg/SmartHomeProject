import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Index from './index/index';
import Warning from './warning/warning';
import { useState } from "react";

export default function App() {
    const API_URL = "https://iot-backend-dhl.vercel.app/";

    // const [user, setUser] = useState();
    // const [login, setLogin] = useState(false);
    // const [signup, setSignup] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
  return (
    <View className={styles.text} style={{ width: '100%' }}>
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/45ce2986d79fc7cd05014bd522a88834.jpg')} resizeMode='cover'>
        <Index />
        {!openWarning && <Index setOpenWarning={setOpenWarning} API_URL={API_URL}/>}
        {openWarning && <Warning setOpenWarning={setOpenWarning} API_URL={API_URL}/>}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
