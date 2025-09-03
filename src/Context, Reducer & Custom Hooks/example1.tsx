import React, { useReducer, useCallback } from 'react';
import { motion } from 'framer-motion';
type State = {
    count: number;
};

type Action = | { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
};

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const Decrement = useCallback(() => {
        if (state.count - 1 < 0) {
            alert("Count cannot be negative");
            return {count: 0};
        }
        dispatch({ type: 'decrement' });
    }, [dispatch]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                key={state.count}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="text-6xl font-bold text-blue-600 mb-8"
            >
                {state.count}
            </motion.div>

            <div className="space-x-4">
                <button
                    onClick={() => dispatch({ type: 'increment' })}
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    +
                </button>
                <button
                    onClick={Decrement}
                    className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    -
                </button>
                <button
                    onClick={() => dispatch({ type: 'reset' })}
                    className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
