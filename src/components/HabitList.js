import { useHabitStore } from '../store/habitStore';   // Zustand store
import HabitCard from './HabitCard';                   // Card component for each habit

export default function HabitList() {
  const habits = useHabitStore((s) => s.habits);       // Get all habits from store

  return (
    <div>
      {/* Show message if no habits yet */}
      {habits.length === 0 && (
        <p style={{ color: '#718096' }}>
          No habits yet. Add your first one above!
        </p>
      )}

      {/*Render each habit inside a HabitCard */}
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
}
