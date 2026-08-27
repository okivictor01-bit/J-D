'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Cart() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Shopping Cart</h1>
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '1rem' }}>Your cart is empty</p>
          <Link href="/" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: '#2563eb', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px', marginBottom: '1rem', alignItems: 'center' }}>
              <img src={item.image_url} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{item.name}</h3>
                <p style={{ color: '#2563eb', fontWeight: 'bold', margin: 0 }}>₦{item.price.toLocaleString()}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '0.5rem', backgroundColor: '#f3f4f6', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                <span style={{ padding: '0 1rem', fontWeight: 'bold' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '0.5rem', backgroundColor: '#f3f4f6', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ padding: '0.5rem 1rem', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Remove</button>
            </div>
          ))}
          <div style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px', marginTop: '2rem', boxShadow: '0 -4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
              <span>Total:</span>
              <span>{totalAmount.toLocaleString()}</span>
            </div>
            <button onClick={() => router.push('/checkout')} style={{ width: '100%', padding: '1rem', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </main>
  );
}
