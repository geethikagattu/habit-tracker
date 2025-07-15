import { create } from 'zustand';
import { format } from 'date-fns';

const today = format(new Date(), 'yyyy-MM-dd');

export const useHabitStore = create((set) => ({
  habits: [],
  addHabit: (habit) =>
    set((state) => ({
      habits: [...state.habits, { ...habit, id: Date.now(), doneDates: [] }],
    })),
  deleteHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((h) => h.id !== id),
    })),
  updateHabit: (id, name, description) =>
    set((state) => ({
      habits: state.habits.map((h) =>
        h.id === id ? { ...h, name, description } : h
      ),
    })),
  
  toggleHabitToday: (id) =>
    set((state) => ({
      habits: state.habits.map((h) =>
        h.id === id
          ? {
              ...h,
              doneDates: h.doneDates.includes(today)
                ? h.doneDates.filter((d) => d !== today)
                : [...h.doneDates, today],
            }
          : h
      ),
    })),
}));
