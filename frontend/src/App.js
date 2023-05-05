import { useState } from "react";

import Index from "./index/index";
import Warning from "./warning/warning";
import Login from "./login/login";
import Signup from "./signup/signup";

function App() {

    const API_URL = "https://iot-backend-dhl.vercel.app/";

    // const [user, setUser] = useState();
    // const [login, setLogin] = useState(false);
    // const [signup, setSignup] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);

    return (
        <div className="App">
            {/* {signup &&  <Signup setUser={setUser} setSignup={setSignup}/>} */}
            {/* {!login && !signup && <Login setUser={setUser} setSignup={setSignup} setLogin={setLogin}/>} */}
            {!openWarning && <Index setOpenWarning={setOpenWarning} API_URL={API_URL}/>}
            {openWarning && <Warning setOpenWarning={setOpenWarning}/>}
        </div>
    )
}

export default App;
