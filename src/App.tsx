import React from 'react';
import Example3 from './Basic/example3';

const App: React.FC = () => {
  return (
    <div>
      <Example3 name="John Doe" age={30} isStudent={false} />
    </div>
  );
};

export default App;