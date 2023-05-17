import { useState } from "react";
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import DHLLogo from '../icon/dhl-logo'
import DashboardIcon from '../icon/dashboard-icon'
import VoiceIcon from '../icon/voice-icon'
import StatisticsIcon from '../icon/statistics-icon'
import LogIcon from '../icon/log-icon'

export default function Sidebar({ tab, setTab }) {

    const handleSwitchTab = (tab) => {
        setTab(tab);
    }

    return (
        <View style={{ position: 'absolute', bottom: 0, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.5)'}} className={styles.sidebar}>
            <View style={{ padding: 20, flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View id="tab-dashboard" className={styles.sidebar_icon} onClick={() => handleSwitchTab(0)}>
                    <DashboardIcon tab={tab} size={'40'} />
                </View>
                <View id="tab-voice" className={styles.sidebar_icon} onClick={() => handleSwitchTab(1)}>
                    <VoiceIcon tab={tab} size={'40'} />
                </View>
                <View id="tab-statistic" className={styles.sidebar_icon} onClick={() => handleSwitchTab(2)}>
                    <StatisticsIcon tab={tab} size={'40'} />
                </View>
                <View id="tab-mess" className={styles.sidebar_icon} onClick={() => handleSwitchTab(3)}>
                    <LogIcon tab={tab} size={'40'} />
                </View>
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
        margin: 5,
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