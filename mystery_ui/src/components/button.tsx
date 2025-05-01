import { useState, ReactNode, HTMLAttributes } from "react";

import { clone } from "../utils/clone";
import { Color } from "../utils/color";
import { config } from "../config";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    buttonStyle?: ButtonStyleProps;
    children: ReactNode;
}

interface ButtonStyleProps {
    backgroundColor?: Color;
    color?: string;
    borderRadius?: string;
    font?: string;
}

/**
 * 
 * A button with a prefabricated design
 * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Button
 * 
 */
export function Button({
    buttonStyle = {
        backgroundColor: config.button.backgroundColor,
        color: config.button.color,
        borderRadius: config.button.borderRadius,
        font: config.button.font
    },
    children,
    ...props
}: ButtonProps) {
    if (!buttonStyle.backgroundColor) buttonStyle.backgroundColor = config.button.backgroundColor;
    if (!buttonStyle.color) buttonStyle.color = config.button.color;
    if (!buttonStyle.borderRadius) buttonStyle.borderRadius = config.button.borderRadius;
    if (!buttonStyle.font) buttonStyle.font = config.button.font;

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
                height: isActive ? "calc(100% - 4px)" : "100%",
                width: "100%",
                borderRadius: buttonStyle.borderRadius,
                marginTop: isActive ? "4px" : "0px",
                color: buttonStyle.color,
                textAlign: "center",
                outline: "none",
                fontWeight: 700,
                fontStyle: "normal",
                fontFamily: buttonStyle.font
            }}
            className="comic-neue"
            onMouseDown={(e) => setIsActive(true)}
            onMouseUp={(e) => setIsActive(false)}
            onMouseLeave={(e) => setIsActive(false)}
            onTouchStart={(e) => setIsActive(true)}
            onTouchEnd={(e) => setIsActive(false)}
            {...props}
        >
            {children}
        </button>
    )
}

