export default function FAQ() {
  const faqs = [
    { q: "How long does delivery take?", a: "Delivery typically takes 2-5 working days depending on your location within Nigeria." },
    { q: "Do you accept returns?", a: "Yes, we accept returns within 7 days of delivery if the product is unused and in its original packaging." },
    { q: "How do I track my order?", a: "Once your order is shipped, we will send you a tracking number via WhatsApp or SMS." },
    { q: "Are the products authentic?", a: "Absolutely! We source all our baby products directly from verified manufacturers and distributors." }
  ];

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Frequently Asked Questions</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#1a1a1a' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#4b5563' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
