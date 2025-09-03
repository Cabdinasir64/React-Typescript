import React from "react";
import { motion } from "framer-motion";

type CardProps = {
    children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

const App: React.FC = () => {
    return (
        <div className="flex items-center justify-between w-full max-w-3xl">
            <Card>
                <h1 className="text-2xl font-bold text-gray-800">Hello World 🌍</h1>
                <p className="text-gray-600 mt-2">
                    This is inside the <span className="font-semibold">Card</span> component.
                </p>
            </Card>
            <Card>
                <h1 className="text-2xl font-bold text-gray-800">Hello World 🌍</h1>
                <p className="text-gray-600 mt-2">
                    This is inside the <span className="font-semibold">Card</span> component.
                </p>
            </Card>
        </div>
    );
};

export default App;
