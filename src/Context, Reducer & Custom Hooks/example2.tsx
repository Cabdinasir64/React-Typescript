import React, { createContext, useState, useContext } from 'react';

type User = {
    name: string;
    age: number;
};

type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User>>;
};

type UserProviderProps = {
    children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>({ name: '', age: 0 });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within a UserProvider');
    return context;
};
