import { create } from 'zustand';

type User = {
    name: string;
    age: number;
};

type UserState = {
    user: User;
    setName: (name: string) => void;
    increaseAge: () => void;
};


const useUserStore = create<UserState>((set) => ({
    user: { name: 'Ali', age: 25 },
    setName: (name) =>
        set((state) => ({
            user: { ...state.user, name },
        })),
    increaseAge: () =>
        set((state) => ({
            user: { ...state.user, age: state.user.age + 1 },
        })),
}));

export default useUserStore;
