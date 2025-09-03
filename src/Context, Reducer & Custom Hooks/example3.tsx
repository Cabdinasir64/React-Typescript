import { useUser } from './example2';

export const Example3: React.FC = () => {
  const { user, setUser } = useUser();

  const handleLogin = () => {
    setUser({ name: 'Abdinasir', age: 22 });
  };

  return (
    <div>
      <h1>User Info</h1>
      {user ? (
        <p>
          Name: {user.name}, Age: {user.age}
        </p>
      ) : (
        <p>No user logged in.</p>
      )}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
