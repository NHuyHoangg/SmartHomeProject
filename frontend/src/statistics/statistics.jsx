import React, { useState, useEffect} from "react";

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from "axios";
import "./statistics.css";
import ChartExample from "./chart";

export default function Statistics ( {API_URL, tempData, humiData}) {
    
    const [activeTab, setActiveTab] = useState("detect");

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

    function classNames(...args) {
        return args.filter(Boolean).join(' ')
    }

    return (
        <div className="Notify">
            <div className="tabs col-3 offset-1 bg-container text-main">
                <ul className="">
                    <li className={classNames("detect-tab", activeTab === "detect" ? "active" : "")} onClick={handleDetect}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Nhận diện người
                    </li>
                    <li className={classNames("gas-tab", activeTab === "gas" ? "active" : "")} onClick={handleGas}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Nồng độ khí gas
                    </li>
                    <li className={classNames("light-tab", activeTab === "light" ? "active" : "")} onClick={handleLight}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Đèn
                    </li>
                    <li className={classNames("curtain-tab", activeTab === "curtain" ? "active" : "")} onClick={handleCurtain}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Rèm cửa
                    </li>
                    <li className={classNames("AC-tab", activeTab === "AC" ? "active" : "")} onClick={handleAC}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Điều hoà
                    </li>
                </ul>
            </div>
            <div className="notify-container bg-container col-11 offset-4">                
                <ChartExample data={tempData}/>
                {/* <ChartExample data={humiData}/> */}
            </div>
        </div>
    )
}