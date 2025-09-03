import { motion } from "framer-motion";

type User = {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ayaan" },
    { id: 3, name: "Hodan" },
];

export default function UserList() {
    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
            <ul className="space-y-3">
                {users.map((user) => (
                    <motion.li
                        key={user.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-blue-100 rounded-lg shadow hover:bg-blue-200 cursor-pointer"
                    >
                        {user.name}
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
