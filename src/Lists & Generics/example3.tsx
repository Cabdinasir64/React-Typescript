import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import type { JSX } from "react";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => JSX.Element;
}

function List<T>({ items, renderItem }: ListProps<T>) {
    return (
        <ul className="space-y-3 max-w-md mx-auto">
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {renderItem(item)}
                </motion.li>
            ))}
        </ul>
    );
}

interface User {
    id: number;
    name: string;
    age: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    isAvailable: boolean;
}

const users: User[] = [
    { id: 1, name: "Ali", age: 23 },
    { id: 2, name: "Ayaan", age: 21 },
    { id: 3, name: "Hodan", age: 25 },
];

const initialProducts: Product[] = [
    { id: 1, title: "Laptop", price: 1200, isAvailable: true },
    { id: 2, title: "Headphones", price: 150, isAvailable: true },
    { id: 3, title: "Keyboard", price: 80, isAvailable: false },
    { id: 4, title: "Mouse", price: 50, isAvailable: true },
];

export default function App() {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    const toggleAvailability = useCallback((id: number) => {
        setProducts((prev) =>
            prev.map((product) =>
                product.id === id
                    ? { ...product, isAvailable: !product.isAvailable }
                    : product
            )
        );
    }, []);

    return (
        <div className="p-6 space-y-10">
            <div>
                <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
                <List
                    items={users}
                    renderItem={(user) => (
                        <div className="p-4 bg-purple-100 rounded shadow flex justify-between items-center">
                            <div>
                                <p className="font-bold">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.age} years old</p>
                            </div>
                            <button
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                onClick={() => alert(`Hello ${user.name}`)}
                            >
                                Say Hi
                            </button>
                        </div>
                    )}
                />
            </div>

            <div>
                <h1 className="text-2xl font-bold text-center mb-4">Product List</h1>
                <List
                    items={products}
                    renderItem={(product) => (
                        <div className="p-4 bg-green-100 rounded-lg shadow flex justify-between items-center hover:bg-green-200">
                            <span>
                                {product.title} - ${product.price} -{" "}
                                {product.isAvailable ? "Available" : "Out of Stock"}
                            </span>
                            <button
                                className={`px-3 py-1 rounded ${product.isAvailable
                                    ? "bg-red-500 text-white hover:bg-red-600"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                                    }`}
                                onClick={() => toggleAvailability(product.id)}
                            >
                                {product.isAvailable ? "Mark Unavailable" : "Mark Available"}
                            </button>
                        </div>
                    )}
                />
            </div>
        </div>
    );
}
