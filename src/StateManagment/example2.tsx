import React from 'react';
import useUserStore from './example1';
import { motion } from 'framer-motion';

const App: React.FC = () => {
    const { user, setName, increaseAge } = useUserStore();

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1 className="text-2xl font-bold mb-4">Zustand + TypeScript</h1>

            <motion.div
                className="p-6 bg-white rounded-2xl shadow-lg w-80 text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <p className="text-lg">👤 Name: {user.name}</p>
                <p className="text-lg">🎂 Age: {user.age}</p>

                <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-4 border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <motion.button
                    onClick={increaseAge}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Increase Age
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default App;
