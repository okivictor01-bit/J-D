export default function Terms() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Terms and Conditions</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#374151', lineHeight: '1.6' }}>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Acceptance of Terms</h2>
          <p>By accessing and using J&D Babies Store, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. Products and Pricing</h2>
          <p>All products are subject to availability. We reserve the right to limit the quantities of any products or services that we offer. Prices are subject to change without notice.</p>
        </section>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. Payment</h2>
          <p>We use secure third-party payment processors (Paystack) to handle all transactions. By making a purchase, you agree to provide current, complete, and accurate purchase and account information.</p>
        </section>
      </div>
    </main>
  );
}
