import React from "react";

import "./dashboard.css";

export default function Dashboard () {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDate = new Date();
    
    return(
        <React.Fragment>
            <div className="col-4 offset-1">
                <div className="row" id="dashboard">
                    <div className="col-6 date-container text-header mb-3">
                        <div className="bg-container container-blur container-properties text-center">
                            {currentDate.getDate()} <br/>
                            {days[currentDate.getDay()]}
                        </div>
                    </div>
                    <div className="col-6 date-container text-header">
                        <div className="bg-container container-blur container-properties">
                            <div className="w-25 text-center">{currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                        </div>
                    </div>
                    <div className="col-12 weather-container mb-3">
                        <div className="bg-container container-blur container-properties">
                            <div className="w-50">
                                <svg width="60%" height="60%" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                                    <g id="Layer_21">
                                        <g><path d="M26,16c0,5.5-4.5,10-10,10S6,21.5,6,16S10.5,6,16,6S26,10.5,26,16z" fill="#EDB544"/></g>
                                        <g>
                                            <path d="M16,1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2C17,1.4,16.6,1,16,1z" fill="#F29E7D"/>
                                            <path d="M16,27c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2C17,27.4,16.6,27,16,27z" fill="#F29E7D"/>
                                            <path d="M30,15h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S30.6,15,30,15z" fill="#F29E7D"/>
                                            <path d="M4,15H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S4.6,15,4,15z" fill="#F29E7D"/>
                                            <path d="M25.2,5.4l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4    c0.4-0.4,0.4-1,0-1.4S25.6,5,25.2,5.4z" fill="#F29E7D"/>
                                            <path d="M6.8,23.8l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4    c0.4-0.4,0.4-1,0-1.4S7.2,23.4,6.8,23.8z" fill="#F29E7D"/>
                                            <path d="M6.8,5.4C6.4,5,5.8,5,5.4,5.4s-0.4,1,0,1.4l1.4,1.4C7,8.4,7.3,8.5,7.5,8.5S8,8.4,8.2,8.2    c0.4-0.4,0.4-1,0-1.4L6.8,5.4z" fill="#F29E7D"/>
                                            <path d="M25.2,23.8c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3    c0.4-0.4,0.4-1,0-1.4L25.2,23.8z" fill="#F29E7D"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="w-50">
                                <div className="location mb-4">
                                    <svg width="20px" height="20px" viewBox="0 0 512 512">
                                        <title>location-filled</title>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="location-outline" fill="#222C34" transform="translate(106.666667, 42.666667)">
                                                <path d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,176.537017 291.413333,202.026667 278.683512,224.008666 C270.196964,238.663333 227.080238,313.32711 149.333333,448 C71.5864284,313.32711 28.4697022,238.663333 19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,85.3333333 C113.987109,85.3333333 85.3333333,113.987109 85.3333333,149.333333 C85.3333333,184.679557 113.987109,213.333333 149.333333,213.333333 C184.679557,213.333333 213.333333,184.679557 213.333333,149.333333 C213.333333,113.987109 184.679557,85.3333333 149.333333,85.3333333 Z" id="Combined-Shape"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    
                                    <div>Ngoài trời</div>      
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-3">
                                    <svg width="20%" height="20%" viewBox="0 0 32 32">
                                        <g id="Layer_10">
                                            <g><path d="M23,24c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-2.3,1.1-4.4,3-5.7V5c0-2.2,1.8-4,4-4s4,1.8,4,4v13.3    C21.9,19.6,23,21.7,23,24z" fill="#F29E7D"/></g>
                                            <g><path d="M20,24c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-1.9,1.3-3.4,3-3.9V13c0-0.5,0.5-1,1-1s1,0.5,1,1v7.1    C18.7,20.6,20,22.1,20,24z" fill="#EDB544"/></g>
                                        </g>
                                    </svg>
                                    <div className="ms-4">28oC</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <svg fill="#000000" width="20%" height="20%" viewBox="0 0 64 64">
                                        <g id="Expanded">
                                            <path d="M35.776,53.677c-0.547,-1.558 -2.032,-2.677 -3.776,-2.677c-2.208,-0 -4,1.792 -4,4c0,2.208 1.792,4 4,4c1.977,0 3.621,-1.437 3.943,-3.323c11.373,-1.884 20.057,-11.774 20.057,-23.677c0,-2.546 -0.398,-5.001 -1.134,-7.304c-0.168,-0.526 -0.731,-0.817 -1.257,-0.649c-0.526,0.168 -0.816,0.732 -0.648,1.257c0.675,2.112 1.039,4.362 1.039,6.696c0,10.856 -7.879,19.886 -18.224,21.677Zm-27.76,-20.799c0.375,10.42 7.408,19.156 16.968,22.078c0.528,0.162 1.087,-0.136 1.249,-0.664c0.161,-0.528 -0.137,-1.087 -0.664,-1.248c-8.744,-2.673 -15.181,-10.651 -15.552,-20.175c1.716,-0.45 2.983,-2.013 2.983,-3.869c0,-2.208 -1.792,-4 -4,-4c-2.208,-0 -4,1.792 -4,4c0,1.868 1.283,3.439 3.016,3.878Zm27.915,10.299c0.696,0.21 1.434,0.323 2.199,0.323c4.203,-0 7.615,-3.413 7.615,-7.616c0,-5.628 -3.413,-10.753 -6.876,-14.557c-0.301,-0.331 -0.786,-0.422 -1.186,-0.222c-0.401,0.201 -0.62,0.642 -0.536,1.082c0.45,2.362 -0.346,4.008 -1.469,5.42c-1.749,-3.673 -4.272,-6.993 -6.809,-9.78c-0.301,-0.331 -0.786,-0.422 -1.186,-0.222c-0.401,0.201 -0.62,0.642 -0.536,1.082c0.813,4.265 -1.282,6.855 -3.517,9.228c-1.252,1.328 -2.557,2.593 -3.552,3.985c-1.092,1.525 -1.823,3.198 -1.823,5.225c-0,5.45 4.424,9.875 9.875,9.875c3.17,0 5.993,-1.497 7.801,-3.823Zm-7.629,-10.87l-2.376,8.868c-0.143,0.533 0.174,1.082 0.707,1.225c0.533,0.143 1.082,-0.174 1.225,-0.707l2.376,-8.868c0.143,-0.533 -0.174,-1.082 -0.707,-1.225c-0.533,-0.143 -1.082,0.174 -1.225,0.707Zm8.734,9.086c0.353,0.07 0.719,0.107 1.094,0.107c3.099,-0 5.615,-2.516 5.615,-5.616c0,-4.145 -2.094,-7.961 -4.563,-11.1c-0.322,1.968 -1.385,3.49 -2.625,4.875c0.903,2.379 1.448,4.882 1.448,7.466c-0,1.528 -0.348,2.976 -0.969,4.268Zm-13.446,-0.303c0.878,0 1.591,-0.712 1.591,-1.59c-0,-0.878 -0.713,-1.59 -1.591,-1.59c-0.877,-0 -1.59,0.712 -1.59,1.59c0,0.878 0.713,1.59 1.59,1.59Zm8.91,-4.5c0.878,0 1.59,-0.712 1.59,-1.59c0,-0.878 -0.712,-1.59 -1.59,-1.59c-0.878,-0 -1.59,0.712 -1.59,1.59c-0,0.878 0.712,1.59 1.59,1.59Zm15.259,-19.934c-0.477,0.659 -0.759,1.469 -0.759,2.344c0,2.208 1.792,4 4,4c2.208,0 4,-1.792 4,-4c0,-2.208 -1.792,-4 -4,-4c-0.606,-0 -1.181,0.135 -1.695,0.377c-4.368,-4.546 -10.509,-7.377 -17.305,-7.377c-9.914,-0 -18.432,6.024 -22.09,14.608c-0.216,0.508 0.021,1.096 0.528,1.312c0.508,0.216 1.096,-0.02 1.312,-0.528c3.354,-7.869 11.162,-13.392 20.25,-13.392c6.177,-0 11.762,2.551 15.759,6.656Z"/>
                                        </g>
                                    </svg>
                                    <div className="ms-4">50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 weather-container">
                        <div className="bg-container container-blur container-properties">

                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}