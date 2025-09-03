import React from 'react';
import { motion } from 'framer-motion';
import useCounterStore from './example3';

const CounterApp: React.FC = () => {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="p-6 bg-white rounded-2xl shadow-lg text-center w-80"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-2xl font-bold mb-4">Zustand Counter</h1>
        <motion.p
          className="text-3xl font-bold mb-6"
          key={count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {count}
        </motion.p>

        <div className="flex gap-3 justify-center">
          <motion.button
            onClick={decrease}
            className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            -
          </motion.button>

          <motion.button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset
          </motion.button>

          <motion.button
            onClick={increase}
            className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            +
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CounterApp;
