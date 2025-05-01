import { HTMLAttributes, ReactNode, useState } from "react";
import { config } from "../config";

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
 */
export function Input({
    inputStyle = {
        borderColor: config.input.borderColor
    },
    text = "",
    children,
    props
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
            {...props?.element}
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
                {...props?.input}
            />
            <div 
                style={{
                    width: "10%",
                    justifyContent: "center",
                    display: "flex"
                }}
                {...props?.icon}
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
                {...props?.text}
            >
                {text}
            </span>
        </div>
    )
}