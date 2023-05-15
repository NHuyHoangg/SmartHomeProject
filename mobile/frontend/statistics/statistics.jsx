import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from "axios";
// import "./statistics.css";
// import ChartExample from "./chart";

export default function Statistics({ API_URL, tempData, humiData }) {

    const [activeTab, setActiveTab] = useState("temp");
    const handleGas = () => {
        setActiveTab("gas");
    };
    const handleTemp = () => {
        setActiveTab("temp");
    };
    const handleHumi = () => {
        setActiveTab("humi");
    };

    // function classNames(...args) {
    //     return args.filter(Boolean).join(' ')
    // }

    return (
        <View>
            <View style={{justifyContent: 'space-between', height: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10}}>
                    <View className={[styles.tabs, activeTab === "temp" ? styles.active : ""]} onClick={handleTemp}>
                        <Text className={[styles.text, activeTab === "temp" ? styles.active : ""]}>Nhiệt độ</Text>
                    </View>
                    <View className={[styles.tabs, activeTab === "humi" ? styles.active : ""]} onClick={handleHumi}>
                        <Text className={[styles.text, activeTab === "humi" ? styles.active : ""]}>Độ ẩm</Text>
                    </View>
                    <View className={[styles.tabs, activeTab === "gas" ? styles.active : ""]} onClick={handleGas}>
                        <Text className={[styles.text, activeTab === "gas" ? styles.active : ""]}>Nồng độ khí gas</Text>
                    </View>
                </View>
            </View>
            <View className={styles.stat_container}>
                {/* <ChartExample data={tempData} /> */}
                {/* <ChartExample data={humiData}/> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    stat_container: {
        borderRadius: 10,
        marginTop: 20,
        margin: 10,
        // height: '82 %',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },

    text: {
        fontSize: 20,
        fontWeight: 700,
        color: '#2B5C64'
    },

    tabs: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 700,
    },

    active: {
        color: '#FFFFFF',
        backgroundColor: '#F29E7D',
    },

    body: {
        boxSizing: 'border-box',
        fontFamily: 'Nunito',
        height: '100%',
    },
})