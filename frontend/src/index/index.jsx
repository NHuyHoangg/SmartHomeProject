import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

import Sidebar from "../sidebar/sidebar";
import Dashboard from "../dashboard/dashboard";
import Profile from "../profile/profile"
import Notify from "../notify/notify";
import Statistics from "../statistics/statistics";
import Loading from "../loading/loading";


export default function Index( {setOpenWarning, API_URL} ) {
  
    const effectRain = useRef(false);

    const [loading, setLoading] = useState(false);
    const [first, setFirst] = useState(true);
    
    const [tab, setTab] = useState(0);

    const [getapi, setGetapi] = useState(true);
    const [currentTemp, setCurrentTemp] = useState('--');
    const [currentHumi, setCurrentHumi] = useState('--');
    const [currentGas, setCurrentGas] = useState('--');
    const [currentLight, setCurrentLight] = useState('--');

    const [getWeatherapi, setGetWeatherapi] = useState(true);
    const [currentOutTemp, setCurrentOutTemp] = useState('--');
    const [currentOutHumi, setCurrentOutHumi] = useState('--');
    const [currentWeatherCode, setCurrentWeatherCode] = useState(0);

    const [tempData, setTempData] = useState();
    const [humiData, setHumiData] = useState();
    const [lightData, setLightData] = useState();
    const [gasData, setGasData] = useState();

    const [status, setStatus] = useState(1);
    const [isActiveOnAC, setIsActiveOnAC] = useState(false);
    const [isActiveOnLight1, setIsActiveOnLight1] = useState(false);
    const [isActiveOnLight2, setIsActiveOnLight2] = useState(false);
    const [isActiveOnLight3, setIsActiveOnLight3] = useState(false);
    const [isActiveOnCurtain, setIsActiveOnCurtain] = useState(false);

    const [messages, setMessages] = useState();

    setTimeout(()=>{
        setGetapi(!getapi);
    }, 2000);

    setTimeout(()=>{
        setGetWeatherapi(!getWeatherapi);
    }, 300000);

    useEffect (()=>{
        axios.get(API_URL+ 'tempChart')
        .then (response => {
            if (response.data)
                setTempData(response.data.data);
        })
        axios.get(API_URL+ 'humiChart')
        .then (response => {
            if (response.data)
                setHumiData(response.data.data);
        })
        axios.get(API_URL+ 'lightChart')
        .then (response => {
            if (response.data)
                setLightData(response.data.data);
        })
        axios.get(API_URL+ 'GasChart')
        .then (response => {
            if (response.data)
                setGasData(response.data.data);
        })
    },[getapi])

    useEffect (()=>{
        if (first) setLoading(true);
        axios.get(API_URL+ 'all')
        .then (response => {
            if (response.data) {
                setCurrentTemp(response.data[0].value);
                if (response.data[2].value === 'FAN-ON') {
                    if (isActiveOnAC === false && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Máy lạnh vừa được bật."
                        })
                    }
                    setIsActiveOnAC(true);
                } else {
                    if (isActiveOnAC === true && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Máy lạnh vừa được tắt."
                        })
                    }
                    setIsActiveOnAC(false);
                }

                setCurrentHumi(response.data[3].value);

                setCurrentLight(response.data[4].value);
                if (response.data[6].value === 'REM-ON') {
                    if (isActiveOnCurtain === false && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Rèm vừa được mở."
                        })
                        setIsActiveOnCurtain(true);
                    }
                } else {
                    if (isActiveOnCurtain === true && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Rèm vừa được đóng."
                        })
                        setIsActiveOnCurtain(false);
                    }
                }
                

                if (response.data[1].value === 'LED1-ON') {
                    if (isActiveOnLight1 === false && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 1 vừa được bật."
                        })
                    }
                    setIsActiveOnLight1(true);
                } else {
                    if (isActiveOnLight1 === true && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 1 vừa được tắt."
                        })
                    }
                    setIsActiveOnLight1(false);
                }
                if (response.data[5].value === 'LED2-ON') {
                    if (isActiveOnLight2 === false && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 2 vừa được bật."
                        })
                    }
                    setIsActiveOnLight2(true);
                } else {
                    if (isActiveOnLight2 === true && response.data[8].value !== "2") {
                        axios.post(API_URL + 'addMessage', {
                            info: "Đèn 2 vừa được tắt."
                        })
                    }
                    setIsActiveOnLight2(false);
                }

                setCurrentGas(response.data[7].value);
                if (response.data[7].value >= 2000) {
                    axios.post(API_URL + 'addMessage', {
                        info: "Khí ga vượt ngưỡng an toàn."
                    })
                    setOpenWarning(true);
                } else {
                    setOpenWarning(false);
                }

                if (response.data[9].value === "1" && isActiveOnLight3 === "0") {
                    axios.post(API_URL + 'addMessage', {
                        info: "Phát hiện người."
                    })
                }
                setIsActiveOnLight3(response.data[9].value);
                setStatus(response.data[8].value);
            }
        })

        axios.get(API_URL + 'getMessage')
        .then (response => {
            if (response.data)
                setMessages(response.data);
        })

    },[getapi])

    useEffect(()=>{
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&hourly=relativehumidity_2m&current_weather=true&forecast_days=1&timezone=Asia%2FBangkok`)
        .then (response => {
            if (response.data) {
                if (!first) {
                    if (response.data.current_weather.temperature > 32 && 
                        response.data.current_weather.weathercode !== currentWeatherCode &&
                        (response.data.current_weather.weathercode === 0 || 
                        response.data.current_weather.weathercode === 1 )) {
                            axios.post(API_URL + 'addMessage', {
                                info: "Nhiệt độ ngoài trời đang rất cao! Hãy che chắn cẩn thận khi ra ngoài."
                            })
                    }
                    else if (response.data.current_weather.weathercode !== currentWeatherCode && 
                        (response.data.current_weather.weathercode !== 2)) {
                            axios.post(API_URL + 'addMessage', {
                                info: "Trời sắp mưa! Hãy mang theo dù khi ra ngoài."
                            })
                    }
                }
                setCurrentOutTemp(response.data.current_weather.temperature)
                setCurrentWeatherCode(response.data.current_weather.weathercode)
                setCurrentOutHumi(response.data.hourly.relativehumidity_2m)

                if (first) {
                    setLoading(false);
                    setFirst(false);
                }
            }
        })
        if (effectRain.current === false) {
            axios.get(`https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&hourly=relativehumidity_2m&current_weather=true&forecast_days=1&timezone=Asia%2FBangkok`)
            .then (response => {
                if (response.data) {
                    if (response.data.current_weather.temperature > 32 && 
                        response.data.current_weather.weathercode !== currentWeatherCode &&
                        (response.data.current_weather.weathercode === 0 || 
                        response.data.current_weather.weathercode === 1 )) {
                            axios.post(API_URL + 'addMessage', {
                                info: "Nhiệt độ ngoài trời đang rất cao! Hãy che chắn cẩn thận khi ra ngoài."
                            })
                    }
                    else if (response.data.current_weather.weathercode !== currentWeatherCode && 
                        (response.data.current_weather.weathercode !== 2)) {
                            axios.post(API_URL + 'addMessage', {
                                info: "Trời sắp mưa! Hãy mang theo dù khi ra ngoài."
                            })
                    }
                    setCurrentOutTemp(response.data.current_weather.temperature)
                    setCurrentWeatherCode(response.data.current_weather.weathercode)
                    setCurrentOutHumi(response.data.hourly.relativehumidity_2m)

                    if (first) {
                        setLoading(false);
                        setFirst(false);
                    }
                }
            })
        }
        return () => {effectRain.current = true}
    },[getWeatherapi])

    return (
        <div className="row g-0" id="index">
            <Sidebar tab={tab} setTab={setTab} messages={messages} API_URL={API_URL}/>
            {
            loading ? <Loading />:
            <React.Fragment>
                <div className="col-4 offset-8 p-4 d-flex align-items-center" id="username">
                    <div id="avatar" onClick={()=>setTab(4)}>
                        <svg width="100%" height="100%" viewBox="0 0 1024 1024">
                            <path d="M512.002082 0C229.382031 0 0.237391 229.14464 0.237391 511.764692c0 174.074128 86.947522 327.832597 219.761454 420.281755 25.883932-90.133557 91.287193-158.031504 180.287937-189.033916 3.706629-1.295238 7.454906-2.519675 11.24483-3.681641 0.599724-0.183249 1.191119-0.383157 1.795008-0.562241a325.358734 325.358734 0 0 1 27.058392-6.867676c0.932904-0.195743 1.874138-0.370663 2.807042-0.558076a344.820619 344.820619 0 0 1 14.722398-2.619629 350.905321 350.905321 0 0 1 10.428538-1.453499c1.25359-0.158261 2.498851-0.329015 3.756606-0.470617a354.782705 354.782705 0 0 1 14.168485-1.357709h51.705393c4.756146 0.354004 9.453986 0.820456 14.122673 1.34938 1.320226 0.154096 2.627958 0.33318 3.939855 0.49977a344.791466 344.791466 0 0 1 14.393382 2.099035c3.415096 0.574736 6.805204 1.199448 10.166159 1.869974 1.149471 0.229061 2.315602 0.441464 3.456744 0.683019 9.008358 1.894962 17.825137 4.131434 26.446174 6.709415 1.066176 0.316521 2.115694 0.662196 3.177705 0.991211 3.223518 0.99954 6.426212 2.044893 9.591423 3.140223 89.283947 30.881634 154.903776 98.837888 180.900156 189.146364 132.722308-92.465818 219.603194-246.16598 219.603194-420.173472C1023.762609 229.140475 794.622134 0 512.002082 0z m0 725.320666c-130.373388 0-236.491262-103.560716-240.743473-232.897081-0.145766-0.091625-0.291533-0.16659-0.437299-0.258215-4.993537-93.35291 43.813188-165.06577 105.59728-206.971502 0.358169-0.24572 0.703843-0.49977 1.062012-0.741325 2.357249-1.582606 4.747817-3.081916 7.138384-4.577063 0.937069-0.58723 1.853315-1.199448 2.798713-1.770019 38.040842-23.106043 79.896597-35.179658 116.717167-34.47998 2.619629-0.08746 5.230928-0.199908 7.871381-0.199908 2.507181 0 4.976878 0.112448 7.4674 0.187414 28.237017-0.487276 59.406019 6.534495 89.562986 20.21154a241.022512 241.022512 0 0 1 61.725785 39.377728c50.226906 43.088521 86.589353 107.846246 82.18721 188.963115l-0.199908 0.116613c-4.185575 129.398836-110.328438 233.038683-240.747638 233.038683z" fill="#2B5C64" />
                            <path d="M376.414425 285.193868c0.354004-0.241556 0.703843-0.503935 1.062012-0.741325-0.358169 0.241556-0.703843 0.49977-1.062012 0.741325zM519.465317 243.612987c-2.490522-0.074966-4.960219-0.187414-7.467399-0.187414-2.640453 0-5.251752 0.112448-7.871381 0.199908 2.52384 0.049977 5.043514 0.104119 7.517377 0.270709a156.265649 156.265649 0 0 1 7.821403-0.283203zM472.27868 386.726351c-46.307874 81.237647-124.763467 153.204557-201.024236 105.697234 4.252212 129.336365 110.370085 232.897081 240.743474 232.897081 130.4192 0 236.566227-103.639847 240.747638-233.038683-63.724866 39.660931-230.814705-17.875114-280.466876-105.555632zM384.614821 279.87548c0.937069-0.583065 1.857479-1.199448 2.798714-1.770019-0.949563 0.574736-1.861644 1.186954-2.798714 1.770019zM609.028303 263.824527a260.296983 260.296983 0 0 1 61.725785 39.377728 241.139125 241.139125 0 0 0-61.725785-39.377728z" fill="#FCE9EA" />
                            <path d="M453.974597 729.360475zM610.498461 738.656201c1.066176 0.316521 2.115694 0.662196 3.177705 0.99121-1.062012-0.329015-2.111529-0.67469-3.177705-0.99121zM440.380847 731.900973c0.932904-0.195743 1.874138-0.370663 2.807043-0.558076-0.937069 0.187414-1.878303 0.362333-2.807043 0.558076zM411.527447 739.33089c0.599724-0.183249 1.191119-0.383157 1.795008-0.562241-0.603889 0.179084-1.195284 0.378992-1.795008 0.562241zM566.164679 728.702444zM623.263425 742.787634c0.732996 0.25405 1.457663 0.512264 2.18233 0.770479a119.432585 119.432585 0 0 1-10.457692 22.110667c17.142118 26.396196 12.83993 141.48911-12.91906 123.397429l-45.095932-31.756232-44.979318-31.639619 2.956974-2.078211c-0.982881 0.024989-1.965763 0.074966-2.956974 0.074966-1.032858 0-2.053223-0.054142-3.077752-0.079131l2.961139 2.082376-44.979319 31.639619-45.095931 31.756232c-25.900591 18.124999-30.190285-97.405213-12.877413-123.534866a119.286819 119.286819 0 0 1-10.357737-21.914923c0.570571-0.204073 1.136977-0.408146 1.711713-0.603889-89.000744 30.998247-154.404005 98.900359-180.287938 189.033916 82.820253 57.652658 183.457313 91.482936 292.003238 91.482936 108.616725 0 209.316257-33.876091 292.161498-91.59122-25.983886-90.308476-91.603714-158.268895-180.891826-189.150529zM580.595543 731.263766c1.149471 0.229061 2.315602 0.441464 3.456744 0.68302-1.141142-0.241556-2.303108-0.458123-3.456744-0.68302zM468.338825 727.273934c1.25359-0.154096 2.498851-0.329015 3.756606-0.470617-1.257755 0.141602-2.503016 0.312356-3.756606 0.470617zM552.091982 726.790823c1.320226 0.149931 2.627958 0.33318 3.939856 0.49977-1.311897-0.162425-2.615464-0.34151-3.939856-0.49977z" fill="#F29E7D" />
                            <path d="M408.928642 765.527179c3.440085-5.189281 7.729779-6.87184 12.877412-3.252671l45.095932 31.756231 42.01818 29.557243c1.028694 0.024989 2.044893 0.07913 3.077752 0.079131 0.991211 0 1.974092-0.049977 2.956973-0.074966l42.022345-29.561408 45.095932-31.756231c5.172622-3.652487 9.47481-1.911621 12.91906 3.390107a119.307643 119.307643 0 0 0 10.457691-22.110666l-2.18233-0.770479a307.358677 307.358677 0 0 0-9.591423-3.140223c-1.062012-0.329015-2.111529-0.67469-3.177705-0.991211a327.35365 327.35365 0 0 0-26.446174-6.709415c-1.141142-0.241556-2.307272-0.453958-3.456744-0.683019a331.80577 331.80577 0 0 0-24.559541-3.969009c-1.311897-0.16659-2.619629-0.349839-3.939855-0.49977a367.755907 367.755907 0 0 0-14.122673-1.34938h-51.705393a354.782705 354.782705 0 0 0-14.168485 1.357709c-1.257755 0.141602-2.503016 0.316521-3.756606 0.470617a337.67807 337.67807 0 0 0-25.150936 4.073128c-0.937069 0.187414-1.878303 0.362333-2.807042 0.558076a328.678041 328.678041 0 0 0-27.058392 6.867676c-0.603889 0.179084-1.195284 0.378992-1.795008 0.562241-3.789924 1.157801-7.538201 2.386403-11.24483 3.681641-0.570571 0.195743-1.141142 0.399816-1.711713 0.603889a119.361784 119.361784 0 0 0 10.353573 21.910759z" fill="#222C34" />
                            <path d="M602.073168 762.274508l-45.095932 31.756231-42.022345 29.561408-2.956973 2.078211 44.979318 31.639619 45.095932 31.756232c25.758989 18.091681 30.061178-97.001232 12.91906-123.397429-3.440085-5.305894-7.742273-7.04676-12.91906-3.394272zM421.806054 762.274508c-5.147633-3.619169-9.437327-1.93661-12.877412 3.252671-17.312873 26.129652-13.023179 141.659865 12.877412 123.534865l45.095932-31.756232 44.979319-31.639618-2.961139-2.082376-42.01818-29.557243-45.095932-31.752067z" fill="#FCE9EA" />
                            <path d="M472.27868 386.726351c49.65217 87.680518 216.742009 145.216563 280.466876 105.555632l0.199908-0.116613c4.402143-81.116869-31.964469-145.874594-82.187211-188.963115a260.51355 260.51355 0 0 0-61.725785-39.377728c-30.156967-13.677045-61.325969-20.698816-89.562986-20.21154-2.627958 0.045812-5.247587 0.108284-7.821404 0.283203 8.337833 29.51976-8.267032 88.263583-39.369398 142.830161z" fill="#F29E7D" />
                            <path d="M472.27868 386.726351c31.102366-54.570742 47.711396-113.3104 39.369398-142.830161a148.931522 148.931522 0 0 0-7.517376-0.270709c-36.82057-0.699678-78.676325 11.373937-116.717167 34.47998-0.941234 0.570571-1.861644 1.186954-2.798714 1.770019-2.390567 1.495146-4.781135 2.994456-7.138384 4.577063-0.358169 0.241556-0.703843 0.49977-1.062012 0.741325-61.784092 41.905732-110.590817 113.618592-105.59728 206.971502 0.145766 0.091625 0.291533 0.16659 0.437299 0.258215 76.260769 47.507323 154.716362-24.459587 201.024236-105.697234z" fill="#F29E7D" />
                        </svg>
                    </div>
                    <div className="ms-5 me-5 text-main" id="name">
                        <div className="fw-bold mb-3">Chúc một ngày tốt lành,</div>
                        <span className="text-uppercase">Lương Hoàng</span>
                    </div>
                    {/* <div id="logout" onClick={()=>setLogin(false)}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24">
                            <path d="M17.2929 14.2929C16.9024 14.6834 16.9024 15.3166 17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071L21.6201 12.7941C21.6351 12.7791 21.6497 12.7637 21.6637 12.748C21.87 12.5648 22 12.2976 22 12C22 11.7024 21.87 11.4352 21.6637 11.252C21.6497 11.2363 21.6351 11.2209 21.6201 11.2059L18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289C16.9024 8.68342 16.9024 9.31658 17.2929 9.70711L18.5858 11H13C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H18.5858L17.2929 14.2929Z" fill="#2B5C64"/>
                            <path d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H14.5C15.8807 22 17 20.8807 17 19.5V16.7326C16.8519 16.647 16.7125 16.5409 16.5858 16.4142C15.9314 15.7598 15.8253 14.7649 16.2674 14H13C11.8954 14 11 13.1046 11 12C11 10.8954 11.8954 10 13 10H16.2674C15.8253 9.23514 15.9314 8.24015 16.5858 7.58579C16.7125 7.4591 16.8519 7.35296 17 7.26738V4.5C17 3.11929 15.8807 2 14.5 2H5Z" fill="#2B5C64"/>
                        </svg>
                    </div> */}
                </div>
                {
                    tab === 0 && 
                    <Dashboard 
                        API_URL={API_URL} 
                        currentHumi={currentHumi} 
                        currentTemp={currentTemp}
                        currentGas={currentGas}
                        currentLight={currentLight}
                        currentOutTemp={currentOutTemp}
                        currentOutHumi={currentOutHumi}
                        currentWeatherCode={currentWeatherCode}
                        status={status}
                        setStatus={setStatus}
                        setLoading = {setLoading}
                        isActiveOnAC={isActiveOnAC}
                        setIsActiveOnAC={setIsActiveOnAC}
                        isActiveOnCurtain={isActiveOnCurtain}
                        setIsActiveOnCurtain={setIsActiveOnCurtain}
                        isActiveOnLight1={isActiveOnLight1}
                        setIsActiveOnLight1={setIsActiveOnLight1}
                        isActiveOnLight2={isActiveOnLight2}
                        setIsActiveOnLight2={setIsActiveOnLight2}
                        isActiveOnLight3={isActiveOnLight3}
                        setIsActiveOnLight3={setIsActiveOnLight3}
                    />
                }
                {/* {tab === 1 && <Dashboard />} */}
                {
                    tab === 2 && 
                    <Statistics 
                        tempData={tempData} 
                        humiData={humiData}
                        gasData={gasData} 
                        lightData={lightData} 
                    />}
                {tab === 3 && <Notify messages={messages}/>}
                {tab === 4 && <Profile />}
            </React.Fragment>
            }             
        </div>
    )
}