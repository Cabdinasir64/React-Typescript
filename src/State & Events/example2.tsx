import React, { useState } from "react";
import { motion } from "framer-motion";

const AllEventsDemo: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [focus, setFocus] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    const handleReset = () => {
        setName("");
        setEmail("");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Submitted Name: ${name}, Email: ${email}`);
        handleReset();
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow-lg">
            <motion.h1
                className="text-2xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                All Events Demo
            </motion.h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={`w-full p-2 border rounded ${focus ? "border-blue-400 ring-2 ring-blue-200" : "border-gray-300"
                            }`}
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={`w-full p-2 border rounded ${focus ? "border-blue-400 ring-2 ring-blue-200" : "border-gray-300"
                            }`}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                >
                    Submit
                </button>
            </form>

            <motion.div
                className="flex items-center justify-center space-x-4 mt-6"
                initial={{ scale: 0.9 }}
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
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    +
                </button>
            </motion.div>
        </div>
    );
};

export default AllEventsDemo;
