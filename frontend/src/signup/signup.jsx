import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup ( {setSignup} ) {
    // const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setAlertMessage('Mật khẩu không khớp')
            setOpenAlert(true);
            setTimeout(() => {
                setOpenAlert(false)
            }, 2000);
        } 
    }

    return (
        <div className="Signup text-white text-center">
            <div className="signup-to bg-container px-5 d-flex flex-column align-items-center col-6">
                <h1 className="text-main">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path fill="#F29E7D" d="M5.584 15.001 1 15a1.002 1.002 0 0 1-.892-1.453l1.704-3.349 1.782.907L2.631 13h2.953c.524 0 1.018-.279 1.287-.729a1.483 1.483 0 0 0 .019-1.51A1.485 1.485 0 0 0 5.584 10H1V8h4.584c1.278 0 2.417.664 3.047 1.776a3.462 3.462 0 0 1-.045 3.525 3.517 3.517 0 0 1-3.002 1.7z"/><path fill="#2B5C64" d="M18.5 15.001a.998.998 0 0 1-.86-.491.996.996 0 0 1-.016-.991l3.231-5.877 1.753.963L20.191 13H25v2l-6.5.001zM8.642 14.395l3.712-6.754 1.752.963-3.711 6.754zM13.642 14.395l3.712-6.754 1.752.963-3.711 6.754z"/><path fill="#2B5C64" d="M11.205 10.5h5.38v2h-5.38z"/></svg>
                    Smart Home
                </h1>
                <form className="text-text row col-10 justify-content-center" onSubmit={(e) => handleSignup(e)}>
                    <div class="mb-3 col-6">
                        <label for="user" class="form-label float-start">Username</label>
                        <input type="text" class="form-control" id="user" required
                            onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div class="mb-3 col-6">
                        <label for="email" class="form-label float-start">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required
                            onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div class="mb-3 col-6">
                        <label for="name" class="form-label float-start">Họ và tên</label>
                        <input type="text" class="form-control" id="" required
                            onChange={e => setName(e.target.value)}/>
                    </div>
                    <div class="mb-3 col-6">
                        <label  for="phone"class="form-label float-start">Số điện thoại</label>
                        <input type="number" class="form-control" id="phone" required
                            onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div class="mb-3 col-6">
                        <label for="password" class="form-label float-start">Mật khẩu</label>
                        <input type="password" class="form-control" id="password" required
                            onChange={e => setPassword(e.target.value)}/>            
                    </div>
                    <div class="mb-3 col-6">
                        <label for="confirm-password" class="form-label float-start">Nhập lại mật khẩu</label>
                        <input type="password" class="form-control" id="confirm-password" required
                            onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                    { openAlert && 
                        <div class="alert d-flex align-items-center justify-content-center" role="alert">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <div className="ms-3 py-2">
                                { alertMessage }
                                {/* Username đã tồn tại/Mật khẩu không khớp */}
                            </div>
                        </div>
                    }   
                    <button type="submit" class="p-3 bg-header" onClick={()=>setSignup(false)}>Đăng ký</button>
                    <p className="signup-link text-header p-3">Đã có tài khoản?
                        <span className="ms-2">
                            <p className="" onClick={()=>setSignup(false)}>Đăng nhập</p>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup;