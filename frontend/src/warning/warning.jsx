import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./warning.css";

function Warning ( {API_URL, setOpenWarning} ) {

    const [getapi, setGetapi] = useState(true);
    setTimeout(()=>{
        setGetapi(!getapi);
    }, 5000);

    useEffect(()=>{
        axios.get(API_URL+ 'all')
        .then (response => {
            if (response) {
                if (response.data[7].value < 2000) {
                    setOpenWarning(false);
                }
            }
        })
    },[getapi])

    return (
        <div className="Warning px-5 py-5 text-white text-center d-flex align-items-center justify-content-center">
            <div>
                <audio loop muted autoPlay src="https://tiengdong.com/wp-content/uploads/Tieng-coi-canh-bao-www_tiengdong_com.mp3"></audio>
                <svg fill="#000000" width="20vh" height="20vh" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="warning-alt" class="icon glyph"><path d="M22.25,17.55,14.63,3.71a3,3,0,0,0-5.26,0L1.75,17.55A3,3,0,0,0,4.38,22H19.62a3,3,0,0,0,2.63-4.45ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18Zm1-5a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Z"></path></svg>
                <h1 className="display-1 mt-4 mb-4">CẢNH BÁO</h1>
                <p>Khí gas vượt ngưỡng cho phép!
                <br />
                Vui lòng nhanh chóng xử lý để tránh gặp nguy hiểm</p>
                {/* <button type="button" class="btn">TẮT CẢNH BÁO</button> */}
            </div>
        </div>
    )
}

export default Warning;