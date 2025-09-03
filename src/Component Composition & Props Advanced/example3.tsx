import React from "react";
import { motion } from "framer-motion";

interface BaseProps {
  children: React.ReactNode;
}

interface CardProps extends BaseProps {
  title: string;
  subtitle?: string; 
}

const Card: React.FC<CardProps> = ({ title, subtitle = "Default Subtitle", children }) => {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-xl p-6 max-w-sm w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6 p-4">
      <Card title="Card 1">
        <p>This card uses the default subtitle.</p>
      </Card>
      <Card title="Card 2" subtitle="Custom Subtitle">
        <p>This card has a custom subtitle.</p>
      </Card>
    </div>
  );
};

export default App;
