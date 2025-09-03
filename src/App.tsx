import React from 'react';
import { UserProvider } from './Context, Reducer & Custom Hooks/example2'
import { Example3 } from './Context, Reducer & Custom Hooks/example3'
const App: React.FC = () => {
  return (
    <UserProvider>
      <Example3 />
    </UserProvider>
  );
};

export default App;