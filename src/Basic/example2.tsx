import React from "react";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-blue-600">MyWebsite</h1>
                    <ul className="flex space-x-6 text-gray-700 font-medium">
                        <li className="hover:text-blue-600 transition">Home</li>
                        <li className="hover:text-blue-600 transition">About</li>
                        <li className="hover:text-blue-600 transition">Services</li>
                        <li className="hover:text-blue-600 transition">Contact</li>
                    </ul>
                </div>
            </nav>
            <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
                        Welcome to MyWebsite
                    </h1>
                    <p className="text-lg opacity-90 mb-6">
                        We build amazing websites with <span className="font-semibold">React</span> and <span className="font-semibold">TailwindCSS</span>.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white text-blue-600 font-bold rounded-2xl shadow"
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default HomePage;
