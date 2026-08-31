'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // CHANGE THIS PASSWORD TO WHATEVER YOU WANT!
  const ADMIN_PASSWORD = 'JDBabies2024!'; 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '400px', margin: '5rem auto', padding: '2rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>Admin Login</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Please enter the admin password to continue.</p>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', textAlign: 'center' }} 
        />
        
        {error && <p style={{ color: '#dc2626', margin: 0, fontSize: '0.9rem' }}>{error}</p>}
        
        <button 
          type="submit" 
          style={{ padding: '1rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>
      
      <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#9ca3af' }}>
        <a href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>← Back to Store</a>
      </p>
    </main>
  );
}
