import "./login.css";

function Login () {
    return (
        <div className="Login text-white text-center">
            <div className="login-to bg-container px-5 d-flex flex-column align-items-center col-6">
                <h1 className="text-main">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path fill="#F29E7D" d="M5.584 15.001 1 15a1.002 1.002 0 0 1-.892-1.453l1.704-3.349 1.782.907L2.631 13h2.953c.524 0 1.018-.279 1.287-.729a1.483 1.483 0 0 0 .019-1.51A1.485 1.485 0 0 0 5.584 10H1V8h4.584c1.278 0 2.417.664 3.047 1.776a3.462 3.462 0 0 1-.045 3.525 3.517 3.517 0 0 1-3.002 1.7z"/><path fill="#2B5C64" d="M18.5 15.001a.998.998 0 0 1-.86-.491.996.996 0 0 1-.016-.991l3.231-5.877 1.753.963L20.191 13H25v2l-6.5.001zM8.642 14.395l3.712-6.754 1.752.963-3.711 6.754zM13.642 14.395l3.712-6.754 1.752.963-3.711 6.754z"/><path fill="#2B5C64" d="M11.205 10.5h5.38v2h-5.38z"/></svg>
                    Smart Home
                </h1>
                <h2 className="text-main pb-4">Welcome back!</h2>
                <form className="text-text col-5">
                    <div class="mb-3">
                        <label for="user" class="form-label float-start">Username</label>
                        <input type="text" class="form-control" id="user" required/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label float-start">Mật khẩu</label>
                        <input type="password" class="form-control" id="password" required/>
                    </div>
                    <div class="alert d-flex align-items-center justify-content-center" role="alert">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <div className="ms-3 py-2">
                            Username hoặc mật khẩu không chính xác
                        </div>
                    </div>
                    <button type="submit" class="p-3 bg-header">Đăng nhập</button>
                    <p className="signup-link text-header p-3">Chưa có tài khoản?
                        <span className="">
                            <p className="ms-2">Tạo tài khoản</p>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;