import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
// import "./notify.css";

export default function Log() {

    const CONTENT = {
        tableHead: ['Nội dung', 'Thời gian', 'Ngày'],
        tableData: [
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
            ['Phát hiện có người.', '10:15', '16/02/2023'],
        ],
    };

    const [activeTab, setActiveTab] = useState("detect");

    const [getLog, setGetLog] = useState(true);

    // setTimeout(()=>{
    //     setGetLog(!getLog);
    // }, 5000);

    useEffect(() => {

    }, [getLog])

    const handleDetect = () => {
        setActiveTab("detect");
    };
    const handleGas = () => {
        setActiveTab("gas");
    };
    const handleLight = () => {
        setActiveTab("light");
    };
    const handleCurtain = () => {
        setActiveTab("curtain");
    };
    const handleAC = () => {
        setActiveTab("AC");
    };

    // function classNames(...args) {
    //     return args.filter(Boolean).join(' ')
    // }

    return (
        <View className={styles.body}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View className={[styles.tabs, activeTab === "detect" ? styles.active : ""]} onClick={handleDetect}>
                        <Text className={[styles.tab_text, activeTab === "detect" ? styles.active : ""]}>Nhận diện người</Text>
                    </View>
                    <View className={[styles.tabs, activeTab === "gas" ? styles.active : ""]} onClick={handleGas}>
                        <Text className={[styles.tab_text, activeTab === "gas" ? styles.active : ""]}>Nồng độ khí gas</Text>
                    </View>
                    <View className={[styles.tabs, activeTab === "light" ? styles.active : ""]} onClick={handleLight}>
                        <Text className={[styles.tab_text, activeTab === "light" ? styles.active : ""]}>Đèn</Text>
                    </View>
                    <View className={[styles.tabs, activeTab === "curtain" ? styles.active : ""]} onClick={handleCurtain}>
                        <Text className={[styles.tab_text, activeTab === "curtain" ? styles.active : ""]}>Rèm cửa</Text>
                    </View>
                    <View className={[styles.tabs, activeTab === "AC" ? styles.active : ""]} onClick={handleAC}>
                        <Text className={[styles.tab_text, activeTab === "AC" ? styles.active : ""]}>Điều hoà</Text>
                    </View>
                </View>
            </ScrollView>
            <ScrollView style={{ maxHeight: 550, marginTop: 30 }} className={styles.stat_container}>
                {activeTab === "detect" ?
                    <View>
                        <Table borderStyle={{ borderWidth: 1 }} textStyle={{ fontSize: 50}}>
                            <Row
                                data={CONTENT.tableHead}
                                flexArr={[2, 1, 1]}
                                style={styles.head}
                                textStyle={styles.text_header}
                            />
                            <TableWrapper style={styles.wrapper}>
                                <Rows
                                    data={CONTENT.tableData}
                                    flexArr={[2, 1, 1]}
                                    style={styles.row}
                                    textStyle={styles.text}
                                />
                            </TableWrapper>
                        </Table>
                    </View> : ""}

                {/* <View className={classNames("log-gas col-10 my-5",activeTab === "gas" ? "active" : "")}>
                    <table class="table text-container table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nội dung</th>
                                <th className="td-center" scope="col">Thời gian</th>
                                <th className="td-center" scope="col">Ngày</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nồng độ khí gas đạt 661 ppm, vượt ngưỡng cho phép.</td>
                                <td className="td-center">10:15</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Nồng độ khí gas đạt 661 ppm, vượt ngưỡng cho phép.</td>
                                <td className="td-center">09:49</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Nồng độ khí gas đạt 661 ppm, vượt ngưỡng cho phép.</td>
                                <td className="td-center">09:26</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Nồng độ khí gas đạt 661 ppm, vượt ngưỡng cho phép.</td>
                                <td className="td-center">08:37</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </View>
                <View className={classNames("log-light col-10 my-5",activeTab === "light" ? "active" : "")}>
                    <table class="table text-container table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nội dung</th>
                                <th className="td-center" scope="col">Thời gian</th>
                                <th className="td-center" scope="col">Ngày</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Đèn được tắt.</td>
                                <td className="td-center">10:15</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Đèn được bật.</td>
                                <td className="td-center">09:49</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Đèn được tắt.</td>
                                <td className="td-center">09:26</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Đèn được bật.</td>
                                <td className="td-center">08:37</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </View>
                <View className={classNames("log-curtain col-10 my-5",activeTab === "curtain" ? "active" : "")}>
                    <table class="table text-container table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nội dung</th>
                                <th className="td-center" scope="col">Thời gian</th>
                                <th className="td-center" scope="col">Ngày</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Đóng rèm cửa.</td>
                                <td className="td-center">10:15</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Mở rèm cửa.</td>
                                <td className="td-center">09:49</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Đóng rèm cửa.</td>
                                <td className="td-center">09:26</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Mở rèm cửa.</td>
                                <td className="td-center">08:37</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </View>
                <View className={classNames("log-AC col-10 my-5",activeTab === "AC" ? "active" : "")}>
                    <table class="table text-container table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nội dung</th>
                                <th className="td-center" scope="col">Thời gian</th>
                                <th className="td-center" scope="col">Ngày</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Điều hoà được tắt.</td>
                                <td className="td-center">10:15</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Điều hoà được bật.</td>
                                <td className="td-center">09:49</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Điều hoà được tắt.</td>
                                <td className="td-center">09:26</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Điều hoà được bật.</td>
                                <td className="td-center">08:37</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </View> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tabs: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 700,
    },

    tab_text: {
        fontSize: 20,
        fontWeight: 700,
        color: '#2B5C64'
    },

    active: {
        color: '#FFFFFF',
        backgroundColor: '#F29E7D',
    },

    stat_container: {
        marginTop: 20,
        margin: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },

    head: { 
        height: 40, 
        backgroundColor: '#2B5C64',
    },

    text_header: {
        color: '#ffffff',
        fontWeight: 700,
        textAlign: 'center',
        fontFamily: 'Nunito'
    },

    wrapper: { 
        flexDirection: 'row',
    },

    title: { 
        flex: 1, 
        backgroundColor: '#2ecc71' 
    },

    row: { 
        backgroundColor: '#EDB544',
        fontFamily: 'Nunito'
    },

    text: { 
        textAlign: 'center',
        fontFamily: 'Nunito',
        padding: 10,
        fontWeight: 500,
    },

    // ul: {
    //     position: absolute;
    //     width: 100%;
    //     top: 50%;
    //     transform: translate(0, -50%);
    // },

    // li: {
    //     backdrop-filter: blur(7.5px);
    //     font-size: 2rem;
    //     padding: 2rem;
    //     border-radius: 20px;
    //     font-weight: 700;
    //     cursor: pointer;
    //     border: 3px solid var(--color-main);
    //     margin-top: 2rem;
    //     margin-bottom: 2rem;
    // },

    // li:hover: {
    //     background-color: var(--color-container);
    // },

    // li.active: {
    //     color: var( --color-background);
    //     background-color: var(--color-header);
    //     border: 3px solid var(--color-header)
    // },

    // .notify-container .log-detect,
    // .notify-container .log-gas,
    // .notify-container .log-light,
    // .notify-container .log-curtain,
    // .notify-container .log-AC: {
    //     display: none;
    // },

    // .notify-container .log-detect.active,
    // .notify-container .log-gas.active,
    // .notify-container .log-light.active,
    // .notify-container .log-curtain.active,
    // .notify-container .log-AC.active: {
    //     display: block;
    //     position: absolute;
    //     top: 0;
    //     bottom: 0;
    //     overflow-y: auto;
    //     left: 50%;
    //     transform: translate(-50%, 0);
    //     padding-left: 1rem;
    //     padding-right: 1rem;
    // },

    // .notify-container .log-detect.active::-webkit-scrollbar,
    // .notify-container .log-gas.active::-webkit-scrollbar,
    // .notify-container .log-light.active::-webkit-scrollbar,
    // .notify-container .log-curtain.active::-webkit-scrollbar,
    // .notify-container .log-AC.active::-webkit-scrollbar: {
    //     width: 8px;
    // },

    // .notify-container table: {
    //     font-size: 2rem;
    //     width: 100%;
    //     border-collapse: separate;
    //     border-spacing: 0 1rem;
    // },

    // .notify-container thead: {
    //     font-weight: 700;
    //     color: var(--color-main);
    // },

    // .notify-container tbody: {
    //     color: var(--color-text);
    //     font-weight: 500;
    // },

    // .notify-container .td-center: {
    //     text-align: center;
    //     width: 20%;
    // },

    // .notify-container th,
    // .notify-container td: {
    //     padding: 2rem;
    //     border-right: 1px solid var(--color-container);
    // },

    // .notify-container th: {
    //     background-color: var(--color-container);
    //     border: 1px solid var(--color-main);
    // },

    // .notify-container tbody tr:nth-child(odd) : {
    //     background-color: var(--color-header);
    // },

    // .notify-container tbody tr:nth-child(even) : {
    //     background-color: var(--color-sleepy);
    // },

    // .notify-container td:first-child: {
    //     border-left-style:solid;
    //     border-top-left-radius:20px;
    //     border-bottom-left-radius:20px;
    // },

    // .notify-container td:last-child: {
    //     border-right-style:solid;
    //     border-bottom-right-radius:20px;
    //     border-top-right-radius:20px;
    // },

    // .notify-container th:first-child: {
    //     border-left-style:solid;
    //     border-top-left-radius:20px;
    //     border-bottom-left-radius:20px;
    // },

    // .notify-container th:last-child: {
    //     border-right-style:solid;
    //     border-bottom-right-radius:20px;
    //     border-top-right-radius:20px;
    // },
})
