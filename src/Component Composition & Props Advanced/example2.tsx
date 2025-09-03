import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type User = {
    id: number;
    name: string;
    email: string;
};

type CardProps = {
    children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <motion.div
            className="bg-white shadow-lg rounded-xl p-6 max-w-sm w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
};

const SkeletonCard: React.FC = () => {
    return (
        <div className="bg-gray-200 animate-pulse h-24 rounded-xl max-w-sm w-full mx-auto mb-4" />
    );
};

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUsers([
                { id: 1, name: "Ali", email: "ali@example.com" },
                { id: 2, name: "Ayaan", email: "ayaan@example.com" },
                { id: 3, name: "Mohamed", email: "mohamed@example.com" },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Users List</h1>

            {loading ? [1, 2, 3].map((i) => <SkeletonCard key={i} />) :
                users.map((user) => (
                    <Card key={user.id}>
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </Card>
                ))}
        </div>
    );
};

export default App;
