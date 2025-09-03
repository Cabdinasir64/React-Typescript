import React from "react";

type ChildProps = {
    onButtonClick: () => void;
};

const Child: React.FC<ChildProps> = ({ onButtonClick }) => {
    return (
        <div className="bg-gray-200 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">Child Component</h2>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={onButtonClick}
            >
                Click Me
            </button>
        </div>
    );
};

const App: React.FC = () => {
    
    const handleClick = () => {
        alert("Button clicked in Child!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Child onButtonClick={handleClick} />
        </div>
    );
};

export default App;
