import { create } from 'zustand';

type CounterState = {
    count: number;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
};

const useCounterStore = create<CounterState>((set, get) => ({
    count: 0,
    increase: () => {
        const current = get().count;
        if (current < 10) {
            set({ count: current + 1 });
        } else {
            alert('Count cannot exceed 10 🚫');
        }
    },
    decrease: () => {
        const current = get().count;
        if (current > 0) {
            set({ count: current - 1 });
        } else {
            alert('Count cannot go below 0 🚫');
        }
    },
    reset: () => set({ count: 0 }),
}));

export default useCounterStore;
