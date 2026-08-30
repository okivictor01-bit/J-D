export default function About() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a1a' }}>About J&D Babies Store</h1>
      <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.6' }}>
        Find comfort, care, and quality at J&D Babies Store.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#374151', lineHeight: '1.6' }}>
        
        {/* Who We Are */}
        <section>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>Who We Are</h2>
          <p style={{ margin: 0 }}>
            Welcome to J&D Babies Store, your number one source for all things baby. We're dedicated to giving you the very best of baby care products, with a focus on dependability, customer service, and uniqueness.
          </p>
        </section>

        {/* Our Mission */}
        <section>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>Our Mission</h2>
          <p style={{ margin: 0 }}>
            Our mission is simple: to help parents find comfort, care, and quality for their little ones. We understand that choosing the right products for your baby is a big responsibility, which is why we carefully select every item in our store to ensure it meets the highest standards of safety and quality.
          </p>
        </section>

        {/* Why Choose Us */}
        <section style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a1a' }}>Why Choose J&D Babies Store?</h2>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Quality Guaranteed:</strong> We only stock authentic, safe, and high-quality baby products.</li>
            <li><strong>Fast Delivery:</strong> We ensure your essentials reach you quickly and safely.</li>
            <li><strong>Customer First:</strong> Our support team is always just a WhatsApp message away to help you.</li>
            <li><strong>Affordable Prices:</strong> Premium care for your baby shouldn't break the bank.</li>
          </ul>
        </section>

        {/* Contact CTA */}
        <section style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ marginBottom: '1rem' }}>Have questions? We'd love to hear from you.</p>
          <a 
            href="https://wa.me/2348136775713" 
            style={{ 
              display: 'inline-block', 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#25D366', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold' 
            }}
          >
            Chat with us on WhatsApp
          </a>
        </section>

      </div>
    </main>
  );
}
