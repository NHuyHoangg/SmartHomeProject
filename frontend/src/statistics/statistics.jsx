import React, { useState } from "react";

import "./statistics.css";
import ChartExample from "./chart";

export default function Statistics ( {tempData, humiData, lightData, gasData}) {
    
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
                    <li className={classNames("light-tab", activeTab === "light" ? "active" : "")} onClick={handleLight}>
                        <i class="fa-solid fa-caret-right fa-lg me-3"></i>
                        Cường độ ánh sáng
                    </li>
                </ul>
            </div>
            <div className="stat-container bg-container col-11 offset-4">                
                {activeTab === 'temp' && <ChartExample data={tempData} type={activeTab} />}
                {activeTab === 'humi' && <ChartExample data={humiData} type={activeTab} />}
                {activeTab === 'gas' && <ChartExample data={gasData} type={activeTab} />}
                {activeTab === 'light' && <ChartExample data={lightData} type={activeTab} />}
            </div>
        </div>
    )
}