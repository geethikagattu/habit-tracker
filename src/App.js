import HabitForm from './components/HabitForm';   // Form to add new habits
import HabitList from './components/HabitList';   // List to show all habits

export default function App() {
  return (
    <div
      style={{
        maxWidth: '700px',                       // Center the app nicely
        margin: 'auto',
        padding: '30px',
        fontFamily: 'Segoe UI, sans-serif',      // Smooth, modern font
        backgroundColor: '#f5f7fa',              // Soft background color
        minHeight: '100vh',                      // Take full height
      }}
    >
      {/* App Title */}
      <h1 style={{ textAlign: 'center', color: '#4a90e2' }}>Habit Tracker</h1>

      {/* Add Habit Form */}
      <HabitForm />

      {/* Habit List */}
      <HabitList />
    </div>
  );
}
