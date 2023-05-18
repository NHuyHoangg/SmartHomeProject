import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, TouchableHighlight, ScrollView } from 'react-native';
import Example from "./chart";
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
    const handleLight = () => {
        setActiveTab("light");
    };

    // function classNames(...args) {
    //     return args.filter(Boolean).join(' ')
    // }

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10}}>
                    <TouchableHighlight underlayColor={'#ffffff'} className={[styles.tabs, activeTab === "temp" ? styles.active : ""]} onPress={handleTemp}>
                        <Text className={[styles.text, activeTab === "temp" ? styles.active : ""]}>Nhiệt độ</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#ffffff'} className={[styles.tabs, activeTab === "humi" ? styles.active : ""]} onPress={handleHumi}>
                        <Text className={[styles.text, activeTab === "humi" ? styles.active : ""]}>Độ ẩm</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#ffffff'} className={[styles.tabs, activeTab === "gas" ? styles.active : ""]} onPress={handleGas}>
                        <Text className={[styles.text, activeTab === "gas" ? styles.active : ""]}>Nồng độ khí gas</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#ffffff'} className={[styles.tabs, activeTab === "light" ? styles.active : ""]} onPress={handleLight}>
                        <Text className={[styles.text, activeTab === "light" ? styles.active : ""]}>Cường độ ánh sáng</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
            <View className={styles.stat_container}>
                {/* {activeTab === 'temp' && <Example data={tempData} type={activeTab} />}
                {activeTab === 'humi' && <Example data={humiData} type={activeTab} />}
                {activeTab === 'gas' && <Example data={gasData} type={activeTab} />}
                {activeTab === 'light' && <Example data={lightData} type={activeTab} />} */}
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
        height: '100%',
    },
})