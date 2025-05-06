"use client"
import { useEffect, useState } from 'react';

export default function Employees({ department }) {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const [version, setVersion] = useState(0);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch(`/api/${department}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
          setEmployees(sorted);
          setError('');
        } else {
          setEmployees([]);
          setError(data.message || 'Unexpected response');
        }
      } catch (e) {
        console.error("Fetch error:", e);
        setError("Server error while fetching employees.");
        setEmployees([]);
      }
    }

    fetchEmployees();
  }, [department, version]);

  const toggleAway = async (emp) => {
    try {
      const response = await fetch(`/api/${department}/${emp.name}`, 
        {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ away: !emp.away }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle away status');
      }

      setVersion(v => v + 1);
    } catch (e) {
      console.error("Toggle error:", e);
      setError("Could not toggle employee status.");
    }
  };

  const removeEmployee = async (emp) => {
    if (emp.away) return;

    try {
      const response = await fetch(`/api/${department}/${emp.name}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete employee');
      }

      setVersion(v => v + 1);
    } catch (e) {
      console.error("Delete error:", e);
      setError("Could not delete employee.");
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}

      {employees.map(emp => (
        <div key={emp.name} className="employee">
          <span>{emp.name} ({emp.position})</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button 
              onClick={() => toggleAway(emp)} 
              className={`status ${emp.away ? 'away' : 'available'}`}
            >
              {emp.away ? 'Away' : 'Available'}
            </button>
            <button 
              onClick={() => removeEmployee(emp)} 
              className="remove-button"
              style={{ textDecoration: emp.away ? 'line-through' : 'none' }}
              disabled={emp.away}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
