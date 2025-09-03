import React, { useState } from "react";
import { motion } from "framer-motion";

const CounterDemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                key={count}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-6xl font-bold mb-6"
            >
                {count}
            </motion.div>

            <div className="flex space-x-4">
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    -
                </button>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                    Reset
                </button>
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CounterDemo;
