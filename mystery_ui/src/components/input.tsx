import { ChangeEventHandler, HTMLAttributeAnchorTarget, HTMLAttributes, ReactNode, useState } from "react";

interface InputProps {
    text?: string;
    inputStyle?: InputStyleProps;
    children: ReactNode;
    props?: InputPropsProps;
}

interface InputStyleProps {
    borderColor?: string;
}

interface InputPropsProps {
    element?: HTMLAttributes<HTMLDivElement>;
    input?: HTMLAttributes<HTMLInputElement>;
    icon?: HTMLAttributes<HTMLDivElement>;
    text?: HTMLAttributes<HTMLSpanElement>;
}

/**
 * 
 * A prefabricated input for faster and easier styling
 * 
 * {@link https://github.com/MysteryPenguin/Mystery-UI/wiki/Input|Mystery-UI Docs}
 */
export function Input({ 
    inputStyle = {
        borderColor: "white"
    }, 
    text = "",
    children,
    props
}: InputProps) {

    const [above, setAbove] = useState(false);

    return (
        <div style={{
            backgroundColor: "transparent",
            border: "none",
            borderBottom: `solid 2px ${inputStyle.borderColor}`,
            display: "flex",
            justifyContent: "left"
        }}>
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
            />
            <div style={{ 
                width: "10%", 
                justifyContent: "center", 
                display: "flex"
            }}>{children}</div>
            <span 
                style={{
                    position: "absolute", 
                    marginTop: above ? "-12.5px" : "0px",
                    fontSize: above ? "0.75em" : "1em",
                    transition: "all 1s ease"
                }}
            >
                {text}
            </span>
        </div>
    )
}