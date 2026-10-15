'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function TrackOrder() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOrder(null);

    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('customer_email', email)
        .eq('customer_phone', phone)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        setError('No order found with these details. Please check and try again.');
      } else {
        setOrder(data);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return { bg: '#dbeafe', text: '#1e40af' }; // Blue
      case 'shipped': return { bg: '#fef3c7', text: '#92400e' }; // Yellow
      case 'delivered': return { bg: '#dcfce7', text: '#166534' }; // Green
      default: return { bg: '#f3f4f6', text: '#374151' }; // Gray
    }
  };

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Track Your Order</h1>
      <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '2rem' }}>Enter the details you used at checkout.</p>

      {!order ? (
        <form onSubmit={handleTrack} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="you@example.com"
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', boxSizing: 'border-box' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Phone Number</label>
            <input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
              placeholder="08012345678"
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', boxSizing: 'border-box' }} 
            />
          </div>
          
          {error && <p style={{ color: '#dc2626', margin: 0, fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}
          
          <button 
            type="submit" 
            disabled={loading}
            style={{ padding: '1rem', backgroundColor: loading ? '#9ca3af' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '0.5rem' }}
          >
            {loading ? 'Searching...' : 'Track Order'}
          </button>
        </form>
      ) : (
        <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
            <div>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280' }}>Order Reference</p>
              <p style={{ margin: '0.25rem 0 0 0', fontWeight: 'bold', fontSize: '1.1rem' }}>#{order.reference?.slice(-6).toUpperCase()}</p>
            </div>
            <div style={{ 
              backgroundColor: getStatusColor(order.status).bg, 
              color: getStatusColor(order.status).text, 
              padding: '0.4rem 0.8rem', 
              borderRadius: '20px', 
              fontWeight: 'bold', 
              fontSize: '0.85rem',
              textTransform: 'capitalize'
            }}>
              {order.status || 'Processing'}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase' }}>Delivery Address</p>
            <p style={{ margin: 0, color: '#1a1a1a' }}>{order.delivery_address}</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase' }}>Total Amount</p>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem', color: '#2563eb' }}>₦{Number(order.amount).toLocaleString()}</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
            <Link href="/" style={{ textAlign: 'center', padding: '0.75rem', backgroundColor: '#f3f4f6', color: '#1a1a1a', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
              Back to Home
            </Link>
            <a 
              href={`https://wa.me/2348136775713?text=Hello, I am tracking my order #${order.reference?.slice(-6).toUpperCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: 'center', padding: '0.75rem', backgroundColor: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}
            >
              Chat on WhatsApp for Updates
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
