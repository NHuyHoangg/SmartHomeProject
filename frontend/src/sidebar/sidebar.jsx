import { useEffect, useState } from "react";

import axios from "axios";

import "./sidebar.css";

export default function Sidebar( {API_URL, tab, setTab, messages} ) { 

    const [countMessages, setCountMessages] = useState(0);

    const handleSwitchTab = (tab) => {
        setCountMessages(0);
        setTab(tab);
        if (tab === 3) {
            axios.get(API_URL + 'updateMessage')
            .then (response => {})
        }
    }

    useEffect (()=>{
        
        if (messages) {
            let temp = 0;
        
            messages.forEach(element => {
                if (element.status === 'NEW') 
                    temp ++;
            });
            
            setCountMessages(temp);
        }
    },[messages])

    return (
        <div className="h-100 mr-2 position-fixed bg-container" id="sidebar">
            <div className="" id="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="100%" height="100%">
                    <path fill="#F29E7D" d="M5.584 15.001 1 15a1.002 1.002 0 0 1-.892-1.453l1.704-3.349 1.782.907L2.631 13h2.953c.524 0 1.018-.279 1.287-.729a1.483 1.483 0 0 0 .019-1.51A1.485 1.485 0 0 0 5.584 10H1V8h4.584c1.278 0 2.417.664 3.047 1.776a3.462 3.462 0 0 1-.045 3.525 3.517 3.517 0 0 1-3.002 1.7z"/>
                    <path fill="#2B5C64" d="M18.5 15.001a.998.998 0 0 1-.86-.491.996.996 0 0 1-.016-.991l3.231-5.877 1.753.963L20.191 13H25v2l-6.5.001zM8.642 14.395l3.712-6.754 1.752.963-3.711 6.754zM13.642 14.395l3.712-6.754 1.752.963-3.711 6.754z"/>
                    <path fill="#2B5C64" d="M11.205 10.5h5.38v2h-5.38z"/>
                </svg>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li id="tab-dashboard" className="sidebar-icon" onClick={()=>handleSwitchTab(0)}>
                        <svg width="100%" height="100%" viewBox="-2.4 -2.4 28.80 28.80" id="meteor-icon-kit__solid-dashboard" fill="" transform="matrix(1, 0, 0, 1, 0, 0)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.336"/>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H7C8.10457 0 9 0.89543 9 2V7C9 8.10457 8.10457 9 7 9H2C0.89543 9 0 8.10457 0 7V2C0 0.89543 0.89543 0 2 0ZM2 11H7C8.10457 11 9 11.8954 9 13V22C9 23.1046 8.10457 24 7 24H2C0.89543 24 0 23.1046 0 22V13C0 11.8954 0.89543 11 2 11ZM13 0H22C23.1046 0 24 0.89543 24 2V13C24 14.1046 23.1046 15 22 15H13C11.8954 15 11 14.1046 11 13V2C11 0.89543 11.8954 0 13 0ZM13 17H22C23.1046 17 24 17.8954 24 19V22C24 23.1046 23.1046 24 22 24H13C11.8954 24 11 23.1046 11 22V19C11 17.8954 11.8954 17 13 17Z" 
                                        fill={tab === 0? '#F29E7D': '#2B5C64'}/>
                            </g>
                        </svg>
                    </li>
                    {/* <li id="tab-voice" className="sidebar-icon" onClick={()=>handleSwitchTab(1)}>
                        <svg fill={tab === 1? '#F29E7D': '#2B5C64'} height="100%" width="100%" version="1.1" id="Layer_1"
                            viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
                            <path d="M155.7,320.3c2.8,23.3,24.9,42.4,49,42.4h87.8c24.1,0,46.2-19.1,49-42.4l11.7-96.6c2.8-23.3,2.8-61.4,0-84.8l-11.7-96.6
                                C338.6,19,316.5,0,292.4,0h-87.8c-24.1,0-46.2,19.1-49,42.4L144,138.9c-2.8,23.3-2.8,61.5,0,84.8L155.7,320.3z M419.1,170.7h-42.6
                                c0.4,19.5-0.3,40.2-2.2,55.6l-11.7,96.6c-4.1,34.3-34.9,61.1-70.2,61.1h-87.8c-35.2,0-66-26.9-70.2-61.1l-11.7-96.6
                                c-1.9-15.4-2.6-36.1-2.2-55.6H77.9c-0.4,21.3,0.4,43.6,2.5,60.7L92.1,328c6.7,55.3,56.1,98.6,112.5,98.6h22.6v42.7h-64V512h170.7
                                v-42.7h-64v-42.7h22.6c56.5,0,105.9-43.4,112.5-98.7l11.7-96.7C418.7,214.2,419.5,191.9,419.1,170.7z"/>
                        </svg>
                    </li> */}
                    <li id="tab-statistic" className="sidebar-icon" onClick={()=>handleSwitchTab(2)}>
                        <svg fill={tab === 2? '#F29E7D': '#2B5C64'} height="100%" width="100%" viewBox="0 0 465.797 465.797">
                        <path d="M423.532,0H42.264c-11.046,0-20,8.954-20,20v282.563c0,11.046,8.954,20,20,20h125.651l-50.474,115.203
                            c-4.433,10.117,0.175,21.912,10.293,26.346c2.612,1.143,5.335,1.686,8.016,1.686c7.701,0,15.041-4.474,18.329-11.979l57.507-131.256
                            h42.625l57.507,131.256c3.289,7.506,10.628,11.979,18.329,11.979c2.68,0,5.404-0.542,8.016-1.686
                            c10.118-4.434,14.726-16.228,10.293-26.346l-50.474-115.203h125.651c11.046,0,20-8.954,20-20V20C443.532,8.954,434.578,0,423.532,0z
                            M151.724,246.587c0,3.879-3.144,7.023-7.023,7.023h-30.433c-3.879,0-7.023-3.144-7.023-7.023V93.587
                            c0-3.879,3.145-7.023,7.023-7.023h30.433c3.879,0,7.023,3.144,7.023,7.023V246.587z M220.667,246.587
                            c0,3.879-3.144,7.023-7.023,7.023H183.21c-3.879,0-7.023-3.144-7.023-7.023V133.011c0-3.879,3.144-7.023,7.023-7.023h30.433
                            c3.879,0,7.023,3.144,7.023,7.023V246.587z M289.609,246.587c0,3.879-3.144,7.023-7.023,7.023h-30.433
                            c-3.879,0-7.023-3.144-7.023-7.023v-78.283c0-3.879,3.144-7.023,7.023-7.023h30.433c3.879,0,7.023,3.145,7.023,7.023V246.587z
                            M358.552,246.587c0,3.879-3.144,7.023-7.023,7.023h-30.433c-3.879,0-7.023-3.144-7.023-7.023v-42.729
                            c0-3.879,3.144-7.023,7.023-7.023h30.433c3.879,0,7.023,3.145,7.023,7.023V246.587z"/>
                        </svg>
                    </li>
                    <li id="tab-mess" className="sidebar-icon position-relative" onClick={()=>handleSwitchTab(3)}>
                        {
                            countMessages !==0 &&
                            <div className="badge bg-danger position-absolute end-0 fs-6 rounded-circle">
                                <div>{countMessages}</div>
                            </div>
                        }
                        <svg fill={tab === 3? '#F29E7D': '#2B5C64'} width="100%" height="100%" viewBox="0 -3 24 24" id="meteor-icon-kit__solid-envelope" >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4006 1.20046L13.1469 8.9765C12.4583 9.4585 11.5417 9.4585 10.8531 8.9765L0.599433 1.20046C1.14673 0.47153 2.0183 0 3 0H21C21.9817 0 22.8533 0.47153 23.4006 1.20046zM24 3.25413V15C24 16.6569 22.6569 18 21 18H3C1.34315 18 0 16.6569 0 15V3.25413L9.70615 10.615C11.0834 11.5791 12.9166 11.5791 14.2938 10.615L24 3.25413z" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    )
}