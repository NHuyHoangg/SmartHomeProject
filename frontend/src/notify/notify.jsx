import React, { useState, useEffect } from "react";
import "./notify.css";

function Notify () {
    
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
            <div className="notify-container bg-container col-11 offset-1">
                <div className="tabs text-main my-5 mx-5">
                    <ul className="list-inline">
                        <li className={classNames("detect-tab list-inline-item", activeTab === "detect" ? "active" : "")} onClick={handleDetect}>
                            Nhận diện người
                        </li>
                        <li className={classNames("gas-tab list-inline-item", activeTab === "gas" ? "active" : "")} onClick={handleGas}>
                            Nồng độ khí gas
                        </li>
                        <li className={classNames("light-tab list-inline-item", activeTab === "light" ? "active" : "")} onClick={handleLight}>
                            Đèn
                        </li>
                        <li className={classNames("curtain-tab list-inline-item", activeTab === "curtain" ? "active" : "")} onClick={handleCurtain}>
                            Rèm cửa
                        </li>
                        <li className={classNames("AC-tab list-inline-item", activeTab === "AC" ? "active" : "")} onClick={handleAC}>
                            Điều hoà
                        </li>
                    </ul>
                </div>
                
                <div className={classNames("log-detect col-8 mb-5", activeTab === "detect" ? "active" : "")}>
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
                                <td>Phát hiện có người.</td>
                                <td className="td-center">10:15</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Phát hiện có người.</td>
                                <td className="td-center">09:49</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Phát hiện có người.</td>
                                <td className="td-center">09:26</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Phát hiện có người.</td>
                                <td className="td-center">08:37</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classNames("log-gas col-8 mb-5", activeTab === "gas" ? "active" : "")}>
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
                                <td>Nồng độ khí gas vượt ngưỡng.</td>
                                <td className="td-center">10:15</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Nồng độ khí gas vượt ngưỡng.</td>
                                <td className="td-center">09:49</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Nồng độ khí gas vượt ngưỡng.</td>
                                <td className="td-center">09:26</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                            <tr>
                                <td>Nồng độ khí gas vượt ngưỡng.</td>
                                <td className="td-center">08:37</td>
                                <td className="td-center">16/02/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classNames("log-light col-8 mb-5", activeTab === "light" ? "active" : "")}>
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
                </div>
                <div className={classNames("log-curtain col-8 mb-5", activeTab === "curtain" ? "active" : "")}>
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
                </div>
                <div className={classNames("log-AC col-8 mb-5", activeTab === "AC" ? "active" : "")}>
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
                </div>
            </div>
        </div>
    )
}

export default Notify;