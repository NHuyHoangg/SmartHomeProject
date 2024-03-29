import {useState, useEffect} from 'react';
import React from "react";
import axios from "axios";

import "./dashboard.css";
import Clear  from "../weatherCode/clear"
import ClearNight from '../weatherCode/clear-night';
import CloudyDay from '../weatherCode/cloudy-day';
import CloudyNight from '../weatherCode/cloudy-night';
import FoggyDay from '../weatherCode/foggy-day';
import FoggyNight from '../weatherCode/foggy-night';
import SlightRainDay from '../weatherCode/slight-rain-day';
import SlightRainNight from '../weatherCode/slight-rain-night';
import Cloudy from '../weatherCode/cloudy';
import Drizzle from '../weatherCode/drizzle';
import SlightRain from '../weatherCode/slight-rain';
import ViolentRain from '../weatherCode/violent-rain'

export default function Dashboard ( 
    {API_URL, 
    currentHumi, currentTemp, currentGas, currentLight, 
    currentOutTemp, currentOutHumi, currentWeatherCode, setLoading,
    status, setStatus,
    isActiveOnAC, setIsActiveOnAC,
    isActiveOnCurtain, setIsActiveOnCurtain,
    isActiveOnLight1, setIsActiveOnLight1,
    isActiveOnLight3, setIsActiveOnLight3,
    isActiveOnLight2, setIsActiveOnLight2} ) {
    
    const [counter, setCounter] = useState(26);

    const [currStatus, setCurrStatus] = useState(Number(status));

    useEffect(()=>{
        setCurrStatus(Number(status))
    },[status])

    const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    let currentDate = new Date();

    const addCountHandler = () => {
        if (counter === 30) {
            return;
        }
        setCounter(counter + 1);
    };
    const removeCountHandler = () => {
        if (counter === 16) {
            return;
        }
        setCounter(counter - 1);
    };

    const [isActiveSettingAC, setIsActiveSettingAC] = useState(false);
    // const [isActiveControlCurtain, setIsActiveControlCurtain] = useState(false);

    const handleClickOnAC = () => {
        if (status==="2") {
            setLoading(true);
            axios.get(API_URL+ 'fan-switch')
            .then (response => {
                if (response) {
                    if (isActiveOnAC) {
                        axios.post(API_URL + 'addMessage', {
                            info: "Máy lạnh vừa được tắt."
                        })
                    } else {
                        axios.post(API_URL + 'addMessage', {
                            info: "Máy lạnh vừa được bật."
                        })
                    }
                    setIsActiveOnAC(!isActiveOnAC);
                    setLoading(false);
                }
            })
        }
    };
    const handleClickSettingAC = () => {
        setIsActiveSettingAC('setting');
    };

    const handleStatusButton = (id) => {
        setLoading(true);
        setCurrStatus(Number(id));
        axios.post(API_URL+ 'status', {id: id})
        .then (response => {
            if (response) {
                setStatus(id);
                setLoading(false);
            }
        })
    };
    const handleClickOnLight1 = () => {
        if (status === "2") {
            setLoading(true);
            axios.get(API_URL+ 'led-1-switch')
            .then (response => {
                if (response) {
                    if (isActiveOnLight1) {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 1 vừa được tắt."
                        })
                    } else {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 1 vừa được bật."
                        })
                    }
                    setIsActiveOnLight1(!isActiveOnLight1);
                    setLoading(false);
                }
            })
        }
    };

    const handleClickOnLight2 = () => {
        if (status === "2") {
            setLoading(true);
            axios.get(API_URL+ 'led-2-switch')
            .then (response => {
                if (response) {
                    if (isActiveOnLight2) {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 2 vừa được tắt."
                        })
                    } else {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 2 vừa được bật."
                        })
                    }
                    setIsActiveOnLight2(!isActiveOnLight2);
                    setLoading(false);
                }
            })
        }
    };

    const handleClickOnCurtain = () => {
        if (status === "2") {
            setLoading(true);
            axios.get(API_URL+ 'rem-switch')
            .then (response => {
                if (response) {
                    if (isActiveOnCurtain) {
                        axios.post(API_URL + 'addMessage', {
                            info: "Rèm vừa được đóng."
                        })
                    } else {
                        axios.post(API_URL + 'addMessage', {
                            info: "Rèm vừa được mở."
                        })
                    }
                    setIsActiveOnCurtain(current => !current);
                    setLoading(false);
                }
            })
        }
    };

    // const handleClickControlCurtain = () => {
    //     setIsActiveControlCurtain(current => !current);
    // };
    
    const exportWeatherIcon = () => {
        const size = '60%';
        
        switch (currentWeatherCode) {
            case 2:
                return currentDate.getHours() < 18 ? <CloudyDay size={size} />: <CloudyNight size={size}/>;
            case 3: 
                return <Cloudy size={size}/>;
            case 45: 
            case 48: 
                return currentDate.getHours() < 18 ? <FoggyDay size={size} />: <FoggyNight size={size}/>;
            case 51: 
            case 53: 
            case 55: 
                return currentDate.getHours() < 18 ? <SlightRainDay size={size} />: <SlightRainNight size={size}/>;
            case 61: 
            case 80: 
                return <Drizzle size={size}/>;
            case 63: 
            case 81: 
                return <SlightRain size={size}/>;
            case 65: 
            case 82: 
            case 95: 
            case 99: 
                return <ViolentRain size={size}/>;
            case 0: 
            case 1: 
            default:
                return currentDate.getHours() < 18 ? <Clear size={size} />: <ClearNight size={size}/>;
        }
    };

    function classNames(...args) {
        return args.filter(Boolean).join(' ')
    }

    return(
        <React.Fragment>
            <div className="col-lg-4 offset-1">
                <div className="row main-container">
                    <div className="col-6 date-container text-header">
                        <div className="bg-container container-blur container-properties text-center">
                            {days[currentDate.getDay()]}
                            <br/>
                            {currentDate.getDate()}/{currentDate.getMonth()}
                        </div>
                    </div>
                    <div className="col-6 date-container text-header">
                        <div className="bg-container container-blur container-properties">
                            <div className="w-25 text-center">{currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                        </div>
                    </div>
                    <div className="col-12 weather-container">
                        <div className="bg-container container-blur container-properties d-flex align-items-center">
                            <div className="w-50 d-flex justify-content-center">
                                {exportWeatherIcon(currentWeatherCode)}
                            </div>
                            <div className="w-50">
                                <div className="location ms-5 mb-4 d-flex">
                                    <svg width="20px" height="20px" viewBox="0 0 512 512">
                                        <title>location-filled</title>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="location-outline" fill="#222C34" transform="translate(106.666667, 42.666667)">
                                                <path d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,176.537017 291.413333,202.026667 278.683512,224.008666 C270.196964,238.663333 227.080238,313.32711 149.333333,448 C71.5864284,313.32711 28.4697022,238.663333 19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,85.3333333 C113.987109,85.3333333 85.3333333,113.987109 85.3333333,149.333333 C85.3333333,184.679557 113.987109,213.333333 149.333333,213.333333 C184.679557,213.333333 213.333333,184.679557 213.333333,149.333333 C213.333333,113.987109 184.679557,85.3333333 149.333333,85.3333333 Z" id="Combined-Shape"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="ms-2">Ngoài trời</div>      
                                </div>
                                <div className="ms-4 d-flex align-items-center justify-content-start mb-3">
                                    <svg width="20%" height="20%" viewBox="0 0 32 32">
                                        <g id="Layer_10">
                                            <g><path d="M23,24c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-2.3,1.1-4.4,3-5.7V5c0-2.2,1.8-4,4-4s4,1.8,4,4v13.3    C21.9,19.6,23,21.7,23,24z" fill="#F29E7D"/></g>
                                            <g><path d="M20,24c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-1.9,1.3-3.4,3-3.9V13c0-0.5,0.5-1,1-1s1,0.5,1,1v7.1    C18.7,20.6,20,22.1,20,24z" fill="#EDB544"/></g>
                                        </g>
                                    </svg>
                                    <div className="ms-4">{
                                        currentOutTemp === '--'? 
                                        currentOutTemp: Math.round(currentOutTemp)}°C
                                    </div>
                                </div>
                                <div className=" ms-4 d-flex align-items-center justify-content-start">
                                    <svg width="20%" height="20%" viewBox="0 0 1024 1024">
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M339.7 882.5C196.6 882.5 80.2 766.1 80.2 623c0-133.2 204.8-395.1 228.2-424.5 5.8-7.3 14.5-11.6 23.8-11.7 9.4-0.1 18.1 3.9 24.1 11 1.5 1.8 37.7 44.8 82.2 105.2 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-21.3-29-40.9-54-55.3-72.1-69.2 92-191.2 271.5-191.2 355.4 0 108.9 88.6 197.6 197.6 197.6S537.3 731.9 537.3 623c0-17.1 13.9-31 31-31s31 13.9 31 31c-0.1 143.1-116.5 259.5-259.6 259.5z" fill="#054d85"></path>
                                            <path d="M363.7 468.8c-27.9 59.7-46.8 115.7-46.8 158.4 0 164.6 133.4 298 298 298s298-133.4 298-298c0-12.8-1.9-26.9-5.5-41.9-327.2 33.9-284.9-194.9-543.7-116.5z" fill="#0d7dd3"></path>
                                            <path d="M333.6 567.6c-38.2 239.9 123 357.7 287.3 357.7 92.8 0 144.9-12.1 199.6-78.6-261.5 20.7-428.7-99.2-486.9-279.1z" fill="#0d69af"></path>
                                            <path d="M614.9 956.1C433.5 956.1 286 808.5 286 627.2c0-173.4 283.4-532.4 295.5-547.6 5.8-7.3 14.5-11.6 23.8-11.7 9.3-0.1 18.1 3.9 24.1 11 2 2.3 49 58.2 106.8 136.6 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-31.8-43.2-60.6-79.8-79.9-103.7C517 266.1 347.9 512.3 347.9 627.2c0 147.2 119.8 267 267 267s267-119.8 267-267c0-29.7-13.2-87.9-76.4-196.2-8.6-14.8-3.6-33.7 11.2-42.3 14.8-8.6 33.7-3.6 42.3 11.2 57.1 97.9 84.8 172.2 84.8 227.4 0 181.3-147.6 328.8-328.9 328.8z" fill="#054d85"></path>
                                        </g>
                                    </svg>
                                    <div className="ms-4">{
                                        currentOutHumi === '--'? 
                                        currentOutHumi :currentOutHumi[currentDate.getHours()]}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 weather-container">
                        <div className="bg-container container-blur container-properties d-flex align-items-center">
                            <div className="w-50 d-flex justify-content-center">
                                <svg width="50%" height="50%" viewBox="0 0 32 32" >
                                    <g>
                                        <path fill="#F2C99E" d="M30,9L15,3L7.182,5.606V1c0-0.552-0.448-1-1-1H1C0.448,0,0,0.448,0,1v28c0,1.657,1.343,3,3,3h26
                                            c1.657,0,3-1.343,3-3V9H30z"/>
                                        <polygon fill="#C9483A" points="15,0 17,0 32,6 32,9 30,9 15,3 0,8 0,5 	"/>
                                        <path fill="#F9E0BD" d="M27,32H3c-1.657,0-3-1.343-3-3V1c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v5.333L15,3l15,6v20
                                            C30,30.657,28.657,32,27,32z"/>
                                        <path fill="#98D3BC" d="M11,26H7v-6h4V26z M11,10H7v6h4V10z M23,10h-4v6h4V10z"/>
                                        <path fill="#D97360" d="M25,32h-8V21c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V32z M13,25v-4c0-0.552-0.448-1-1-1
                                            h-1v6h1C12.552,26,13,25.552,13,25z M7,20H6c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h1V20z M13,15v-4c0-0.552-0.448-1-1-1h-1v6
                                            h1C12.552,16,13,15.552,13,15z M7,10H6c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h1V10z M25,15v-4c0-0.552-0.448-1-1-1h-1v6h1
                                            C24.552,16,25,15.552,25,15z M19,10h-1c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h1V10z M0,8l15-5l15,6V6L15,0L0,5V8z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="w-50">
                                <div className="location ms-5 mb-4 d-flex">
                                    <svg width="20px" height="20px" viewBox="0 0 512 512">
                                        <title>location-filled</title>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="location-outline" fill="#222C34" transform="translate(106.666667, 42.666667)">
                                                <path d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,176.537017 291.413333,202.026667 278.683512,224.008666 C270.196964,238.663333 227.080238,313.32711 149.333333,448 C71.5864284,313.32711 28.4697022,238.663333 19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,85.3333333 C113.987109,85.3333333 85.3333333,113.987109 85.3333333,149.333333 C85.3333333,184.679557 113.987109,213.333333 149.333333,213.333333 C184.679557,213.333333 213.333333,184.679557 213.333333,149.333333 C213.333333,113.987109 184.679557,85.3333333 149.333333,85.3333333 Z" id="Combined-Shape"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    
                                    <div className="ms-2">Trong nhà</div>      
                                </div>
                                <div className="ms-4 d-flex align-items-center justify-content-start mb-3">
                                    <svg width="20%" height="20%" viewBox="0 0 32 32">
                                        <g id="Layer_10">
                                            <g><path d="M23,24c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-2.3,1.1-4.4,3-5.7V5c0-2.2,1.8-4,4-4s4,1.8,4,4v13.3    C21.9,19.6,23,21.7,23,24z" fill="#F29E7D"/></g>
                                            <g><path d="M20,24c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-1.9,1.3-3.4,3-3.9V13c0-0.5,0.5-1,1-1s1,0.5,1,1v7.1    C18.7,20.6,20,22.1,20,24z" fill="#EDB544"/></g>
                                        </g>
                                    </svg>
                                    <div className="ms-4">{currentTemp}°C
                                    </div>
                                </div>
                                <div className=" ms-4 d-flex align-items-center justify-content-start">
                                    <svg width="20%" height="20%" viewBox="0 0 1024 1024">
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M339.7 882.5C196.6 882.5 80.2 766.1 80.2 623c0-133.2 204.8-395.1 228.2-424.5 5.8-7.3 14.5-11.6 23.8-11.7 9.4-0.1 18.1 3.9 24.1 11 1.5 1.8 37.7 44.8 82.2 105.2 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-21.3-29-40.9-54-55.3-72.1-69.2 92-191.2 271.5-191.2 355.4 0 108.9 88.6 197.6 197.6 197.6S537.3 731.9 537.3 623c0-17.1 13.9-31 31-31s31 13.9 31 31c-0.1 143.1-116.5 259.5-259.6 259.5z" fill="#054d85"></path>
                                            <path d="M363.7 468.8c-27.9 59.7-46.8 115.7-46.8 158.4 0 164.6 133.4 298 298 298s298-133.4 298-298c0-12.8-1.9-26.9-5.5-41.9-327.2 33.9-284.9-194.9-543.7-116.5z" fill="#0d7dd3"></path>
                                            <path d="M333.6 567.6c-38.2 239.9 123 357.7 287.3 357.7 92.8 0 144.9-12.1 199.6-78.6-261.5 20.7-428.7-99.2-486.9-279.1z" fill="#0d69af"></path>
                                            <path d="M614.9 956.1C433.5 956.1 286 808.5 286 627.2c0-173.4 283.4-532.4 295.5-547.6 5.8-7.3 14.5-11.6 23.8-11.7 9.3-0.1 18.1 3.9 24.1 11 2 2.3 49 58.2 106.8 136.6 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-31.8-43.2-60.6-79.8-79.9-103.7C517 266.1 347.9 512.3 347.9 627.2c0 147.2 119.8 267 267 267s267-119.8 267-267c0-29.7-13.2-87.9-76.4-196.2-8.6-14.8-3.6-33.7 11.2-42.3 14.8-8.6 33.7-3.6 42.3 11.2 57.1 97.9 84.8 172.2 84.8 227.4 0 181.3-147.6 328.8-328.9 328.8z" fill="#054d85"></path>
                                        </g>
                                    </svg>
                                    <div className="ms-4">{currentHumi}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="col">
                <div className="row g-0 main-container ps-3 pe-3">
                    <div className="col-3 gas-container ps-2 pe-2">
                        <div className="bg-container container-blur container-properties">
                            <div className="title text-header p-5">Nồng độ khí gas</div>
                            <div className="d-flex justify-content-center">
                                <svg width="50%" height="50%" viewBox="-33 0 255 255">
                                    <defs>
                                        <linearGradient id="linear-gradient-1" gradientUnits="userSpaceOnUse" x1="94.141" y1="255" x2="94.141" y2="0.188">
                                        <stop offset="0" stop-color="#ff4c0d"/>
                                        <stop offset="1" stop-color="#fc9502"/>
                                        </linearGradient>
                                    </defs>
                                    <g id="fire">
                                        <path d="M187.899,164.809 C185.803,214.868 144.574,254.812 94.000,254.812 C42.085,254.812 -0.000,211.312 -0.000,160.812 C-0.000,154.062 -0.121,140.572 10.000,117.812 C16.057,104.191 19.856,95.634 22.000,87.812 C23.178,83.513 25.469,76.683 32.000,87.812 C35.851,94.374 36.000,103.812 36.000,103.812 C36.000,103.812 50.328,92.817 60.000,71.812 C74.179,41.019 62.866,22.612 59.000,9.812 C57.662,5.384 56.822,-2.574 66.000,0.812 C75.352,4.263 100.076,21.570 113.000,39.812 C131.445,65.847 138.000,90.812 138.000,90.812 C138.000,90.812 143.906,83.482 146.000,75.812 C148.365,67.151 148.400,58.573 155.999,67.813 C163.226,76.600 173.959,93.113 180.000,108.812 C190.969,137.321 187.899,164.809 187.899,164.809 Z" id="path-1" fill="url(#linear-gradient-1)" fill-rule="evenodd"/>
                                        <path d="M94.000,254.812 C58.101,254.812 29.000,225.711 29.000,189.812 C29.000,168.151 37.729,155.000 55.896,137.166 C67.528,125.747 78.415,111.722 83.042,102.172 C83.953,100.292 86.026,90.495 94.019,101.966 C98.212,107.982 104.785,118.681 109.000,127.812 C116.266,143.555 118.000,158.812 118.000,158.812 C118.000,158.812 125.121,154.616 130.000,143.812 C131.573,140.330 134.753,127.148 143.643,140.328 C150.166,150.000 159.127,167.390 159.000,189.812 C159.000,225.711 129.898,254.812 94.000,254.812 Z" id="path-2" fill="#fc9502" fill-rule="evenodd"/>
                                        <path d="M95.000,183.812 C104.250,183.812 104.250,200.941 116.000,223.812 C123.824,239.041 112.121,254.812 95.000,254.812 C77.879,254.812 69.000,240.933 69.000,223.812 C69.000,206.692 85.750,183.812 95.000,183.812 Z" id="path-3" fill="#fce202" fill-rule="evenodd"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="mt-5 text d-flex justify-content-center">{currentGas} ppm</div>
                        </div>
                    </div>
                    <div className="col-7 gas-container ps-2 pe-2">
                        <div className={classNames("no-settingAC bg-container container-blur container-properties", isActiveSettingAC ? "setting" : "")}>
                            <div className="title p-5 pb-4 text-header">Điều hòa</div>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="button me-4" onClick={removeCountHandler}>
                                    <svg width="55px" height="55px" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7Z" fill="#2B5C64"/>
                                    </svg>
                                </div>
                                <div className="text-main celsius p-4">{counter}°C</div>
                                <div className="button ms-4" onClick={addCountHandler}>
                                    <svg width="5.5rem" height="5.5rem" viewBox="0 0 20 20">
                                        <path fill="#2B5C64" fill-rule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm14 .069a1 1 0 01-1 1h-2.931V14a1 1 0 11-2 0v-2.931H6a1 1 0 110-2h3.069V6a1 1 0 112 0v3.069H14a1 1 0 011 1z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="row g-0 mt-2">
                                <div className="col">
                                    <div className="d-flex justify-content-center">
                                        <div className={classNames("button p-3 bg-main", isActiveOnAC ? "active" : "")} onClick={handleClickOnAC}>
                                            <svg fill="#FFFFFF" height="4.2rem" width="4.2rem" viewBox="0 0 297 297">
                                                <path d="M293.983,118.572c-0.989-4.833-2.213-9.581-3.659-14.231c-0.362-1.162-0.737-2.319-1.126-3.469
                                                    c-0.778-2.3-1.612-4.575-2.498-6.823c-0.443-1.124-0.9-2.241-1.369-3.352c-1.409-3.331-2.936-6.6-4.576-9.802
                                                    c-1.093-2.134-2.237-4.239-3.429-6.312c-5.96-10.365-13.135-19.943-21.331-28.539c-1.639-1.719-3.319-3.399-5.038-5.038
                                                    c-8.596-8.196-18.174-15.371-28.539-21.331c-2.073-1.192-4.178-2.336-6.312-3.429c-3.202-1.64-6.471-3.167-9.802-4.576
                                                    c-1.11-0.47-2.228-0.926-3.352-1.369c-2.248-0.886-4.523-1.72-6.823-2.498c-1.15-0.389-2.306-0.765-3.469-1.126
                                                    c-4.65-1.446-9.398-2.67-14.231-3.659C168.761,1.039,158.752,0,148.5,0s-20.261,1.039-29.928,3.017
                                                    c-4.833,0.989-9.581,2.213-14.231,3.659c-1.162,0.362-2.319,0.737-3.469,1.126c-2.3,0.778-4.575,1.612-6.823,2.498
                                                    c-1.124,0.443-2.241,0.9-3.352,1.369c-3.331,1.409-6.6,2.936-9.802,4.576c-2.134,1.093-4.239,2.237-6.312,3.429
                                                    C64.218,25.635,54.64,32.81,46.044,41.005c-1.719,1.639-3.399,3.319-5.038,5.038C32.81,54.64,25.635,64.218,19.675,74.583
                                                    c-1.192,2.073-2.336,4.178-3.429,6.312c-1.64,3.202-3.167,6.471-4.576,9.802c-0.47,1.11-0.926,2.228-1.369,3.352
                                                    c-0.886,2.248-1.72,4.523-2.498,6.823c-0.389,1.15-0.765,2.306-1.126,3.469c-1.446,4.65-2.67,9.398-3.659,14.231
                                                    C1.039,128.239,0,138.248,0,148.5c0,21.785,4.691,42.474,13.118,61.113c0.991,2.193,2.035,4.357,3.128,6.492
                                                    c1.64,3.202,3.393,6.336,5.253,9.398c1.24,2.041,2.528,4.05,3.863,6.025c0.667,0.988,1.346,1.967,2.036,2.937
                                                    c1.38,1.941,2.806,3.847,4.276,5.717c1.47,1.87,2.983,3.704,4.539,5.5c1.556,1.796,3.154,3.555,4.793,5.274
                                                    c1.639,1.719,3.319,3.399,5.038,5.038c8.596,8.196,18.174,15.371,28.539,21.331c2.073,1.192,4.178,2.335,6.312,3.429
                                                    c3.202,1.64,6.471,3.167,9.802,4.576c1.11,0.47,2.228,0.926,3.352,1.369c2.248,0.886,4.523,1.72,6.823,2.498
                                                    c1.15,0.389,2.306,0.765,3.469,1.126c4.65,1.446,9.398,2.67,14.231,3.659c9.667,1.978,19.676,3.017,29.928,3.017
                                                    s20.261-1.039,29.928-3.017c4.833-0.989,9.581-2.213,14.231-3.659c1.162-0.362,2.319-0.737,3.469-1.126
                                                    c2.3-0.778,4.575-1.612,6.823-2.498c1.124-0.443,2.241-0.9,3.352-1.369c3.331-1.409,6.6-2.936,9.802-4.576
                                                    c2.134-1.093,4.239-2.237,6.312-3.429c10.365-5.96,19.943-13.135,28.539-21.331c1.719-1.639,3.399-3.319,5.038-5.038
                                                    c1.639-1.719,3.237-3.478,4.793-5.274c1.556-1.796,3.07-3.63,4.539-5.5c1.47-1.87,2.895-3.776,4.276-5.717
                                                    c0.69-0.97,1.369-1.949,2.036-2.937c1.334-1.975,2.622-3.984,3.863-6.025c1.86-3.062,3.613-6.196,5.253-9.398
                                                    c1.093-2.135,2.136-4.299,3.128-6.492C292.309,190.974,297,170.285,297,148.5C297,138.248,295.961,128.239,293.983,118.572z
                                                    M134.167,49.538c0-7.698,6.302-13.938,14-13.938s14,6.24,14,13.938v42.095c0,7.698-6.302,13.938-14,13.938s-14-6.24-14-13.938
                                                    V49.538z M243.486,152.237c-2.609,49.571-43.087,89.358-92.696,91.101c-54.66,1.921-99.868-41.992-99.868-96.236
                                                    c0-29.416,13.742-55.79,34.349-73.467c8.148-6.99,20.743-1.228,20.743,9.507v0c0,3.708-1.662,7.201-4.485,9.606
                                                    c-15.281,13.024-25.284,32.549-25.284,54.353c0,39.125,32.05,70.956,71.175,70.956c39.125,0,70.919-31.831,70.919-70.956
                                                    c0-21.124-8.839-40.118-23.92-53.128c-2.802-2.417-4.45-5.903-4.45-9.603v0c0-10.838,12.8-16.648,20.923-9.473
                                                    C232.068,93.602,245.105,121.468,243.486,152.237z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3 text">Bật/Tắt</div>
                                </div>
                                <div className="col">
                                    <div className="d-flex justify-content-center">
                                        <div className={classNames("button p-3 bg-main", isActiveSettingAC ? "setting" : "")} onClick={handleClickSettingAC}>
                                            <svg width="4rem" height="4rem" viewBox="0 0 24 24" >
                                                <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#FFFFFF"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3 text ps-5 pe-5">Cài đặt</div>
                                </div>
                            </div>
                        </div>
                        <div className={classNames("settingAC bg-container container-blur container-properties", isActiveSettingAC ? "setting" : "")}>
                            <div className="title p-5 pb-4 text-header">Điều hòa</div>
                            <form className='text p-5 d-flex flex-column justify-content-center'>
                                <div className='pb-5 d-flex align-items-center justify-content-between'>
                                    Nhiệt độ tự động bật
                                    <input type="text" class="form-control" id="" placeholder="26°C"/>
                                     
                                </div>
                                <div className='pb-5 d-flex align-items-center justify-content-between'>
                                    Nhiệt độ tự động tắt
                                    <input type="text" class="form-control" id="" placeholder="32°C"/>
                                </div>
                                <button type="submit" class="mt-3 p-3 bg-header text-background">Lưu</button>
                            </form>
                        </div>
                    </div>                
                    <div className="col-2 gas-container ps-2 pe-2">
                        <div className="bg-main container-blur container-properties d-flex align-items-center justify-content-center">
                            <div>
                                <div className={classNames("p-3 button bg-background", currStatus===1 ? "active" : "")} title="Chế độ remote" onClick={()=>handleStatusButton(1)}>
                                    <svg width="5rem" height="5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={currStatus===1 ? "#FFFFFF" : "#2B5C64"}>
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-1 2H7v16h10V4zm-2 11v2h-2v-2h2zm-4 0v2H9v-2h2zm2-9v2h2v2h-2.001L13 12h-2l-.001-2H9V8h2V6h2z"></path> </g> </g>
                                    </svg>
                                </div>
                                <div className={classNames("button mt-4 p-4 bg-background", currStatus===2 ? "active" : "")} title="Chế độ sử dụng app" onClick={()=>handleStatusButton(2)}>
                                    <svg width="4rem" height="4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                        <g id="SVGRepo_iconCarrier"> <path d="M21 9.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9.5M17.3862 17.7113L15.6879 20.8653C15.4103 21.3808 15.2715 21.6386 15.1023 21.7059C14.9555 21.7643 14.7896 21.7498 14.6551 21.6668C14.5001 21.5712 14.4081 21.2933 14.2241 20.7375L11.5004 12.5113C11.3392 12.0245 11.2586 11.7812 11.3166 11.6191C11.367 11.478 11.478 11.367 11.6191 11.3166C11.7812 11.2586 12.0245 11.3392 12.5113 11.5004L20.7374 14.2241C21.2933 14.4082 21.5712 14.5002 21.6668 14.6551C21.7498 14.7897 21.7642 14.9555 21.7058 15.1024C21.6386 15.2715 21.3808 15.4103 20.8652 15.6879L17.7113 17.3862C17.6328 17.4285 17.5935 17.4497 17.5591 17.4768C17.5286 17.501 17.501 17.5286 17.4768 17.5591C17.4497 17.5935 17.4285 17.6328 17.3862 17.7113Z" stroke={currStatus===2 ? "#FFFFFF" : "#2B5C64"} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </g>
                                    </svg>
                                </div>
                                <div className={classNames("button mt-4 p-2 bg-background", currStatus===3 ? "active" : "")} title="Chế độ tự động" onClick={()=>handleStatusButton(3)}>
                                    <svg width="6rem" height="6rem" viewBox="0 0 24 24">
                                        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.18182 12.0909C8.18182 9.98455 9.89364 8.27273 12 8.27273C12.6427 8.27273 13.2536 8.43182 13.7818 8.71818L14.7109 7.78909C13.9282 7.29273 12.9991 7 12 7C9.18727 7 6.90909 9.27818 6.90909 12.0909H5L7.54545 14.6364L10.0909 12.0909H8.18182ZM16.4545 9.54545L13.9091 12.0909H15.8182C15.8182 14.1973 14.1064 15.9091 12 15.9091C11.3573 15.9091 10.7464 15.75 10.2182 15.4636L9.28909 16.3927C10.0718 16.8891 11.0009 17.1818 12 17.1818C14.8127 17.1818 17.0909 14.9036 17.0909 12.0909H19L16.4545 9.54545Z" fill={currStatus===3 ? "#FFFFFF" : "#2B5C64"}/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-2 rest-container ps-2 pe-2">
                        <div className="bg-container container-blur container-properties">
                            <div className="title text-header pt-5 ps-5 pe-5 pb-2">
                                Đèn 1
                            </div>
                            <div className="text-center pe-3 pb-2 mt-3">
                                <svg width="70%" height="70%" viewBox="0 0 22 22">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2Z" fill={isActiveOnLight1? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L18.7071 6.70711C18.3166 7.09763 17.6834 7.09763 17.2929 6.70711C16.9024 6.31658 16.9024 5.68342 17.2929 5.29289L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z" fill={isActiveOnLight1? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12Z" fill={isActiveOnLight1? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12Z" fill={isActiveOnLight1? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill={isActiveOnLight1? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12C6 13.6332 6.65387 15.1157 7.71186 16.1966C7.97971 16.4703 8.1241 16.7217 8.16867 16.9444L8.69776 19.5886C8.97833 20.9908 10.2095 22 11.6395 22H12.3605C13.7905 22 15.0217 20.9908 15.3022 19.5886L15.8313 16.9444C15.8759 16.7217 16.0203 16.4703 16.2881 16.1966C17.3461 15.1157 18 13.6332 18 12C18 8.68629 15.3137 6 12 6ZM11 16C10.4477 16 10 16.4477 10 17C10 17.5523 10.4477 18 11 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H11Z" fill={isActiveOnLight1? "#F29E7D" : "#222C34"} />
                                </svg> 
                            </div>
                            <div className='d-flex align-content-between align-items-center justify-content-center'>
                                <div className={classNames("mt-3 p-2 button bg-main", isActiveOnLight1 ? "active" : "")} onClick={handleClickOnLight1}>
                                    <svg fill="#FFFFFF" height="4.2rem" width="4.2rem" viewBox="0 0 297 297">
                                        <path d="M293.983,118.572c-0.989-4.833-2.213-9.581-3.659-14.231c-0.362-1.162-0.737-2.319-1.126-3.469
                                            c-0.778-2.3-1.612-4.575-2.498-6.823c-0.443-1.124-0.9-2.241-1.369-3.352c-1.409-3.331-2.936-6.6-4.576-9.802
                                            c-1.093-2.134-2.237-4.239-3.429-6.312c-5.96-10.365-13.135-19.943-21.331-28.539c-1.639-1.719-3.319-3.399-5.038-5.038
                                            c-8.596-8.196-18.174-15.371-28.539-21.331c-2.073-1.192-4.178-2.336-6.312-3.429c-3.202-1.64-6.471-3.167-9.802-4.576
                                            c-1.11-0.47-2.228-0.926-3.352-1.369c-2.248-0.886-4.523-1.72-6.823-2.498c-1.15-0.389-2.306-0.765-3.469-1.126
                                            c-4.65-1.446-9.398-2.67-14.231-3.659C168.761,1.039,158.752,0,148.5,0s-20.261,1.039-29.928,3.017
                                            c-4.833,0.989-9.581,2.213-14.231,3.659c-1.162,0.362-2.319,0.737-3.469,1.126c-2.3,0.778-4.575,1.612-6.823,2.498
                                            c-1.124,0.443-2.241,0.9-3.352,1.369c-3.331,1.409-6.6,2.936-9.802,4.576c-2.134,1.093-4.239,2.237-6.312,3.429
                                            C64.218,25.635,54.64,32.81,46.044,41.005c-1.719,1.639-3.399,3.319-5.038,5.038C32.81,54.64,25.635,64.218,19.675,74.583
                                            c-1.192,2.073-2.336,4.178-3.429,6.312c-1.64,3.202-3.167,6.471-4.576,9.802c-0.47,1.11-0.926,2.228-1.369,3.352
                                            c-0.886,2.248-1.72,4.523-2.498,6.823c-0.389,1.15-0.765,2.306-1.126,3.469c-1.446,4.65-2.67,9.398-3.659,14.231
                                            C1.039,128.239,0,138.248,0,148.5c0,21.785,4.691,42.474,13.118,61.113c0.991,2.193,2.035,4.357,3.128,6.492
                                            c1.64,3.202,3.393,6.336,5.253,9.398c1.24,2.041,2.528,4.05,3.863,6.025c0.667,0.988,1.346,1.967,2.036,2.937
                                            c1.38,1.941,2.806,3.847,4.276,5.717c1.47,1.87,2.983,3.704,4.539,5.5c1.556,1.796,3.154,3.555,4.793,5.274
                                            c1.639,1.719,3.319,3.399,5.038,5.038c8.596,8.196,18.174,15.371,28.539,21.331c2.073,1.192,4.178,2.335,6.312,3.429
                                            c3.202,1.64,6.471,3.167,9.802,4.576c1.11,0.47,2.228,0.926,3.352,1.369c2.248,0.886,4.523,1.72,6.823,2.498
                                            c1.15,0.389,2.306,0.765,3.469,1.126c4.65,1.446,9.398,2.67,14.231,3.659c9.667,1.978,19.676,3.017,29.928,3.017
                                            s20.261-1.039,29.928-3.017c4.833-0.989,9.581-2.213,14.231-3.659c1.162-0.362,2.319-0.737,3.469-1.126
                                            c2.3-0.778,4.575-1.612,6.823-2.498c1.124-0.443,2.241-0.9,3.352-1.369c3.331-1.409,6.6-2.936,9.802-4.576
                                            c2.134-1.093,4.239-2.237,6.312-3.429c10.365-5.96,19.943-13.135,28.539-21.331c1.719-1.639,3.399-3.319,5.038-5.038
                                            c1.639-1.719,3.237-3.478,4.793-5.274c1.556-1.796,3.07-3.63,4.539-5.5c1.47-1.87,2.895-3.776,4.276-5.717
                                            c0.69-0.97,1.369-1.949,2.036-2.937c1.334-1.975,2.622-3.984,3.863-6.025c1.86-3.062,3.613-6.196,5.253-9.398
                                            c1.093-2.135,2.136-4.299,3.128-6.492C292.309,190.974,297,170.285,297,148.5C297,138.248,295.961,128.239,293.983,118.572z
                                            M134.167,49.538c0-7.698,6.302-13.938,14-13.938s14,6.24,14,13.938v42.095c0,7.698-6.302,13.938-14,13.938s-14-6.24-14-13.938
                                            V49.538z M243.486,152.237c-2.609,49.571-43.087,89.358-92.696,91.101c-54.66,1.921-99.868-41.992-99.868-96.236
                                            c0-29.416,13.742-55.79,34.349-73.467c8.148-6.99,20.743-1.228,20.743,9.507v0c0,3.708-1.662,7.201-4.485,9.606
                                            c-15.281,13.024-25.284,32.549-25.284,54.353c0,39.125,32.05,70.956,71.175,70.956c39.125,0,70.919-31.831,70.919-70.956
                                            c0-21.124-8.839-40.118-23.92-53.128c-2.802-2.417-4.45-5.903-4.45-9.603v0c0-10.838,12.8-16.648,20.923-9.473
                                            C232.068,93.602,245.105,121.468,243.486,152.237z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 rest-container ps-2 pe-2">
                        <div className="bg-container container-blur container-properties">
                            <div className="title text-header pt-5 ps-5 pe-5 pb-2">
                                Đèn 2
                            </div>
                            <div className="text-center pe-3 pb-2 mt-3">
                                <svg width="70%" height="70%" viewBox="0 0 22 22">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2Z" fill={isActiveOnLight2? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L18.7071 6.70711C18.3166 7.09763 17.6834 7.09763 17.2929 6.70711C16.9024 6.31658 16.9024 5.68342 17.2929 5.29289L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z" fill={isActiveOnLight2? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12Z" fill={isActiveOnLight2? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12Z" fill={isActiveOnLight2? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill={isActiveOnLight2? "#F29E7D" : "#222C34"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12C6 13.6332 6.65387 15.1157 7.71186 16.1966C7.97971 16.4703 8.1241 16.7217 8.16867 16.9444L8.69776 19.5886C8.97833 20.9908 10.2095 22 11.6395 22H12.3605C13.7905 22 15.0217 20.9908 15.3022 19.5886L15.8313 16.9444C15.8759 16.7217 16.0203 16.4703 16.2881 16.1966C17.3461 15.1157 18 13.6332 18 12C18 8.68629 15.3137 6 12 6ZM11 16C10.4477 16 10 16.4477 10 17C10 17.5523 10.4477 18 11 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H11Z" fill={isActiveOnLight2? "#F29E7D" : "#222C34"} />
                                </svg> 
                            </div>
                            <div className='d-flex align-content-between align-items-center justify-content-center'>
                                <div className={classNames("mt-3 p-2 button bg-main", isActiveOnLight2 ? "active" : "")} onClick={handleClickOnLight2}>
                                    <svg fill="#FFFFFF" height="4.2rem" width="4.2rem" viewBox="0 0 297 297">
                                        <path d="M293.983,118.572c-0.989-4.833-2.213-9.581-3.659-14.231c-0.362-1.162-0.737-2.319-1.126-3.469
                                            c-0.778-2.3-1.612-4.575-2.498-6.823c-0.443-1.124-0.9-2.241-1.369-3.352c-1.409-3.331-2.936-6.6-4.576-9.802
                                            c-1.093-2.134-2.237-4.239-3.429-6.312c-5.96-10.365-13.135-19.943-21.331-28.539c-1.639-1.719-3.319-3.399-5.038-5.038
                                            c-8.596-8.196-18.174-15.371-28.539-21.331c-2.073-1.192-4.178-2.336-6.312-3.429c-3.202-1.64-6.471-3.167-9.802-4.576
                                            c-1.11-0.47-2.228-0.926-3.352-1.369c-2.248-0.886-4.523-1.72-6.823-2.498c-1.15-0.389-2.306-0.765-3.469-1.126
                                            c-4.65-1.446-9.398-2.67-14.231-3.659C168.761,1.039,158.752,0,148.5,0s-20.261,1.039-29.928,3.017
                                            c-4.833,0.989-9.581,2.213-14.231,3.659c-1.162,0.362-2.319,0.737-3.469,1.126c-2.3,0.778-4.575,1.612-6.823,2.498
                                            c-1.124,0.443-2.241,0.9-3.352,1.369c-3.331,1.409-6.6,2.936-9.802,4.576c-2.134,1.093-4.239,2.237-6.312,3.429
                                            C64.218,25.635,54.64,32.81,46.044,41.005c-1.719,1.639-3.399,3.319-5.038,5.038C32.81,54.64,25.635,64.218,19.675,74.583
                                            c-1.192,2.073-2.336,4.178-3.429,6.312c-1.64,3.202-3.167,6.471-4.576,9.802c-0.47,1.11-0.926,2.228-1.369,3.352
                                            c-0.886,2.248-1.72,4.523-2.498,6.823c-0.389,1.15-0.765,2.306-1.126,3.469c-1.446,4.65-2.67,9.398-3.659,14.231
                                            C1.039,128.239,0,138.248,0,148.5c0,21.785,4.691,42.474,13.118,61.113c0.991,2.193,2.035,4.357,3.128,6.492
                                            c1.64,3.202,3.393,6.336,5.253,9.398c1.24,2.041,2.528,4.05,3.863,6.025c0.667,0.988,1.346,1.967,2.036,2.937
                                            c1.38,1.941,2.806,3.847,4.276,5.717c1.47,1.87,2.983,3.704,4.539,5.5c1.556,1.796,3.154,3.555,4.793,5.274
                                            c1.639,1.719,3.319,3.399,5.038,5.038c8.596,8.196,18.174,15.371,28.539,21.331c2.073,1.192,4.178,2.335,6.312,3.429
                                            c3.202,1.64,6.471,3.167,9.802,4.576c1.11,0.47,2.228,0.926,3.352,1.369c2.248,0.886,4.523,1.72,6.823,2.498
                                            c1.15,0.389,2.306,0.765,3.469,1.126c4.65,1.446,9.398,2.67,14.231,3.659c9.667,1.978,19.676,3.017,29.928,3.017
                                            s20.261-1.039,29.928-3.017c4.833-0.989,9.581-2.213,14.231-3.659c1.162-0.362,2.319-0.737,3.469-1.126
                                            c2.3-0.778,4.575-1.612,6.823-2.498c1.124-0.443,2.241-0.9,3.352-1.369c3.331-1.409,6.6-2.936,9.802-4.576
                                            c2.134-1.093,4.239-2.237,6.312-3.429c10.365-5.96,19.943-13.135,28.539-21.331c1.719-1.639,3.399-3.319,5.038-5.038
                                            c1.639-1.719,3.237-3.478,4.793-5.274c1.556-1.796,3.07-3.63,4.539-5.5c1.47-1.87,2.895-3.776,4.276-5.717
                                            c0.69-0.97,1.369-1.949,2.036-2.937c1.334-1.975,2.622-3.984,3.863-6.025c1.86-3.062,3.613-6.196,5.253-9.398
                                            c1.093-2.135,2.136-4.299,3.128-6.492C292.309,190.974,297,170.285,297,148.5C297,138.248,295.961,128.239,293.983,118.572z
                                            M134.167,49.538c0-7.698,6.302-13.938,14-13.938s14,6.24,14,13.938v42.095c0,7.698-6.302,13.938-14,13.938s-14-6.24-14-13.938
                                            V49.538z M243.486,152.237c-2.609,49.571-43.087,89.358-92.696,91.101c-54.66,1.921-99.868-41.992-99.868-96.236
                                            c0-29.416,13.742-55.79,34.349-73.467c8.148-6.99,20.743-1.228,20.743,9.507v0c0,3.708-1.662,7.201-4.485,9.606
                                            c-15.281,13.024-25.284,32.549-25.284,54.353c0,39.125,32.05,70.956,71.175,70.956c39.125,0,70.919-31.831,70.919-70.956
                                            c0-21.124-8.839-40.118-23.92-53.128c-2.802-2.417-4.45-5.903-4.45-9.603v0c0-10.838,12.8-16.648,20.923-9.473
                                            C232.068,93.602,245.105,121.468,243.486,152.237z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4 rest-container ps-2 pe-2">
                        <div className="bg-container container-blur container-properties">
                            <div className="title text-header p-5 pb-4">Nhận diện người</div>
                            <div className="d-flex justify-content-center">
                                {isActiveOnLight3 === "0"?
                                <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M21.0901 21.5C21.0901 21.78 20.8701 22 20.5901 22H3.41016C3.13016 22 2.91016 21.78 2.91016 21.5C2.91016 17.36 6.99015 14 12.0002 14C13.0302 14 14.0302 14.14 14.9502 14.41C14.3602 15.11 14.0002 16.02 14.0002 17C14.0002 17.75 14.2101 18.46 14.5801 19.06C14.7801 19.4 15.0401 19.71 15.3401 19.97C16.0401 20.61 16.9702 21 18.0002 21C19.1202 21 20.1302 20.54 20.8502 19.8C21.0102 20.34 21.0901 20.91 21.0901 21.5Z" fill="#292D32"/>
                                    <path d="M21.8807 16.04C21.7807 15.65 21.6207 15.26 21.4007 14.91C21.2507 14.65 21.0507 14.4 20.8307 14.17C20.1107 13.45 19.1707 13.06 18.2107 13.01C17.1207 12.94 16.0107 13.34 15.1707 14.17C14.3807 14.96 13.9807 16.01 14.0007 17.06C14.0107 18.06 14.4107 19.06 15.1707 19.83C15.7007 20.36 16.3507 20.71 17.0407 20.87C17.4207 20.97 17.8207 21.01 18.2207 20.98C19.1707 20.94 20.1007 20.56 20.8307 19.83C21.8607 18.8 22.2107 17.35 21.8807 16.04ZM19.6007 18.6C19.3107 18.89 18.8307 18.89 18.5407 18.6L17.9907 18.05L17.4607 18.58C17.1707 18.87 16.6907 18.87 16.4007 18.58C16.1107 18.28 16.1107 17.81 16.4007 17.52L16.9307 16.99L16.4207 16.49C16.1307 16.19 16.1307 15.72 16.4207 15.42C16.7207 15.13 17.1907 15.13 17.4907 15.42L17.9907 15.93L18.5207 15.4C18.8107 15.11 19.2807 15.11 19.5807 15.4C19.8707 15.69 19.8707 16.17 19.5807 16.46L19.0507 16.99L19.6007 17.54C19.8907 17.83 19.8907 18.31 19.6007 18.6Z" fill="#292D32"/>
                                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#292D32"/>
                                </svg>:
                                <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M18 13C17.06 13 16.19 13.33 15.5 13.88C14.58 14.61 14 15.74 14 17C14 17.75 14.21 18.46 14.58 19.06C15.27 20.22 16.54 21 18 21C19.01 21 19.93 20.63 20.63 20C20.94 19.74 21.21 19.42 21.42 19.06C21.79 18.46 22 17.75 22 17C22 14.79 20.21 13 18 13ZM20.07 16.57L17.94 18.54C17.8 18.67 17.61 18.74 17.43 18.74C17.24 18.74 17.05 18.67 16.9 18.52L15.91 17.53C15.62 17.24 15.62 16.76 15.91 16.47C16.2 16.18 16.68 16.18 16.97 16.47L17.45 16.95L19.05 15.47C19.35 15.19 19.83 15.21 20.11 15.51C20.39 15.81 20.37 16.28 20.07 16.57Z" fill="#292D32"/> <path opacity="0.4" d="M21.0901 21.5C21.0901 21.78 20.8701 22 20.5901 22H3.41016C3.13016 22 2.91016 21.78 2.91016 21.5C2.91016 17.36 6.99015 14 12.0002 14C13.0302 14 14.0302 14.14 14.9502 14.41C14.3602 15.11 14.0002 16.02 14.0002 17C14.0002 17.75 14.2101 18.46 14.5801 19.06C14.7801 19.4 15.0401 19.71 15.3401 19.97C16.0401 20.61 16.9702 21 18.0002 21C19.1202 21 20.1302 20.54 20.8502 19.8C21.0102 20.34 21.0901 20.91 21.0901 21.5Z" fill="#292D32"/> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#292D32"/> </g>
                                </svg>}
                            </div>
                            <div className="text-center text mt-3">{isActiveOnLight3 === "0"? "Không phát hiện": "Có người"}</div>
                        </div>
                    </div>
                    
                    <div className="col-4 rest-container ps-2 pe-2">
                        <div className="bg-container container-blur container-properties">
                            <div className="title text-header p-5">
                                Rèm cửa
                                <span className={classNames("float-end p-2 button bg-main", isActiveOnCurtain ? "active" : "")} onClick={handleClickOnCurtain}>
                                    <svg fill="#FFFFFF" height="4.2rem" width="4.2rem" viewBox="0 0 297 297">
                                        <path d="M293.983,118.572c-0.989-4.833-2.213-9.581-3.659-14.231c-0.362-1.162-0.737-2.319-1.126-3.469
                                            c-0.778-2.3-1.612-4.575-2.498-6.823c-0.443-1.124-0.9-2.241-1.369-3.352c-1.409-3.331-2.936-6.6-4.576-9.802
                                            c-1.093-2.134-2.237-4.239-3.429-6.312c-5.96-10.365-13.135-19.943-21.331-28.539c-1.639-1.719-3.319-3.399-5.038-5.038
                                            c-8.596-8.196-18.174-15.371-28.539-21.331c-2.073-1.192-4.178-2.336-6.312-3.429c-3.202-1.64-6.471-3.167-9.802-4.576
                                            c-1.11-0.47-2.228-0.926-3.352-1.369c-2.248-0.886-4.523-1.72-6.823-2.498c-1.15-0.389-2.306-0.765-3.469-1.126
                                            c-4.65-1.446-9.398-2.67-14.231-3.659C168.761,1.039,158.752,0,148.5,0s-20.261,1.039-29.928,3.017
                                            c-4.833,0.989-9.581,2.213-14.231,3.659c-1.162,0.362-2.319,0.737-3.469,1.126c-2.3,0.778-4.575,1.612-6.823,2.498
                                            c-1.124,0.443-2.241,0.9-3.352,1.369c-3.331,1.409-6.6,2.936-9.802,4.576c-2.134,1.093-4.239,2.237-6.312,3.429
                                            C64.218,25.635,54.64,32.81,46.044,41.005c-1.719,1.639-3.399,3.319-5.038,5.038C32.81,54.64,25.635,64.218,19.675,74.583
                                            c-1.192,2.073-2.336,4.178-3.429,6.312c-1.64,3.202-3.167,6.471-4.576,9.802c-0.47,1.11-0.926,2.228-1.369,3.352
                                            c-0.886,2.248-1.72,4.523-2.498,6.823c-0.389,1.15-0.765,2.306-1.126,3.469c-1.446,4.65-2.67,9.398-3.659,14.231
                                            C1.039,128.239,0,138.248,0,148.5c0,21.785,4.691,42.474,13.118,61.113c0.991,2.193,2.035,4.357,3.128,6.492
                                            c1.64,3.202,3.393,6.336,5.253,9.398c1.24,2.041,2.528,4.05,3.863,6.025c0.667,0.988,1.346,1.967,2.036,2.937
                                            c1.38,1.941,2.806,3.847,4.276,5.717c1.47,1.87,2.983,3.704,4.539,5.5c1.556,1.796,3.154,3.555,4.793,5.274
                                            c1.639,1.719,3.319,3.399,5.038,5.038c8.596,8.196,18.174,15.371,28.539,21.331c2.073,1.192,4.178,2.335,6.312,3.429
                                            c3.202,1.64,6.471,3.167,9.802,4.576c1.11,0.47,2.228,0.926,3.352,1.369c2.248,0.886,4.523,1.72,6.823,2.498
                                            c1.15,0.389,2.306,0.765,3.469,1.126c4.65,1.446,9.398,2.67,14.231,3.659c9.667,1.978,19.676,3.017,29.928,3.017
                                            s20.261-1.039,29.928-3.017c4.833-0.989,9.581-2.213,14.231-3.659c1.162-0.362,2.319-0.737,3.469-1.126
                                            c2.3-0.778,4.575-1.612,6.823-2.498c1.124-0.443,2.241-0.9,3.352-1.369c3.331-1.409,6.6-2.936,9.802-4.576
                                            c2.134-1.093,4.239-2.237,6.312-3.429c10.365-5.96,19.943-13.135,28.539-21.331c1.719-1.639,3.399-3.319,5.038-5.038
                                            c1.639-1.719,3.237-3.478,4.793-5.274c1.556-1.796,3.07-3.63,4.539-5.5c1.47-1.87,2.895-3.776,4.276-5.717
                                            c0.69-0.97,1.369-1.949,2.036-2.937c1.334-1.975,2.622-3.984,3.863-6.025c1.86-3.062,3.613-6.196,5.253-9.398
                                            c1.093-2.135,2.136-4.299,3.128-6.492C292.309,190.974,297,170.285,297,148.5C297,138.248,295.961,128.239,293.983,118.572z
                                            M134.167,49.538c0-7.698,6.302-13.938,14-13.938s14,6.24,14,13.938v42.095c0,7.698-6.302,13.938-14,13.938s-14-6.24-14-13.938
                                            V49.538z M243.486,152.237c-2.609,49.571-43.087,89.358-92.696,91.101c-54.66,1.921-99.868-41.992-99.868-96.236
                                            c0-29.416,13.742-55.79,34.349-73.467c8.148-6.99,20.743-1.228,20.743,9.507v0c0,3.708-1.662,7.201-4.485,9.606
                                            c-15.281,13.024-25.284,32.549-25.284,54.353c0,39.125,32.05,70.956,71.175,70.956c39.125,0,70.919-31.831,70.919-70.956
                                            c0-21.124-8.839-40.118-23.92-53.128c-2.802-2.417-4.45-5.903-4.45-9.603v0c0-10.838,12.8-16.648,20.923-9.473
                                            C232.068,93.602,245.105,121.468,243.486,152.237z"/>
                                    </svg>
                                </span>
                            </div>
                            <div className="width-container pe-5">
                                <svg fill={isActiveOnCurtain? "#F29E7D" : "#222C34" } height="75%" width="75%" viewBox="0 0 256 256">
                                    <path id="XMLID_7_" d="M90.6,171.9l26.2-23.7l3.7,4L94.3,176L90.6,171.9z M126,214.4l-3.7-4l26.2-23.7l3.7,4L126,214.4z M94.9,199.4
                                    l70-60l3.5,4.1l-70,60L94.9,199.4z M5.7,1v254h57.4l-0.7-8.4h132.9l-0.7,8.4h56.9V1H5.7z M154,13.5c-0.5,5.2-0.6,12.3-0.6,18.7
                                    c0,12.8,1,25.2,3,36.7h-54.9c1.8-11.5,2.6-22.6,2.6-34.5c0-7.1-0.2-14.6-0.8-20.9H154z M55.4,162.5c20.5-17.2,36.3-46.5,43.8-81
                                    h59.5c7.7,33.5,23.4,62.1,43.5,79l-6.1,73.6H61.3L55.4,162.5z"/>
                                </svg>
                                {/* <div className="float-end m-1 p-3 button bg-main">
                                    <svg width="3.2rem" height="3.2rem" viewBox="0 0 24 24" >
                                        <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#FFFFFF"/>
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}