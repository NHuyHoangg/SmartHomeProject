import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, TouchableHighlight, ScrollView } from 'react-native';
// import style from './dashboard.module.css';
import React from "react";
import axios from "axios";
import { useState } from 'react';

import Home from '../icon/home';
import Location from '../icon/loacation';
import Temp from '../icon/temp';
import Humi from '../icon/humi';
import Fire from '../icon/fire';
import CircleMinus from '../icon/circle-minus';
import CirclePlus from '../icon/circle-plus';
import On from '../icon/on';
import Auto from '../icon/auto';
import AutoAC from '../icon/auto-ac';
import Setting from '../icon/setting'
import LightPubOn from '../icon/light-pub-on';
import LightPubOff from '../icon/light-pub-off';
import CurtainOn from '../icon/curtain-on';
import CurtainOff from '../icon/curtain-off';
import RemoteControler from '../icon/remote-controler';

import Clear from "../icon/clear"
import ClearNight from '../icon/clear-night';
import CloudyDay from '../icon/cloudy-day';
import CloudyNight from '../icon/cloudy-night';
import FoggyDay from '../icon/foggy-day';
import FoggyNight from '../icon/foggy-night';
import SlightRainDay from '../icon/slight-rain-day';
import SlightRainNight from '../icon/slight-rain-night';
import Cloudy from '../icon/cloudy';
import Drizzle from '../icon/drizzle';
import SlightRain from '../icon/slight-rain';
import ViolentRain from '../icon/violent-rain'


