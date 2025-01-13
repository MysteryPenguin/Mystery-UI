import React, { CSSProperties, useState } from "react";

interface ButtonProps {
    style?: CSSProperties;
    buttonStyle?: { backgroundColor?: [number, number, number], color?: string, borderRadius?: string }
    id?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function Button({
    style,
    buttonStyle = { backgroundColor: [24, 215, 54], color: "white", borderRadius: "10px" }, 
    id, 
    className,
    children,
}: ButtonProps) {
    if (!buttonStyle.backgroundColor)   buttonStyle.backgroundColor = [24, 215, 54];
    if (!buttonStyle.color)             buttonStyle.color = "white";
    if (!buttonStyle.borderRadius)      buttonStyle.borderRadius = "10px";

    const [isActive, setIsActive] = useState(false);

    const ButtonStyle: CSSProperties = {
        borderBottom:       isActive ? "none" : `solid 6px rgb(${buttonStyle.backgroundColor[0] - 32}, ${buttonStyle.backgroundColor[1] - 32}, ${buttonStyle.backgroundColor[2] - 32})`,
        borderTop:          "none",
        borderLeft:         "none",
        borderRight:        "none",
        backgroundColor:    `rgb(${buttonStyle.backgroundColor})`,
        height:             isActive ? "calc(40% - 6px)" : "40%",
        width:              "100%",
        borderRadius:       buttonStyle.borderRadius,
        marginTop:          isActive ? "6px" : "0px",
        color:              buttonStyle.color
    }

    return (
        <div style={style} id={id} className={className}>
            <button
                style={ButtonStyle}
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
                onMouseLeave={() => setIsActive(false)}
            >
                {children}
            </button>
        </div>
    )
}