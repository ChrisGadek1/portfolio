import React from "react";

const MenuElement = ({name}) => {
    return(
        <li className="nav-item ms-4">
            <a className="nav-link active" aria-current="page" href="#">{name}</a>
        </li>
    )
}

export default MenuElement;