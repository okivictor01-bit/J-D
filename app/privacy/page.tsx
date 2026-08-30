export default function Privacy() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Privacy Policy</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#374151', lineHeight: '1.6' }}>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, and delivery address.</p>
        </section>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. How We Use Your Information</h2>
          <p>We use the information we collect to process your orders, communicate with you about your purchases, and provide customer support. We do not sell your personal information to third parties.</p>
        </section>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
        </section>
      </div>
    </main>
  );
}
