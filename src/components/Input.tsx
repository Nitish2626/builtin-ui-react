import React from "react";

type Input = {
    iconStyle?: string,
    icon?: React.ReactNode,
    inputType?: string,
    inputRef?: React.LegacyRef<HTMLInputElement> | undefined,
    inputPlaceholder?: string,
    inputValue?: string | number | undefined,
    onInputChange?: () => void,
    inputStyle?: string,
};

const Input: React.FC = (props: Input) => {
    return (
        <section
            className={`w-auto flex items-center justify-center`}
        >
            <section
                className={`w-10 h-10 flex items-center justify-center bg-white text-black rounded-l-md ${props.iconStyle}`}
            >
                {props.icon}
            </section>

            <input
                ref={props.inputRef}
                type={props.inputType}
                placeholder={props.inputPlaceholder}
                value={props.inputValue}
                onChange={props.onInputChange}
                className={`w-4/5 max-w-72 h-10 pl-1 pr-2 py-1 rounded-r-md text-lg outline-none bg-white text-black ${props.inputStyle}`}
            />
        </section>
    );
};

export default Input;