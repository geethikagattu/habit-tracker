import { useState } from 'react';
import { useHabitStore } from '../store/habitStore';
import { format } from 'date-fns';

export default function HabitCard({ habit }) {
  // Zustand store actions
  const deleteHabit = useHabitStore((s) => s.deleteHabit);         // deletes habit
  const toggle = useHabitStore((s) => s.toggleHabitToday);         // toggles today's status
  const updateHabit = useHabitStore((s) => s.updateHabit);         // updates habit details

  const today = format(new Date(), 'yyyy-MM-dd');                  // get today's date
  const isDone = habit.doneDates.includes(today);                 // check if today's done

  // local state for editing
  const [editMode, setEditMode] = useState(false);                 // track if in edit mode
  const [name, setName] = useState(habit.name);                    // editable name field
  const [desc, setDesc] = useState(habit.description);             // editable desc field

  // save updated habit
  const handleSave = () => {
    updateHabit(habit.id, name, desc);                             // update store
    setEditMode(false);                                            // exit edit mode
  };

  return (
    <div style={{
      backgroundColor: isDone ? '#d0f0c0' : '#fff',                // change bg if done
      border: '2px solid #e2e8f0',
      borderLeft: `8px solid ${isDone ? '#32cd32' : '#ff6b6b'}`,   // green/red left border
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    }}>
      {/* if in edit mode, show input fields */}
      {editMode ? (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '6px', marginBottom: '8px', width: '100%' }}
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{ padding: '6px', marginBottom: '10px', width: '100%' }}
          />
        </>
      ) : (
        <>
          <h3 style={{ marginBottom: '5px', color: '#2d3748' }}>{habit.name}</h3>
          <p style={{ marginBottom: '10px', color: '#4a5568' }}>{habit.description}</p>
        </>
      )}

      {/* status line */}
      <p style={{ fontWeight: 'bold', color: isDone ? '#2f855a' : '#e53e3e' }}>
        Status: {isDone ? 'Done Today' : 'Not Done'}
      </p>

      {/* action buttons */}
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {/* mark as done / undo */}
        <button onClick={() => toggle(habit.id)} style={{
          backgroundColor: isDone ? '#ed8936' : '#48bb78',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          {isDone ? 'Undo' : 'Mark Done'}
        </button>

        {/* edit/save/cancel */}
        {editMode ? (
          <>
            <button onClick={handleSave} style={{
              backgroundColor: '#3182ce',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              Save
            </button>
            <button onClick={() => setEditMode(false)} style={{
              backgroundColor: '#a0aec0',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              Cancel
            </button>
          </>
        ) : (
          <button onClick={() => setEditMode(true)} style={{
            backgroundColor: '#4299e1',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Edit
          </button>
        )}

        {/* delete habit */}
        <button onClick={() => deleteHabit(habit.id)} style={{
          backgroundColor: '#e53e3e',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Delete
        </button>
      </div>
    </div>
  );
}
