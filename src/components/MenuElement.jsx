import React from "react";

const MenuElement = ({name, href}) => {
    return(
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href={href}>{name}</a>
        </li>
    )
}

export default MenuElement;