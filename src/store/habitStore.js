import { create } from 'zustand';               // Zustand for state management
import { format } from 'date-fns';              // To format today’s date

const today = format(new Date(), 'yyyy-MM-dd'); //Format today's date once for reuse

// Zustand global store for all habits
export const useHabitStore = create((set) => ({
  // Initial habit list (empty)
  habits: [],

  // Add a new habit (with a unique id + empty doneDates)
  addHabit: (habit) =>
    set((state) => ({
      habits: [
        ...state.habits,
        {
          ...habit,
          id: Date.now(),        // Simple unique ID using timestamp
          doneDates: [],         // Track which days it's done
        },
      ],
    })),

  // 🗑️ Delete a habit by ID
  deleteHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((h) => h.id !== id),  // remove it from the list
    })),

  // Update name or description of a habit
  updateHabit: (id, name, description) =>
    set((state) => ({
      habits: state.habits.map((h) =>
        h.id === id ? { ...h, name, description } : h    // update only the matching habit
      ),
    })),

  // Toggle today's "done" status for a habit
  toggleHabitToday: (id) =>
    set((state) => ({
      habits: state.habits.map((h) =>
        h.id === id
          ? {
              ...h,
              doneDates: h.doneDates.includes(today)
                ? h.doneDates.filter((d) => d !== today) // unmark if already done
                : [...h.doneDates, today],               // mark as done if not yet
            }
          : h
      ),
    })),
}));