export default function Dashboard(
    { API_URL,
        currentHumi, currentTemp, currentGas, currentLight,
        currentOutTemp, currentOutHumi, currentWeatherCode, setLoading }) {

    const [counter, setCounter] = useState(26);

    let currentDate = new Date();

    const addCountHandler = () => {
        if (counter === 30) {
            return;
        }
        setCounter(counter + 1);
    };
    const removeCountHandler = () => {
        if (counter === 16) {
            return;
        }
        setCounter(counter - 1);
    };

    const [isActiveOnAC, setIsActiveOnAC] = useState(false);
    const [isActiveAutoAC, setIsActiveAutoAC] = useState(false);
    const [isActiveSettingAC, setIsActiveSettingAC] = useState(false);
    const [isActiveOnLight, setIsActiveOnLight] = useState(false);
    const [isActiveAutoLight, setIsActiveAutoLight] = useState(false);
    const [isActiveOnCurtain, setIsActiveOnCurtain] = useState(false);
    const [isActiveAutoCurtain, setIsActiveAutoCurtain] = useState(false);
    const [isActiveControlCurtain, setIsActiveControlCurtain] = useState(false);

    const handleClickOnAC = () => {
        setLoading(true);
        axios.get(API_URL + 'fan-switch')
            .then(response => {
                if (response)
                    setIsActiveOnAC(current => !current);
                setLoading(false);
            })
    };
    const handleClickAutoAC = () => {
        setIsActiveAutoAC(current => !current);
    };
    const handleClickSettingAC = () => {
        setIsActiveSettingAC('setting');
    };
    const handleClickOnLight = () => {
        setLoading(true);
        axios.get(API_URL + 'led-1-switch')
            .then(response => {
                if (response) {
                    axios.get(API_URL + 'led-2-switch')
                        .then(response => {
                            axios.get(API_URL + 'led-3-switch')
                                .then(response => {
                                    setIsActiveOnLight(current => !current);
                                    setLoading(false);
                                })
                        })
                }
            })
    };
    const handleClickAutoLight = () => {
        setIsActiveAutoLight(current => !current);
    };
    const handleClickOnCurtain = () => {
        setLoading(true);
        axios.get(API_URL + 'rem-switch')
            .then(response => {
                if (response)
                    setIsActiveOnCurtain(current => !current);
                setLoading(false);
            })
    };
    const handleClickAutoCurtain = () => {
        setIsActiveAutoCurtain(current => !current);
    };
    const handleClickControlCurtain = () => {
        setIsActiveControlCurtain(current => !current);
    };

    const exportWeatherIcon = () => {
        const size = '50';

        switch (currentWeatherCode) {
            case 2:
                return currentDate.getHours() < 18 ? <CloudyDay size={size} /> : <CloudyNight size={size} />;
            case 3:
                return <Cloudy size={size} />;
            case 45:
            case 48:
                return currentDate.getHours() < 18 ? <FoggyDay size={size} /> : <FoggyNight size={size} />;
            case 51:
            case 53:
            case 55:
                return currentDate.getHours() < 18 ? <SlightRainDay size={size} /> : <SlightRainNight size={size} />;
            case 61:
            case 80:
                return <Drizzle size={size} />;
            case 63:
            case 81:
                return <SlightRain size={size} />;
            case 65:
            case 82:
                return <ViolentRain size={size} />;
            case 0:
            case 1:
            default:
                return currentDate.getHours() < 18 ? <Clear size={size} /> : <ClearNight size={size} />;
        }
    }

    // function classNames(...args) {
    //     return args.filter(Boolean).join(' ')
    // }

    return (
        <View style={{ justifyContent: 'space-evenly'}}>
            <View className={styles.main_container}>
                <View className={styles.weather_container}>
                    {exportWeatherIcon(currentWeatherCode)}
                    <View style={{ paddingLeft: 10 }}>
                        <View className={styles.location} style={{ flex: 1, flexDirection: 'row' }}>
                            <Location size={20} />
                            <View>
                                <Text className={styles.text}>Ngoài trời</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Temp size={'20'} />
                            <View>
                                <Text className={styles.text}>{
                                    currentOutTemp === '--' ?
                                        currentOutTemp : Math.round(currentOutTemp)}°C
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Humi size={'20'} />
                            <View>
                                <Text className={styles.text}>{
                                    currentOutHumi === '--' ?
                                        currentOutHumi : Math.round(currentOutHumi)}%
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className={styles.weather_container}>
                    <Home size={'50'} />
                    <View style={{ paddingLeft: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Location size={20} />
                            <View>
                                <Text className={styles.text}>Trong nhà</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Temp size={'20'} />
                            <View>
                                <Text className={styles.text}>{
                                    currentTemp === '--' ?
                                        currentTemp : Math.round(currentTemp)}°C
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Humi size={'20'} />
                            <View>
                                <Text className={styles.text}>{
                                    currentHumi === '--' ?
                                        currentHumi : Math.round(currentHumi)}%
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className={styles.main_container}>
                <View className={styles.gas_container}>
                    <Text style={styles.title}>Nồng độ khí gas</Text>
                    <Fire size={'60'} />
                    <View><Text className={styles.text} style={{ marginTop: 5 }}>{currentGas} ppm</Text></View>
                </View>
                <View className={styles.gas_container}>
                    <Text className={styles.title} style={styles.title}>Cường độ ánh sáng</Text>
                    <Fire size={'60'} />
                    <View><Text className={styles.text} style={{ marginTop: 5 }}>{currentGas} %</Text></View>
                </View>
            </View>
            <View className={styles.main_container}>
                <View className={styles.gas_container}>
                    <Text style={styles.title}>Đèn</Text>
                    <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <TouchableHighlight style={{ margin: 5 }} className={[styles.button, styles.bg_main, isActiveOnLight && styles.active]} onPress={handleClickOnLight}>
                                <On size={'40'} />
                            </TouchableHighlight>
                            <TouchableHighlight style={{ margin: 5 }} className={[styles.button, styles.bg_main, isActiveAutoLight && styles.active]} onPress={handleClickAutoLight}>
                                <Auto size={'40'} />
                            </TouchableHighlight>
                        </View>
                        {isActiveOnLight ? <LightPubOn size={'60'} /> : <LightPubOff size={'60'} />}
                    </View>
                </View>
                <View className={styles.gas_container}>
                    <Text style={styles.title}>Rèm cửa</Text>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <TouchableHighlight style={{ margin: 5 }} className={[styles.button, styles.bg_main, isActiveOnCurtain && styles.active]} onPress={handleClickOnCurtain}>
                                <On style={{ backgroundColor: '#2B5C64' }} size={'40'} />
                            </TouchableHighlight>
                            <TouchableHighlight style={{ margin: 5 }} className={[styles.button, styles.bg_main, isActiveAutoCurtain && styles.active]} onPress={handleClickAutoCurtain}>
                                <Auto size={'40'} />
                            </TouchableHighlight>
                            <TouchableHighlight style={{ margin: 5 }} className={[styles.button, styles.bg_main, isActiveControlCurtain && styles.active]} onPress={handleClickControlCurtain}>
                                <RemoteControler size={'40'} />
                            </TouchableHighlight>
                        </View>
                        {isActiveOnCurtain ? <CurtainOn size={'60'} /> : <CurtainOff size={'60'} />}
                    </View>
                </View>
            </View>
            {isActiveSettingAC === 'setting' ? '' :
            <View className={styles.main_container}>
                <View className={styles.gas_container}>
                    <View style={{ justifyContent: 'center' }} className={[isActiveSettingAC && styles.setting]}>
                        <Text style={styles.title}>Điều hòa</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                            <TouchableHighlight underlayColor={'#ffffff'} className={styles.button} onPress={removeCountHandler}>
                                <CircleMinus size={'30'} />
                            </TouchableHighlight>
                            <View style={{ justifyContent: 'center' }} className={[styles.text_main, styles.celsius]}><Text style={{ fontSize: 30 }}>{counter}°C</Text></View>
                            <TouchableHighlight underlayColor={'#ffffff'} className={styles.button} onPress={addCountHandler}>
                                <CirclePlus size={'30'} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 5 }}>
                            <View style={{ alignItems: 'center', padding: 10 }}>
                                <TouchableHighlight style={{ alignContent: 'center' }} className={[styles.button, styles.bg_main, isActiveOnAC && styles.active]} onPress={handleClickOnAC}>
                                    <On className={[styles.button, styles.bg_main, isActiveOnAC && styles.active]} size={'40'} />
                                </TouchableHighlight>
                                <Text style={{marginTop: 10}} className={styles.text}>Bật/Tắt</Text>
                            </View>
                            <View style={{ alignItems: 'center', padding: 10 }}>
                                <TouchableHighlight style={{ alignContent: 'center' }} className={[styles.button, styles.bg_main, isActiveAutoAC && styles.active]} onPress={handleClickAutoAC}>
                                    <AutoAC className={[styles.button, styles.bg_main, isActiveOnAC && styles.active]} size={'40'} />
                                </TouchableHighlight>
                                <Text style={{marginTop: 10}} className={styles.text}>Tự động</Text>
                            </View>
                            <View style={{ alignItems: 'center', padding: 10 }}>
                                <TouchableHighlight style={{ alignContent: 'center' }} className={[styles.button, styles.bg_main, isActiveSettingAC && styles.active]} onPress={handleClickSettingAC}>
                                    <Setting size={'40'} />
                                </TouchableHighlight>
                                <Text style={{marginTop: 10}} className={styles.text}>Cài đặt</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            }
            {isActiveSettingAC === 'setting' ? 
            <View className={styles.main_container}>
                <View className={styles.gas_container}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.title}>Điều hòa</Text>
                        <View style={{ justifyContent: 'center', margin: 4, padding: 5 }}>
                            <View>
                                <Text className={styles.text} style={{ marginBottom: 5 }}>Nhiệt độ tự động bật</Text>
                                <TextInput style={{ padding: 5, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10 }} type="text" placeholder="26°C" />
                            </View>
                            <View style={{ marginBottom: 5 }}>
                                <Text className={styles.text} style={{ marginBottom: 5 }}>Nhiệt độ tự động tắt</Text>
                                <TextInput style={{ padding: 5, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10 }} type="text" placeholder="32°C" />
                            </View>
                            <Button style={{ borderRadius: 50 }} color='#F29E7D' title='Lưu' type="submit"></Button>
                        </View>
                    </View>
                </View>
            </View> : ''}
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: '100%',
        justifyContent: 'space-between',
        margin: 5
    },

    title: {
        fontSize: 18,
        fontWeight: 900,
        color: '#F29E7D',
        textAlign: 'center',
        marginBottom: 5,
    },

    text: {
        fontSize: 14,
        fontWeight: 700,
        color: '#222C34',
    },

    weather_container: {
        flex: 1,
        fontWeight: 900,
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
    },

    container_properties: {
        height: '100%',
        borderRadius: 20,
    },

    location: {
        fontSize: '0.5%',
        fontWeight: 'bold',
    },

    gas_container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        // justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
    },

    rest_container: {
        height: '25.8%',
    },

    celsius: {
        fontSize: '10%',
        fontWeight: 800,
    },

    // button: {
    //     borderRadius: '60%',
    // },

    active: {
        backgroundColor: '#F29E7D',
    },

    input: {
        // float: right,
        textAlign: 'right',
        width: '40%',
        display: 'inline-block',
        fontWeight: 500,
        fontSize: '1.6%',
        lineHeight: 2,
        borderRadius: 10,
    },

    /* .settingAC input:focus: {
        outline: none !important,
        border: 1px solid var(--color-header),
    } */

    button: {
        borderRadius: 20,
        border: 'none',
        alignItems: 'center',
        fontWeight: 700,
        justifyContent: 'center'
    },


    width_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '37%',
        bottom: '5%',
    },


    body: {
        boxSizing: 'border-box',
        /* background-color: #F0EAE2, */
        height: '100%',
    },

    bg: {
        /* The image used */
        // backgroundImage: url("../assets/background1.jpg"),

        /* Full height */
        height: '100%',
        /* position: fixed, */
        top: 0,
        left: 0,
        // overflow-y: scroll,

        /* Center and scale the image nicely */
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    // :root: {
    //     --color-sleepy: #EDB544,
    //     --color-header: #F29E7D,
    //     --color-main: #2B5C64,
    //     --color-text: #222C34,
    //     --color-container: rgba(255, 255, 255, 0.5),
    //     --color-background: #FFFFFF,
    // },

    text_sleepy: {
        color: '#EDB544',
    },

    text_header: {
        color: '#F29E7D',
    },

    text_main: {
        color: '#2B5C64',
    },

    text_text: {
        color: '#222C34',
    },

    text_container: {
        color: 'rgba(255, 255, 255, 0.5)',
    },

    text_background: {
        color: '#FFFFFF',
    },

    bg_sleepy: {
        backgroundColor: '#EDB544',
    },

    bg_header: {
        backgroundColor: '#F29E7D',
    },

    bg_main: {
        backgroundColor: '#2B5C64',
    },

    bg_text: {
        backgroundColor: '#222C34',
    },

    bg_container: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },

    bg_background: {
        backgroundColor: '#FFFFFF',
    },

    // container_blur: {
    //     backdropFilter: blur(8),
    // },

})