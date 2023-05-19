import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, TouchableHighlight, ScrollView } from 'react-native';
import Alert from '../icon/alert.svg'
// import "./warning.css";

export default function Warning () {
    // const [muteVid, setMuteVid] = useState(false);
    
    // const videoRef= useRef();

    // useEffect(() => {
    // videoRef.current.volume = 0.5;
    // }, []);
    return (
        <View style={{backgroundColor: '#B30000', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            {/* <video width="320" height="240" controls autoplay muted loop>
                <source src="https://youtu.be/5LCvj6Z_LrA" type="video/mp4" />
            </video> */}
            {/* <video controls muted autoPlay {...(muteVid && { muted: true })} ref={videoRef}>
                <source src={alert} type="video/mp4"/>
            </video> */}
            <Alert width={'350'} height={'350'} fill={'#ffffff'} />
            <Text style={{color: '#ffffff', fontWeight: 900, fontSize: 50}}>CẢNH BÁO</Text>
            <Text style={{color: '#ffffff', fontWeight: 500, fontSize: 25, textAlign: 'center'}}>Khí gas vượt ngưỡng cho phép!</Text>
            <Text style={{color: '#ffffff', fontWeight: 500, fontSize: 25, textAlign: 'center'}}>Vui lòng nhanh chóng xử lý để tránh gặp nguy hiểm</Text>            
        </View>
    )
}
