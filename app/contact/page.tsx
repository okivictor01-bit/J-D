export default function Contact() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>We'd love to hear from you! Reach out to us via any of the channels below.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>📞 Phone / WhatsApp</h3>
          <p style={{ margin: 0, color: '#4b5563' }}>+234 813 677 5713</p>
          <a href="https://wa.me/2348136775713" style={{ display: 'inline-block', marginTop: '1rem', color: '#25D366', fontWeight: 'bold', textDecoration: 'none' }}>Chat on WhatsApp →</a>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>✉️ Email</h3>
          <p style={{ margin: 0, color: '#4b5563' }}>support@jdbabiesstore.com</p>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>📍 Location</h3>
          <p style={{ margin: 0, color: '#4b5563' }}>Nigeria</p>
        </div>
      </div>
    </main>
  );
}
