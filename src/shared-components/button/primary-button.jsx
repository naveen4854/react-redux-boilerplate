import React from 'react';


const Button = (props) => {

    const click = (e) => {
        if (props.onClick)
            props.onClick(e);
    }

    const finalClass = "".concat(" ", props.className || " ", " ", "primary-button")

    return (
        <button id={"button_" + props.name} className={finalClass} onClick={click}>{props.label}</button>
    )
}

export default Button;