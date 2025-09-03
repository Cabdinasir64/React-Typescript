import { motion } from "framer-motion";
import { useState } from "react";

interface Task {
    id: number;
    title: string;
}

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Learn TypeScript" },
        { id: 2, title: "Build a React App" },
        { id: 3, title: "Master TailwindCSS" },
    ]);

    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Task List</h1>
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <motion.li
                        key={task.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-green-100 rounded-lg shadow flex justify-between items-center"
                    >
                        <span>{task.title}</span>
                        <button
                            onClick={() => removeTask(task.id)}
                            className="text-red-500 font-bold hover:text-red-700"
                        >
                            Delete
                        </button>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
