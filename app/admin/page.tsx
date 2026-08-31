'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/admin/login');
  };

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#1a1a1a' }}>Admin Dashboard</h1>
        <button onClick={handleLogout} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <button onClick={() => router.push('/admin/orders')} style={{ padding: '2rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
          <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>View Orders</h2>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>See customer orders and details</p>
        </button>
        <button onClick={() => router.push('/admin/products')} style={{ padding: '2rem', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>️</div>
          <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>Manage Products</h2>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Add, edit, or remove products</p>
        </button>
      </div>
    </main>
  );
}
