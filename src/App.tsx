import React from 'react';
import Example5 from './Basic/example5'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
      <Example5 label="Default Button" />              
      <Example5 label="Small Button" size="small" />  
      <Example5 label="Large Button" size="large" /> 
      <Example5 label="Disabled Button" disabled />   
    </div>
  );
};

export default App;