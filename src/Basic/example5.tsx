import React from "react";

type ButtonProps = {
    label: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, size = "medium", disabled = false, }) => {
    const sizeClass = size === "small" ? "px-3 py-1 text-sm" : size === "large" ? "px-6 py-3 text-lg" : "px-4 py-2 text-md";

    return (
        <button
            className={`bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition ${sizeClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
