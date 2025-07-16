import { useState } from 'react';
import { useHabitStore } from '../store/habitStore';

export default function HabitForm() {
  // Local state for form fields
  const [name, setName] = useState('');         // habit name
  const [desc, setDesc] = useState('');         // habit description

  // Zustand store action to add new habit
  const addHabit = useHabitStore((s) => s.addHabit);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();                         // prevent page reload
    if (name) {
      addHabit({ name, description: desc });    // send to store
      setName('');                              // clear inputs
      setDesc('');
    }
  };

  // Form UI
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      {/* Habit name input */}
      <input
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />

      {/* Description input */}
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />

      {/* Add button */}
      <button
        type="submit"
        style={{
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Add Habit
      </button>
    </form>
  );
}
