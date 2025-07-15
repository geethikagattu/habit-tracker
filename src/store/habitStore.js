import { create } from 'zustand'

export const useHabitStore = create((set) => ({
  habits: [],
  
  addHabit: (habit) =>
    set((state) => ({
      habits: [...state.habits, { ...habit, id: Date.now(), doneDates: [] }]
    })),

  deleteHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((habit) => habit.id !== id)
    })),

  editHabit: (id, updatedHabit) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id ? { ...habit, ...updatedHabit } : habit
      )
    })),

  markHabitDone: (id) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              doneDates: [...new Set([...habit.doneDates, new Date().toISOString().split('T')[0]])],
            }
          : habit
      )
    })),
}))
