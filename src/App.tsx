import React from 'react';
import Example4 from './Basic/example4';

const usersData = [
  { id: 1, name: "Abdinasir", age: 21, isStudent: true },
  { id: 2, name: "Amina", age: 25, isStudent: false },
  { id: 3, name: "Mohamed", age: 19, isStudent: true },
];

const App: React.FC = () => {
  return (
    <div>
      <Example4 users={usersData} />
    </div>
  );
};

export default App;