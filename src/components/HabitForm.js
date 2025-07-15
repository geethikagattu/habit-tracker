import { useState } from 'react';
import { useHabitStore } from '../store/habitStore';

export default function HabitForm() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const addHabit = useHabitStore((s) => s.addHabit);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addHabit({ name, description: desc });
      setName('');
      setDesc('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        placeholder="📝 Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      <input
        placeholder="📄 Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      <button type="submit" style={{
        backgroundColor: '#4a90e2',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        ➕ Add Habit
      </button>
    </form>
  );
}
