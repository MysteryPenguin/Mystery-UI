import { HTMLAttributes, ReactNode, useState } from "react";

interface InputProps {
    text?: string;
    inputStyle?: InputStyleProps;
    children: ReactNode;
    element?: HTMLAttributes<HTMLDivElement>;
    input?: HTMLAttributes<HTMLInputElement>;
    icon?: HTMLAttributes<HTMLDivElement>;
    spanText?: HTMLAttributes<HTMLSpanElement>;
}

interface InputStyleProps {
    borderColor?: string;
}

/**
 * 
 * A prefabricated input for faster and easier styling
 * 
 * {@link(https://github.com/MysteryPenguin/Mystery-UI/wiki/Input) Mystery-UI Docs}
 */
export function Input({
    inputStyle = {
        borderColor: "white"
    },
    text = "",
    children,
    element,
    icon,
    spanText,
    input
}: InputProps) {

    const [above, setAbove] = useState(false);

    return (
        <div
            style={{
                backgroundColor: "transparent",
                border: "none",
                borderBottom: `solid 2px ${inputStyle.borderColor}`,
                display: "flex",
                justifyContent: "left"
            }}
            {...element}
        >
            <input
                style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "transparent",
                    fontSize: "1em",
                    zIndex: 1
                }}
                onFocus={() => setAbove(true)}
                onBlur={(e) => { if (!e.target.value) setAbove(false) }}
                {...input}
            />
            <div 
                style={{
                    width: "10%",
                    justifyContent: "center",
                    display: "flex"
                }}
                {...icon}
            >
                {children}
            </div>
            <span
                style={{
                    position: "absolute",
                    marginTop: above ? "-12.5px" : "0px",
                    fontSize: above ? "0.75em" : "1em",
                    transition: "all 0.4s ease"
                }}
                {...spanText}
            >
                {text}
            </span>
        </div>
    )
}