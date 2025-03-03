import { useState, ReactNode, HTMLAttributes } from "react";

import { clone } from "../utils/clone";
import { Color } from "../utils/color";

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
        backgroundColor: new Color.RGB(24, 215, 54),
        color: "white",
        borderRadius: "16px",
        font: "'Comic Neue', cursive"
    },
    children,
    ...props
}: ButtonProps) {
    if (!buttonStyle.backgroundColor) buttonStyle.backgroundColor = new Color.RGB(24, 215, 54);
    if (!buttonStyle.color) buttonStyle.color = "white";
    if (!buttonStyle.borderRadius) buttonStyle.borderRadius = "16px";
    if (!buttonStyle.font) buttonStyle.font = "'Comic Neue', cursive";

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
            onMouseDown={(e) => { 
                setIsActive(true); 
                if (props.onMouseDown) props.onMouseDown(e);
            }}
            onMouseUp={(e) => { 
                setIsActive(false); 
                if (props.onMouseUp) props.onMouseUp(e); 
            }}
            onMouseLeave={(e) => { 
                setIsActive(false); 
                if (props.onMouseLeave) props.onMouseLeave(e); 
            }}
            onTouchStart={(e) => {
                setIsActive(true);
                if (props.onTouchStart) props.onTouchStart(e);
            }}
            onTouchEnd={(e) => { 
                setIsActive(false);
                if (props.onTouchEnd) props.onTouchEnd(e);
            }}
            {...props}
        >
            {children}
        </button>
    )
}

