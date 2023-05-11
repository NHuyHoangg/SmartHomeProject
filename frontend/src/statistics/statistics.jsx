import React, { useState, useEffect} from "react";

// import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from "axios";
import "./statistics.css";
// import ChartExample from "./chart";

export default function Statistics ( {API_URL, tempData, humiData}) {
    
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

    function classNames(...args) {
        return args.filter(Boolean).join(' ')
    }

    return (
        <div className="Statistics">
            <div className="tabs col-3 offset-1 bg-container text-main">
                <ul className="">
                    <li className={classNames("temp-tab", activeTab === "temp" ? "active" : "")} onClick={handleTemp}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Nhiệt độ
                    </li>
                    <li className={classNames("humi-tab", activeTab === "humi" ? "active" : "")} onClick={handleHumi}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Độ ẩm
                    </li>
                    <li className={classNames("gas-tab", activeTab === "gas" ? "active" : "")} onClick={handleGas}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Nồng độ khí gas
                    </li>
                </ul>
            </div>
            <div className="stat-container bg-container col-11 offset-4">                
                <ChartExample data={tempData}/>
                {/* <ChartExample data={humiData}/> */}
            </div>
        </div>
    )
}