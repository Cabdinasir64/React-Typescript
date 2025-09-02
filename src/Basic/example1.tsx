import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600 ">
        Welcome to <span className="text-purple-600">React + TypeScript</span> 🚀
      </h1>
    </div>
  );
};

export default Welcome;
