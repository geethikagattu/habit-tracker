import { useHabitStore } from '../store/habitStore';
import HabitCard from './HabitCard';

export default function HabitList() {
  const habits = useHabitStore((s) => s.habits);

  return (
    <div>
      {habits.length === 0 && <p style={{ color: '#718096' }}>No habits yet. Add your first one above! ✨</p>}
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
}
