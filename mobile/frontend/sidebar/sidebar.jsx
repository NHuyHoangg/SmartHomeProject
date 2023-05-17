import { useState } from "react";
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

import DHLLogo from '../icon/dhl-logo'
import DashboardIcon from '../icon/dashboard-icon.svg'
import VoiceIcon from '../icon/voice-icon'
import StatisticsIcon from '../icon/statistics-icon'
import LogIcon from '../icon/log-icon'

export default function Sidebar({ tab, setTab }) {

    const handleSwitchTab = (tab) => {
        setTab(tab);
    }

    return (
        <View style={{ width: '100%', borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.5)'}} className={styles.sidebar}>
            <View style={{ padding: 20, flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <TouchableHighlight underlayColor={'#ffffff'} className={styles.sidebar_icon} onPress={() => handleSwitchTab(0)}>
                    <DashboardIcon width={'40'} height={'40'} fill={tab === 0 ? '#F29E7D' : '#2B5C64'} />
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'#ffffff'} className={styles.sidebar_icon} onPress={() => handleSwitchTab(1)}>
                    <VoiceIcon tab={tab} size={'40'} />
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'#ffffff'} className={styles.sidebar_icon} onPress={() => handleSwitchTab(2)}>
                    <StatisticsIcon tab={tab} size={'40'} />
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'#ffffff'} className={styles.sidebar_icon} onPress={() => handleSwitchTab(3)}>
                    <LogIcon tab={tab} size={'40'} />
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // sidebar: {
    //     backdropFilter: blur(20),
    //     width: '9%',
    // },

    logo: {
        width: '100%',
        height: '7.5%',
        marginTop: '3%',
        alignItems: 'center',
    },

    sidebar_menu: {
        width: 40,
    },

    sidebar_icon: {
        // width: '4%', 
        // height: '4%',
    },

    select: {
        backgroundColor: '#F29E7D',
    },

    // sidebar-icon:not(:last-child) {
    //     margin-bottom: 8rem,
    // }
})