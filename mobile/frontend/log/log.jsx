import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableHighlight } from 'react-native';
// import "./notify.css";

export default function Log({ messages }) {

    // const dataDetect = {
    //     tableHead: ['Nội dung', 'Thời gian', 'Ngày'],        
    //     tableData: [
    //         ['Phát hiện có người.', '10:15', '16/02/2023'],
    //         ['Phát hiện có người.', '10:15', '16/02/2023'],
    //         ['Phát hiện có người.', '10:15', '16/02/2023'],
    //         ['Phát hiện có người.', '10:15', '16/02/2023'],
    //     ],
    // };

    // const dataGas = {
    //     tableHead: ['Nội dung', 'Thời gian', 'Ngày'],
    //     tableData: [
    //         ['Nồng độ khí gas đạt 661 ppm, vượt ngưỡng cho phép.', '10:15', '16/02/2023'],
    //         ['Nồng độ khí gas đạt 661 ppm, vượt ngưỡng cho phép.', '10:15', '16/02/2023'],
    //         ['Nồng độ khí gas đạt 661 ppm, vượt ngưỡng cho phép.', '10:15', '16/02/2023'],
    //         ['Nồng độ khí gas đạt 661 ppm, vượt ngưỡng cho phép.', '10:15', '16/02/2023'],
    //     ],
    // };

    // const dataLight = {
    //     tableHead: ['Nội dung', 'Thời gian', 'Ngày'],
    //     tableData: [
    //         ['Đèn được tắt.', '10:15', '16/02/2023'],
    //         ['Đèn được bật.', '10:15', '16/02/2023'],
    //         ['Đèn được tắt.', '10:15', '16/02/2023'],
    //         ['Đèn được bật.', '10:15', '16/02/2023'],
    //     ],
    // };

    // const dataCurtain = {
    //     tableHead: ['Nội dung', 'Thời gian', 'Ngày'],
    //     tableData: [
    //         ['Đóng rèm cửa.', '10:15', '16/02/2023'],
    //         ['Mở rèm cửa.', '10:15', '16/02/2023'],
    //         ['Đóng rèm cửa.', '10:15', '16/02/2023'],
    //         ['Mở rèm cửa.', '10:15', '16/02/2023'],
    //     ],
    // };

    // const dataAC = {
    //     tableHead: ['Nội dung', 'Thời gian', 'Ngày'],
    //     tableData: [
    //         ['Điều hoà được tắt.', '10:15', '16/02/2023'],
    //         ['Đèn được bật.', '10:15', '16/02/2023'],
    //         ['Điều hoà được tắt.', '10:15', '16/02/2023'],
    //         ['Đèn được bật.', '10:15', '16/02/2023'],
    //     ],
    // };

    const [activeTab, setActiveTab] = useState("detect");

    const [getLog, setGetLog] = useState(true);

    // setTimeout(()=>{
    //     setGetLog(!getLog);
    // }, 5000);

    useEffect(() => {

    }, [getLog])

    const formatDate = (date) => {
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    // const handleDetect = () => {
    //     setActiveTab("detect");
    // };
    // const handleGas = () => {
    //     setActiveTab("gas");
    // };
    // const handleLight = () => {
    //     setActiveTab("light");
    // };
    // const handleCurtain = () => {
    //     setActiveTab("curtain");
    // };
    // const handleAC = () => {
    //     setActiveTab("AC");
    // };

    // function classNames(...args) {
    //     return args.filter(Boolean).join(' ')
    // }

    return (
        <View className={styles.body}>
            <ScrollView style={{ marginTop: 30 }} className={styles.stat_container}>
                {activeTab === "detect" ?
                    // <View>
                    //     <Table borderStyle={{ borderWidth: 1 }}>
                    //         <Row
                    //             data={dataDetect.tableHead}
                    //             flexArr={[3, 1.5, 2]}
                    //             style={styles.head}
                    //             textStyle={styles.text_header}
                    //         />
                    //         <TableWrapper style={styles.wrapper}>
                    //             <Rows
                    //                 data={dataDetect.tableData}
                    //                 flexArr={[3, 1.5, 2]}
                    //                 style={styles.row}
                    //                 textStyle={styles.text}
                    //             />
                    //         </TableWrapper>
                    //     </Table>
                    // </View> 
                    <View>
                        <DataTable style={{ borderWidth: 1 }}>
                            <DataTable.Header style={{ backgroundColor: '#2B5C64', borderWidth: 1 }}>
                                <DataTable.Title textStyle={styles.text_header}>Nội dung</DataTable.Title>
                                <DataTable.Title numeric textStyle={styles.text_header}>Thời gian</DataTable.Title>
                                {/* <DataTable.Title numeric textStyle={styles.text_header}>Ngày</DataTable.Title> */}
                            </DataTable.Header>
                            {messages.map((message) => {
                                let date = new Date(Date.parse(message.time));
                                return (
                                    <DataTable.Row style={{ backgroundColor: '#EDB544', borderWidth: 1 }}>
                                        <DataTable.Cell>{message.description}</DataTable.Cell>
                                        <DataTable.Cell numeric textStyle={styles.text}>{date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</DataTable.Cell>
                                        {/* <DataTable.Cell numeric textStyle={styles.text}>{formatDate(date)}</DataTable.Cell> */}
                                    </DataTable.Row>
                                )
                            })}
                        </DataTable>
                    </View>
                    : ""}
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
        fontSize: 20
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
    },

    text: {
        textAlign: 'center',
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
