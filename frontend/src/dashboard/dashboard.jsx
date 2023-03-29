import "./dashboard.css";

export default function Dashboard () {
    return(
        <div className="row" id="dashboard">
            <div className="col-1 h-100 position-fixed bg-container d-flex align-items-center justify-content-center">
                <div className="bg-dark" id="logo">

                </div>
                <div>
                    <ul>
                        <li className="bg-main sidebar-icon"></li>
                        <li className="bg-main sidebar-icon"></li>
                        <li className="bg-main sidebar-icon"></li>
                        <li className="bg-main sidebar-icon"></li>
                    </ul>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="col-6"></div>
            <div className="col-5 bg-dark" id="userName">

            </div>
        </div>
    )
}