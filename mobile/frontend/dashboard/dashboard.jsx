import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
// import style from './dashboard.module.css';
import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react';

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
import UserTick from '../icon/user-tick-svgrepo-com.svg'
import UserRemove from '../icon/user-remove-svgrepo-com.svg'
import CursorBox from '../icon/cursor-box-svgrepo-com.svg'

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
        currentOutTemp, currentOutHumi, currentWeatherCode, setLoading,
        status, setStatus,
        isActiveOnAC, setIsActiveOnAC,
        isActiveOnCurtain, setIsActiveOnCurtain,
        isActiveOnLight1, setIsActiveOnLight1,
        isActiveOnLight3, setIsActiveOnLight3,
        isActiveOnLight2, setIsActiveOnLight2 }) {

    const [counter, setCounter] = useState(26);
    const [currStatus, setCurrStatus] = useState(Number(status));

    useEffect(()=>{
        setCurrStatus(Number(status))
    },[status])

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

    const [isActiveSettingAC, setIsActiveSettingAC] = useState(false);
    // const [isActiveControlCurtain, setIsActiveControlCurtain] = useState(false);

    const handleClickOnAC = () => {
        if (status==="2") {
            setLoading(true);
            axios.get(API_URL+ 'fan-switch')
            .then (response => {
                if (response) {
                    if (isActiveOnAC) {
                        axios.post(API_URL + 'addMessage', {
                            info: "Máy lạnh vừa được tắt."
                        })
                    } else {
                        axios.post(API_URL + 'addMessage', {
                            info: "Máy lạnh vừa được bật."
                        })
                    }
                    setIsActiveOnAC(!isActiveOnAC);
                    setLoading(false);
                }
            })
        }
    };
    const handleClickSettingAC = () => {
        setIsActiveSettingAC('setting');
    };

    const handleStatusButton = (id) => {
        setLoading(true);
        setCurrStatus(Number(id));
        axios.post(API_URL + 'status', { id: id })
            .then(response => {
                if (response) {
                    setStatus(id);
                    setLoading(false);
                }
            })
    };
    const handleClickOnLight1 = () => {
        if (status === "2") {
            setLoading(true);
            axios.get(API_URL+ 'led-1-switch')
            .then (response => {
                if (response) {
                    if (isActiveOnLight1) {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 1 vừa được tắt."
                        })
                    } else {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 1 vừa được bật."
                        })
                    }
                    setIsActiveOnLight1(!isActiveOnLight1);
                    setLoading(false);
                }
            })
        }
    };

    const handleClickOnLight2 = () => {
        if (status === "2") {
            setLoading(true);
            axios.get(API_URL+ 'led-2-switch')
            .then (response => {
                if (response) {
                    if (isActiveOnLight2) {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 2 vừa được tắt."
                        })
                    } else {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 2 vừa được bật."
                        })
                    }
                    setIsActiveOnLight2(!isActiveOnLight2);
                    setLoading(false);
                }
            })
        }
    };

    const handleClickOnCurtain = () => {
        if (status === "2") {
            setLoading(true);
            axios.get(API_URL+ 'rem-switch')
            .then (response => {
                if (response) {
                    if (isActiveOnCurtain) {
                        axios.post(API_URL + 'addMessage', {
                            info: "Rèm vừa được đóng."
                        })
                    } else {
                        axios.post(API_URL + 'addMessage', {
                            info: "Rèm vừa được mở."
                        })
                    }
                    setIsActiveOnCurtain(current => !current);
                    setLoading(false);
                }
            })
        }
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
            case 99:
            case 95:
                return <ViolentRain size={size} />;
            case 0:
            case 1:
            default:
                return currentDate.getHours() < 18 ? <Clear size={size} /> : <ClearNight size={size} />;
        }
    };

    // function classNames(...args) {
    //     return args.filter(Boolean).join(' ')
    // }

    return (
        <View style={{ justifyContent: 'space-evenly' }}>
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
                                        currentOutTemp : currentOutTemp}°C
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Humi size={'20'} />
                            <View>
                                <Text className={styles.text}>{
                                    currentOutHumi === '--' ?
                                        currentOutHumi : currentOutHumi[currentDate.getHours()]}%
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
                                        currentTemp : currentTemp}°C
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Humi size={'20'} />
                            <View>
                                <Text className={styles.text}>{
                                    currentHumi === '--' ?
                                        currentHumi : currentHumi}%
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
                    <Text style={styles.title}>Nhận diện người</Text>
                    {isActiveOnLight3 === '0' ?
                        <View style={{ alignItems: 'center' }}>
                            <UserRemove width={'60'} height={'60'} />
                            <View><Text className={styles.text} style={{ marginTop: 5 }}>Không phát hiện</Text></View>
                        </View>
                        :
                        <View style={{ alignItems: 'center' }}>
                            <UserTick width={'60'} height={'60'} />
                            <View><Text className={styles.text} style={{ marginTop: 5 }}>Có người</Text></View>
                        </View>}
                </View>
            </View>
            <View className={styles.main_container}>
                <TouchableHighlight underlayColor={'#ffffff'} className={[styles.gas_container, isActiveOnLight1 && styles.bg_header]} onPress={handleClickOnLight1}>
                    <View style={{ flex: 1, alignItems: 'center'}}> 
                        {isActiveOnLight1 && <Text style={styles.title_active}>Đèn 1</Text>}
                        {!isActiveOnLight1 && <Text style={styles.title}>Đèn 1</Text>}
                        {isActiveOnLight1 ? <LightPubOn size={'60'} /> : <LightPubOff size={'60'} />}
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'#ffffff'} className={[styles.gas_container, isActiveOnLight2 && styles.bg_header]} onPress={handleClickOnLight2}>
                    <View style={{ flex: 1, alignItems: 'center'}}>
                        {isActiveOnLight2 && <Text style={styles.title_active}>Đèn 2</Text>}
                        {!isActiveOnLight2 && <Text style={styles.title}>Đèn 2</Text>}
                        {isActiveOnLight2 ? <LightPubOn size={'60'} /> : <LightPubOff size={'60'} />}
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'#ffffff'} className={[styles.gas_container, isActiveOnCurtain && styles.bg_header]} onPress={handleClickOnCurtain}>
                    <View style={{ flex: 1, alignItems: 'center'}}>
                        {isActiveOnCurtain && <Text style={styles.title_active}>Rèm cửa</Text>}
                        {!isActiveOnCurtain && <Text style={styles.title}>Rèm cửa</Text>}
                        {isActiveOnCurtain ? <CurtainOn size={'60'} /> : <CurtainOff size={'60'} />}
                    </View>
                </TouchableHighlight>
            </View>
            <View className={styles.main_container}>
                {isActiveSettingAC === 'setting' ? '' :
                    <View className={styles.gas_container}>
                        <View style={{ justifyContent: 'center' }} className={[isActiveSettingAC && styles.setting]}>
                            <Text style={styles.title}>Điều hòa</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                                <TouchableHighlight underlayColor={'#ffffff'} className={styles.button} onPress={removeCountHandler}>
                                    <CircleMinus size={'30'} />
                                </TouchableHighlight>
                                <View style={{ justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }} className={[styles.text_main, styles.celsius]}>
                                    <Text style={{ fontSize: 30, color: '#2B5C64' }}>{counter}°C</Text>
                                </View>
                                <TouchableHighlight underlayColor={'#ffffff'} className={styles.button} onPress={addCountHandler}>
                                    <CirclePlus size={'30'} />
                                </TouchableHighlight>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 5 }}>
                                <View style={{ alignItems: 'center', padding: 10 }}>
                                    <TouchableHighlight style={{ alignContent: 'center' }} className={[styles.button, styles.bg_main, isActiveOnAC && styles.active]} onPress={handleClickOnAC}>
                                        <On className={[styles.button, styles.bg_main, isActiveOnAC && styles.active]} size={'40'} />
                                    </TouchableHighlight>
                                    <Text style={{ marginTop: 10 }} className={styles.text}>Bật/Tắt</Text>
                                </View>
                                <View style={{ alignItems: 'center', padding: 10 }}>
                                    <TouchableHighlight style={{ alignContent: 'center' }} className={[styles.button, styles.bg_main, isActiveSettingAC && styles.active]} onPress={handleClickSettingAC}>
                                        <Setting size={'40'} />
                                    </TouchableHighlight>
                                    <Text style={{ marginTop: 10 }} className={styles.text}>Cài đặt</Text>
                                </View>
                            </View>
                        </View>
                    </View>}
                {isActiveSettingAC === 'setting' ?
                    <View className={styles.gas_container}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.title}>Điều hòa</Text>
                            <View style={{ width: '80%', justifyContent: 'center', margin: 4, padding: 5 }}>
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
                    </View> : ''}
                <View style={{ flex: 0 }} className={[styles.gas_container, styles.bg_main]}>
                    <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                        <TouchableHighlight style={{ margin: 5 }} className={[styles.button, styles.bg_text, currStatus === 1 && styles.active]} onPress={() => handleStatusButton(1)}>
                            <RemoteControler size={'50'} />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ margin: 5 }} className={[styles.button, styles.bg_text, currStatus === 2 && styles.active]} onPress={() => handleStatusButton(2)}>
                            <CursorBox width={'50'} height={'50'} />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ margin: 5 }} className={[styles.button, styles.bg_text, currStatus === 3 && styles.active]} onPress={() => handleStatusButton(3)}>
                            <Auto size={'50'} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
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

    title_active: {
        fontSize: 18,
        fontWeight: 900,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 5,
    },

    text: {
        fontSize: 14,
        fontWeight: 900,
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
        justifyContent: 'space-between',
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

    active_title: {
        color: '#000000',
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
        borderRadius: 30,
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