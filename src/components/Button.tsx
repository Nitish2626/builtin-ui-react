import React from "react";

type Button = {
    text?: string,
    image?: React.ReactNode | string,
    click?: () => void,
    style?: string
}

const Button:React.FC = ({ text="Click Me", image, click, style }: Button) => {
    return (
        <button
            className={`flex items-center justify-center gap-2 bg-white text-black text-lg font-semibold rounded-md py-2 px-4 ${style}`}
            onClick={click}
        >
            {image}
            {text}
        </button>
    );
};

export default Button;