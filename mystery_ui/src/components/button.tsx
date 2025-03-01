import { useState, ReactNode, MouseEventHandler } from "react";

import "../css/fonts.css";

import { clone } from "../utils/clone";
import { Color } from "../utils/color";

interface ButtonProps {
    buttonStyle?: ButtonStyleProps;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "reset" | "button"
}

interface ButtonStyleProps {
    backgroundColor?: Color;
    color?: string;
    borderRadius?: string;
}

/**
 * 
 * A button with a prefabricated design
 * 
 */
export function Button({
    buttonStyle = {
        backgroundColor: new Color.RGB(24, 215, 54),
        color: "white",
        borderRadius: "16px"
    },
    children,
    onClick,
    type
}: ButtonProps) {
    if (!buttonStyle.backgroundColor) buttonStyle.backgroundColor = new Color.RGB(24, 215, 54);
    if (!buttonStyle.color) buttonStyle.color = "white";
    if (!buttonStyle.borderRadius) buttonStyle.borderRadius = "16px";

    const [isActive, setIsActive] = useState(false);
    const borderColor = clone(buttonStyle.backgroundColor);

    return (
        <button
            style={{
                borderBottomColor: borderColor.add(-32).transformToCSS(),
                borderBottomStyle: isActive ? "none" : "solid",
                borderBottomWidth: "4px",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                backgroundColor: buttonStyle.backgroundColor.transformToCSS(),
                height: isActive ? "calc(20% - 4px)" : "20%",
                width: "100%",
                borderRadius: buttonStyle.borderRadius,
                marginTop: isActive ? "4px" : "0px",
                color: buttonStyle.color,
                textAlign: "center",
                outline: "none"
            }}
            className="comic-neue"
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseLeave={() => setIsActive(false)}
            onTouchStart={() => setIsActive(true)}
            onTouchEnd={() => setIsActive(false)}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

