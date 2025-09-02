import React from "react";

type User = {
  id: number;
  name: string;
  age: number;
  isStudent: boolean;
};

type UserListProps = {
  users: User[]; 
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-lg rounded-xl p-6 flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">Age: {user.age}</p>
          </div>
          <span
            className={`px-4 py-2 rounded-full font-semibold ${
              user.isStudent ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {user.isStudent ? "Student" : "Not a Student"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
