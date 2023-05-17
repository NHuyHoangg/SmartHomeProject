import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableHighlight } from 'react-native';

import Sidebar from "../sidebar/sidebar";
import Dashboard from "../dashboard/dashboard";
// import Profile from "../profile/profile"
import Log from "../log/log";
import Statistics from "../statistics/statistics";

import Avatar from '../icon/avatar'

export default function Index({ setLogin, API_URL }) {

    const [loading, setLoading] = useState(false);

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

    setTimeout(() => {
        setGetapi(!getapi);
    }, 5000);

    setTimeout(() => {
        setGetWeatherapi(!getWeatherapi);
    }, 300000);

    useEffect(() => {
        axios.get(API_URL + 'tempChart')
            .then(response => {
                if (response.data)
                    setTempData(response.data.data);
            })
        axios.get(API_URL + 'humiChart')
            .then(response => {
                if (response.data)
                    setHumiData(response.data.data);
            })
    }, [])

    useEffect(() => {
        axios.get(API_URL + 'temp')
            .then(response => {
                if (response.data)
                    setCurrentTemp(response.data.value);
            })
        axios.get(API_URL + 'humi')
            .then(response => {
                if (response.data)
                    setCurrentHumi(response.data.value);
            })
        axios.get(API_URL + 'gas')
            .then(response => {
                if (response.data)
                    setCurrentGas(response.data.value);
            })
        axios.get(API_URL + 'light')
            .then(response => {
                if (response.data)
                    setCurrentLight(response.data.value);
            })
    }, [getapi])

    useEffect(() => {
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&hourly=relativehumidity_2m&current_weather=true&forecast_days=1&timezone=Asia%2FBangkok`)
            .then(response => {
                if (response.data) {
                    setCurrentOutTemp(response.data.current_weather.temperature)
                    setCurrentWeatherCode(response.data.current_weather.weathercode)
                    setCurrentOutHumi(response.data.hourly.relativehumidity_2m)
                }
            })
    }, [getWeatherapi])

    return (
        <View style={{ height: '100%' }}>
            <View style={{ height: '10%', flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'flex-end', marginTop: 30, marginRight: 10, marginBottom: 10 }}>
                <View style={{ justifyContent: 'center' }} className={styles.name}>
                    <Text style={{ fontWeight: 700, color: '#2B5C64', fontSize: 15 }}>Chúc một ngày tốt lành,</Text>
                    <Text style={{ fontWeight: 700, color: '#2B5C64', fontSize: 15 }}>LƯƠNG HOÀNG</Text>
                </View>
                <TouchableHighlight underlayColor={'#ffffff'} className={styles.avatar} onPress={() => setTab(4)}>
                    <Avatar size={'80'} />
                </TouchableHighlight>
            </View>
            {
                // loading ? <Loading />:
                <ScrollView style={{maxHeight: '80%'}}>
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
                            setLoading={setLoading}
                        />
                    }
                    {/* {tab === 1 && <Dashboard />} */}
                    {tab === 2 && <Statistics API_URL={API_URL} tempData={tempData} humiData={humiData} />}
                    {tab === 3 && <Log />}
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