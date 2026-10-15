'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

export default function AdminOrders() {
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    // Security check
    if (localStorage.getItem('isAdmin') !== 'true') {
      router.push('/admin/login');
    }
    fetchOrders();
  }, [router]);

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setOrders(data);
    setLoading(false);
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    setUpdatingId(orderId);
    
    const { error } = await supabase
      .from('orders')
      .update({ status: newStatus })
      .eq('id', orderId);

    if (error) {
      alert('❌ Failed to update status: ' + error.message);
    } else {
      // Update the UI immediately without refreshing
      setOrders(orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ));
      alert(`✅ Order successfully updated to "${newStatus}"!`);
    }
    setUpdatingId(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return { bg: '#dbeafe', text: '#1e40af' }; // Blue
      case 'shipped': return { bg: '#fef3c7', text: '#92400e' }; // Yellow/Orange
      case 'delivered': return { bg: '#dcfce7', text: '#166534' }; // Green
      case 'cancelled': return { bg: '#fee2e2', text: '#991b1b' }; // Red
      default: return { bg: '#f3f4f6', text: '#374151' }; // Gray
    }
  };

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading orders...</div>;

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#1a1a1a', margin: 0 }}>Customer Orders</h1>
        <button onClick={() => router.push('/admin')} style={{ padding: '0.5rem 1rem', backgroundColor: '#f3f4f6', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          ← Back
        </button>
      </div>

      {orders.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>No orders found yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {orders.map((order) => {
            const colors = getStatusColor(order.status || 'paid');
            return (
              <div key={order.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                
                {/* Header: Date and Status Dropdown */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>
                    {new Date(order.created_at).toLocaleDateString()} at {new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  
                  <select 
                    value={order.status || 'paid'} 
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    disabled={updatingId === order.id}
                    style={{ 
                      padding: '0.4rem 0.8rem', 
                      borderRadius: '20px', 
                      border: 'none', 
                      backgroundColor: colors.bg, 
                      color: colors.text, 
                      fontWeight: 'bold', 
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    <option value="paid">Paid (Processing)</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                {/* Customer Info */}
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>{order.customer_name}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563' }}>📞 {order.customer_phone}</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563' }}>✉️ {order.customer_email}</p>
                </div>

                {/* Delivery Address */}
                <div style={{ backgroundColor: '#f9fafb', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280', fontWeight: 'bold', marginBottom: '0.25rem' }}>DELIVERY ADDRESS:</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#1a1a1a' }}>{order.delivery_address}</p>
                </div>

                {/* Total Amount */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Total Amount:</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#16a34a' }}>₦{Number(order.amount).toLocaleString()}</span>
                </div>
                
                {updatingId === order.id && <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#2563eb', marginTop: '0.5rem' }}>Updating...</p>}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
