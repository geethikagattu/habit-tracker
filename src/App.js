import React, { useState } from 'react'
import { useHabitStore } from './store/habitStore'

function App() {
  const { habits, addHabit, deleteHabit, editHabit, markHabitDone } = useHabitStore()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = () => {
    if (!name) return
    addHabit({ name, description })
    setName('')
    setDescription('')
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>🌱 Habit Tracker</h1>

      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>Add Habit</button>

      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <b>{habit.name}</b>: {habit.description}
            <br />
            <button onClick={() => markHabitDone(habit.id)}>✅ Mark Done Today</button>
            <button onClick={() => deleteHabit(habit.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
