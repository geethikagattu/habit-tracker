import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

export default function App() {
  return (
    <div style={{
      maxWidth: '700px',
      margin: 'auto',
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
    }}>
      <h1 style={{ textAlign: 'center', color: '#4a90e2' }}>🌟 Habit Tracker</h1>
      <HabitForm />
      <HabitList />
    </div>
  );
}
