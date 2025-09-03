import React from 'react';
import { motion } from 'framer-motion';
import useLocalStorage from './example4';

const App: React.FC = () => {
    const [name, setName] = useLocalStorage<string>('name', 'Ali');
    const [age, setAge] = useLocalStorage<number>('age', 25);
    const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('dark', false);

    return (
        <motion.div
            className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-500`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className={`border p-2 mr-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'
                    }`}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
            />
            <motion.input
                type="number"
                value={age}
                onChange={e => setAge(Number(e.target.value))}
                className={`border p-2 mr-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'
                    }`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            />
            <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`px-6 py-2 rounded shadow transition-colors duration-300 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Toggle Dark Mode
            </motion.button>
        </motion.div>
    );
};

export default App;
