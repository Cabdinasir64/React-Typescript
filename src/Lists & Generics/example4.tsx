import { motion } from "framer-motion";
import type { JSX } from "react";

interface Column<T> {
    header: string;
    accessor: (item: T) => string | number | JSX.Element;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
}
function Table<T>({ data, columns }: TableProps<T>) {
    return (
        <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
                <tr>
                    {columns.map((col, idx) => (
                        <th
                            key={idx}
                            className="px-4 py-2 border-b border-gray-300 text-left"
                        >
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <motion.tr
                        key={rowIndex}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-gray-100"
                    >
                        {columns.map((col, colIndex) => (
                            <td
                                key={colIndex}
                                className="px-4 py-2 border-b border-gray-300"
                            >
                                {col.accessor(row)}
                            </td>
                        ))}
                    </motion.tr>
                ))}
            </tbody>
        </table>
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

const products: Product[] = [
    { id: 1, title: "Laptop", price: 1200, isAvailable: true },
    { id: 2, title: "Headphones", price: 150, isAvailable: true },
    { id: 3, title: "Keyboard", price: 80, isAvailable: false },
    { id: 4, title: "Mouse", price: 50, isAvailable: true },
];

export default function App() {
    return (
        <div className="p-6 space-y-10">
            <div>
                <h1 className="text-2xl font-bold text-center mb-4">Users Table</h1>
                <Table
                    data={users}
                    columns={[
                        { header: "ID", accessor: (user) => user.id },
                        { header: "Name", accessor: (user) => user.name },
                        { header: "Age", accessor: (user) => user.age },
                    ]}
                />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-center mb-4">Products Table</h1>
                <Table
                    data={products}
                    columns={[
                        { header: "Title", accessor: (product) => product.title },
                        { header: "Price", accessor: (product) => `$${product.price}` },
                        {
                            header: "Available",
                            accessor: (product) =>
                                product.isAvailable ? "Yes" : "No",
                        },
                    ]}
                />
            </div>
        </div>
    );
}
