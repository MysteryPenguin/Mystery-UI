import { useState, ReactNode, HTMLAttributes } from "react";
import { clone } from "../utils/clone";
import { Color } from "../utils/color";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    buttonStyle?: Partial<ButtonStyleProps>;
    children: ReactNode;
}

interface ButtonStyleProps {
    backgroundColor: Color;
    color: string;
    borderRadius: string;
    font: string;
}

/**
 * 
 * A button with a prefabricated style
 * 
 * {@link(https://github.com/MysteryPenguin/Mystery-UI/wiki Mystery-UI Docs)}
 */
export function Button({
    buttonStyle = {},
    children,
    ...props
}: ButtonProps) {
    const mergedStyle = {
        backgroundColor: buttonStyle.backgroundColor ?? new Color.RGB(24, 215, 54),
        color: buttonStyle.color ?? "white",
        borderRadius: buttonStyle.borderRadius ?? "16px",
        font: buttonStyle.font ?? "'Comic Neue', cursive",
    };

    const [isActive, setIsActive] = useState(false);
    const borderColor = clone(mergedStyle.backgroundColor);

    return (
        <button
            style={{
                borderBottomColor: borderColor.add(-32).transformToCSS(),
                borderBottomStyle: isActive ? "none" : "solid",
                borderBottomWidth: "4px",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                backgroundColor: mergedStyle.backgroundColor.transformToCSS(),
                height: isActive ? "calc(100% - 4px)" : "100%",
                width: "100%",
                borderRadius: mergedStyle.borderRadius,
                marginTop: isActive ? "4px" : "0px",
                color: mergedStyle.color,
                textAlign: "center",
                outline: "none",
                fontWeight: 700,
                fontStyle: "normal",
                fontFamily: mergedStyle.font
            }}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseLeave={() => setIsActive(false)}
            onTouchStart={() => setIsActive(true)}
            onTouchEnd={() => setIsActive(false)}
            {...props}
        >
            {children}
        </button>
    );
}
