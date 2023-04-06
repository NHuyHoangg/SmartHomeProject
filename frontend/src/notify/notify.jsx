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
                <div className={classNames("log-detect col-8 my-5", activeTab === "detect" ? "active" : "")}>
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
                <div className={classNames("log-gas col-8 my-5", activeTab === "gas" ? "active" : "")}>
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
                </div>
                <div className={classNames("log-light col-8 my-5", activeTab === "light" ? "active" : "")}>
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
                <div className={classNames("log-curtain col-8 my-5", activeTab === "curtain" ? "active" : "")}>
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
                <div className={classNames("log-AC col-8 my-5", activeTab === "AC" ? "active" : "")}>
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