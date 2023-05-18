import React, { useState, useEffect } from "react";
import axios from "axios";
import "./notify.css";

function Notify ( {messages} ) {
    
    const [activeTab, setActiveTab] = useState("detect");

    const [getLog, setGetLog] = useState(true);

    // setTimeout(()=>{
    //     setGetLog(!getLog);
    // }, 5000);

    useEffect(()=>{
       
    },[getLog])

    const formatDate = (date) => {
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    function classNames(...args) {
        return args.filter(Boolean).join(' ')
    }

    return (
        <div className="Notify col-11 offset-1">
            {/* <div className="tabs col-3 offset-1 bg-container text-main">
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
            </div> */}
            <div className="notify-container bg-container">                
                <div className={classNames("log-detect col-10 my-5",activeTab === "detect" ? "active" : "")}>
                    <table class="table text-container table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nội dung</th>
                                <th className="td-center" scope="col">Thời gian</th>
                                <th className="td-center" scope="col">Ngày</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message)=>{
                                let date = new Date(Date.parse(message.time));
                                return(
                                    <tr>
                                        <td>{message.description}</td>
                                        <td className="td-center">{date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</td>
                                        <td className="td-center">{formatDate(date)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Notify;