import React from 'react'
export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto', padding: 40 }}>
      <h1>📋 Kanban Task Manager</h1>
      <p>A drag-and-drop Kanban board for managing tasks across projects.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 32 }}>
        {['To Do','In Progress','Done'].map(col => (
          <div key={col} style={{ background: '#f4f4f5', borderRadius: 8, padding: 16 }}>
            <h3 style={{ margin: '0 0 12px' }}>{col}</h3>
            <div style={{ background: '#fff', borderRadius: 6, padding: 12, boxShadow: '0 1px 3px rgba(0,0,0,.1)' }}>Sample task</div>
          </div>
        ))}
      </div>
    </div>
  )
}
