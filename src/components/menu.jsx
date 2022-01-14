import React from "react";
import MenuElement from "./MenuElement";


const Menu = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Chris Gadek</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <MenuElement name="Home"/>
                        <MenuElement name="Experience" />
                        <MenuElement name="Education" />
                        <MenuElement name="Projects" />
                        <MenuElement name="About me"/>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;