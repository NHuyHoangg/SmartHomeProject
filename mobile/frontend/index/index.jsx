import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableHighlight } from 'react-native';

import Sidebar from "../sidebar/sidebar";
import Dashboard from "../dashboard/dashboard";
// import Profile from "../profile/profile"
import Log from "../log/log";
import Statistics from "../statistics/statistics";

import Avatar from '../icon/avatar'

export default function Index({ setOpenWarning, API_URL }) {

    const effectRain = useRef(false);

    const [loading, setLoading] = useState(false);
    const [first, setFirst] = useState(true);
    
    const [tab, setTab] = useState(0);

    const [getapi, setGetapi] = useState(true);
    const [currentTemp, setCurrentTemp] = useState('--');
    const [currentHumi, setCurrentHumi] = useState('--');
    const [currentGas, setCurrentGas] = useState('--');
    const [currentLight, setCurrentLight] = useState('--');

    const [getWeatherapi, setGetWeatherapi] = useState(true);
    const [currentOutTemp, setCurrentOutTemp] = useState('--');
    const [currentOutHumi, setCurrentOutHumi] = useState('--');
    const [currentWeatherCode, setCurrentWeatherCode] = useState(0);

    const [tempData, setTempData] = useState();
    const [humiData, setHumiData] = useState();
    const [lightData, setLightData] = useState();
    const [gasData, setGasData] = useState();

    const [status, setStatus] = useState(1);
    const [isActiveOnAC, setIsActiveOnAC] = useState(false);
    const [isActiveOnLight1, setIsActiveOnLight1] = useState(false);
    const [isActiveOnLight2, setIsActiveOnLight2] = useState(false);
    const [isActiveOnLight3, setIsActiveOnLight3] = useState(false);
    const [isActiveOnCurtain, setIsActiveOnCurtain] = useState(false);

    const [messages, setMessages] = useState();

    setTimeout(()=>{
        setGetapi(!getapi);
    }, 2000);

    setTimeout(()=>{
        setGetWeatherapi(!getWeatherapi);
    }, 300000);

    useEffect (()=>{
        axios.get(API_URL+ 'tempChart')
        .then (response => {
            if (response.data)
                setTempData(response.data.data);
        })
        axios.get(API_URL+ 'humiChart')
        .then (response => {
            if (response.data)
                setHumiData(response.data.data);
        })
        axios.get(API_URL+ 'lightChart')
        .then (response => {
            if (response.data)
                setLightData(response.data.data);
        })
        axios.get(API_URL+ 'GasChart')
        .then (response => {
            if (response.data)
                setGasData(response.data.data);
        })
    },[getapi])

    useEffect (()=>{
        if (first) setLoading(true);
        axios.get(API_URL+ 'all')
        .then (response => {
            if (response.data) {
                setCurrentTemp(response.data[0].value);
                if (response.data[2].value === 'FAN-ON') {
                    if (isActiveOnAC === false && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Máy lạnh vừa được bật."
                        })
                    }
                    setIsActiveOnAC(true);
                } else {
                    if (isActiveOnAC === true && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Máy lạnh vừa được tắt."
                        })
                    }
                    setIsActiveOnAC(false);
                }

                setCurrentHumi(response.data[3].value);

                setCurrentLight(response.data[4].value);
                if (response.data[6].value === 'REM-ON') {
                    if (isActiveOnCurtain === false && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Rèm vừa được mở."
                        })
                        setIsActiveOnCurtain(true);
                    }
                } else {
                    if (isActiveOnCurtain === true && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Rèm vừa được đóng."
                        })
                        setIsActiveOnCurtain(false);
                    }
                }
                

                if (response.data[1].value === 'LED1-ON') {
                    if (isActiveOnLight1 === false && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 1 vừa được bật."
                        })
                    }
                    setIsActiveOnLight1(true);
                } else {
                    if (isActiveOnLight1 === true && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 1 vừa được tắt."
                        })
                    }
                    setIsActiveOnLight1(false);
                }
                if (response.data[5].value === 'LED2-ON') {
                    if (isActiveOnLight2 === false && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 2 vừa được bật."
                        })
                    }
                    setIsActiveOnLight2(true);
                } else {
                    if (isActiveOnLight2 === true && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 2 vừa được tắt."
                        })
                    }
                    setIsActiveOnLight2(false);
                }

                setCurrentGas(response.data[7].value);
                if (response.data[7].value >= 2000) {
                    axios.post(API_URL + 'addMessage', {
                        info: "Khí ga vượt ngưỡng an toàn."
                    })
                    setOpenWarning(true);
                } else {
                    setOpenWarning(false);
                }

                setIsActiveOnLight3(response.data[9].value);
                if (response.data[9].value == 1 && isActiveOnLight3 !== response.data[9].value) {
                    axios.post(API_URL + 'addMessage', {
                        info: "Phát hiện người."
                    })
                }
                setStatus(response.data[8].value);
            }
        })

        axios.get(API_URL + 'getMessage')
        .then (response => {
            if (response.data)
                setMessages(response.data);
        })

    },[getapi])

    useEffect(()=>{
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&hourly=relativehumidity_2m&current_weather=true&forecast_days=1&timezone=Asia%2FBangkok`)
        .then (response => {
            if (response.data) {
                if (!first) {
                    if (response.data.current_weather.temperature > 32 && 
                        response.data.current_weather.weathercode !== currentWeatherCode &&
                        (response.data.current_weather.weathercode === 0 || 
                        response.data.current_weather.weathercode === 1 )) {
                            axios.post(API_URL + 'addMessage', {
                                info: "Nhiệt độ ngoài trời đang rất cao! Hãy che chắn cẩn thận khi ra ngoài."
                            })
                    }
                    else if (response.data.current_weather.weathercode !== currentWeatherCode && 
                        (response.data.current_weather.weathercode !== 2)) {
                            axios.post(API_URL + 'addMessage', {
                                info: "Trời sắp mưa! Hãy mang theo dù khi ra ngoài."
                            })
                    }
                }
                setCurrentOutTemp(response.data.current_weather.temperature)
                setCurrentWeatherCode(response.data.current_weather.weathercode)
                setCurrentOutHumi(response.data.hourly.relativehumidity_2m)

                if (first) {
                    setLoading(false);
                    setFirst(false);
                }
            }
        })
        if (effectRain.current === false) {
            axios.get(`https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&hourly=relativehumidity_2m&current_weather=true&forecast_days=1&timezone=Asia%2FBangkok`)
            .then (response => {
                if (response.data) {
                    if (response.data.current_weather.temperature > 32 && 
                        response.data.current_weather.weathercode !== currentWeatherCode &&
                        (response.data.current_weather.weathercode === 0 || 
                        response.data.current_weather.weathercode === 1 )) {
                            axios.post(API_URL + 'addMessage', {
                                info: "Nhiệt độ ngoài trời đang rất cao! Hãy che chắn cẩn thận khi ra ngoài."
                            })
                    }
                    else if (response.data.current_weather.weathercode !== currentWeatherCode && 
                        (response.data.current_weather.weathercode !== 2)) {
                            axios.post(API_URL + 'addMessage', {
                                info: "Trời sắp mưa! Hãy mang theo dù khi ra ngoài."
                            })
                    }
                    setCurrentOutTemp(response.data.current_weather.temperature)
                    setCurrentWeatherCode(response.data.current_weather.weathercode)
                    setCurrentOutHumi(response.data.hourly.relativehumidity_2m)

                    if (first) {
                        setLoading(false);
                        setFirst(false);
                    }
                }
            })
        }
        return () => {effectRain.current = true}
    },[getWeatherapi])

    return (
        <View style={{ height: '100%' }}>
            <View style={{ height: '10%', flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'flex-end', marginRight: 10, marginBottom: 10 }}>
                <View style={{ justifyContent: 'center' }} className={styles.name}>
                    <Text style={{ fontWeight: 500, color: '#2B5C64', fontSize: 15 }}>Chúc một ngày tốt lành,</Text>
                    <Text style={{ fontWeight: 900, color: '#2B5C64', fontSize: 15 }}>LƯƠNG HOÀNG</Text>
                </View>
                <TouchableHighlight underlayColor={'#ffffff'} className={styles.avatar} onPress={() => setTab(4)}>
                    <Avatar size={'80'} />
                </TouchableHighlight>
            </View>
            {
                // loading ? <Loading />:
                <ScrollView style={{ maxHeight: '80%' }}>
                    {
                        tab === 0 &&
                        <Dashboard
                        API_URL={API_URL} 
                        currentHumi={currentHumi} 
                        currentTemp={currentTemp}
                        currentGas={currentGas}
                        currentLight={currentLight}
                        currentOutTemp={currentOutTemp}
                        currentOutHumi={currentOutHumi}
                        currentWeatherCode={currentWeatherCode}
                        status={status}
                        setStatus={setStatus}
                        setLoading = {setLoading}
                        isActiveOnAC={isActiveOnAC}
                        setIsActiveOnAC={setIsActiveOnAC}
                        isActiveOnCurtain={isActiveOnCurtain}
                        setIsActiveOnCurtain={setIsActiveOnCurtain}
                        isActiveOnLight1={isActiveOnLight1}
                        setIsActiveOnLight1={setIsActiveOnLight1}
                        isActiveOnLight2={isActiveOnLight2}
                        setIsActiveOnLight2={setIsActiveOnLight2}
                        isActiveOnLight3={isActiveOnLight3}
                        setIsActiveOnLight3={setIsActiveOnLight3}
                        />
                    }
                    {/* {tab === 1 && <Dashboard />} */}
                    {tab === 2 && 
                    <Statistics
                        tempData={tempData} 
                        humiData={humiData}
                        gasData={gasData} 
                        lightData={lightData}  
                        />
                    }
                    {tab === 3 && <Log messages={messages} />}
                    {tab === 4 && <Profile />}
                </ScrollView>
            }
            <View style={{ bottom: 0, height: '10%' }}>
                <Sidebar tab={tab} setTab={setTab} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // sidebar: {
    //     backdropFilter: blur(20),
    //     width: '9%',
    // },

    // username: {
    //     height: fit-content,
    // },

    // avatar: {
    //     width: '7.5%',
    //     height: '7.5%',
    // },

    name: {
        fontSize: '2.8%',
        fontWeight: 900,
        width: '70%',
    },

    // name div:first-child: {
    //     font-size: 2.2rem,
    // },

    logout: {
        width: '5%',
        height: '5%',
    },

})