import React from "react";
import '../css/Hello.css'

const Hello = () => {
    return(
        <div className="d-flex align-items-center h-100 hello-container">
            <div>
                <div className="d-flex justify-content-center">
                    <div>
                        <div className="text-curtain"></div>
                        <p className="text-break text-center main-text">Chris Gadek</p>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        <div className="text-curtain"></div>
                        <p className="text-break text-center main-text">Web Developer</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hello;