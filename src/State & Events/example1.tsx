import React, { useState } from "react";
import { motion } from "framer-motion";

const CounterWithName: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const increment = () => setCount(prev => prev + 1);

    const decrement = () => setCount(prev => prev - 1);

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow-lg text-center">
            <motion.h1
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Hello {name || "Guest"}!
            </motion.h1>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                className="w-full p-2 mb-4 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <motion.div
                className="flex items-center justify-center space-x-4 mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    -
                </button>

                <motion.span
                    key={count}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-bold"
                >
                    {count}
                </motion.span>

                <button
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    +
                </button>
            </motion.div>

            <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                TypeScript + useState with types!
            </motion.p>
        </div>
    );
};

export default CounterWithName;
