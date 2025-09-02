import React from "react";

type UserProps = {
    name: string;
    age: number;
    isStudent: boolean;
};

const UserCard: React.FC<UserProps> = ({ name, age, isStudent }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">Age: {age}</p>
            <p className={`font-semibold ${isStudent ? "text-green-600" : "text-red-600"}`}>
                {isStudent ? "Student" : "Not a Student"}
            </p>
        </div>
    );
};

export default UserCard;
