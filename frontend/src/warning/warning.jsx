// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";
import "./warning.css";

function Warning () {
    return (
        <div className="Warning px-5 py-5 text-white text-center d-flex flex-column align-items-center justify-content-center">
            <i class="fa-solid fa-triangle-exclamation fa-10x"></i>
            <h1 class="display-1 mt-5 mb-1">CẢNH BÁO</h1>
            <p class="fs-1 mb-5">Khí gas vượt ngưỡng cho phép! 
            <br />
            Vui lòng nhanh chóng xử lý để tránh gặp nguy hiểm</p>
            <button type="button" class="btn">TẮT CẢNH BÁO</button>
        </div>

        // <div className="container-sm">
        //     <div className="Warning px-5 py-5 text-white text-center d-flex flex-column align-items-center justify-content-center">
        //         <i class="fa-solid fa-triangle-exclamation fa-10x"></i>
        //         <h1 class="display-1 mt-5 mb-3">CẢNH BÁO</h1>
        //         <p class="fs-1 mb-5">Khí gas vượt ngưỡng cho phép! 
        //         <br />
        //         Vui lòng nhanh chóng xử lý để tránh gặp nguy hiểm</p>
        //         <button type="button" class="btn">TẮT CẢNH BÁO</button>
        //     </div>
        // </div>

    )
}

export default Warning;