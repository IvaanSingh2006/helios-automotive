import { useState } from "react";
export default function ContactPage() {
  const [form, setForm]           = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.includes("@") || !form.subject.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };
  const inp = {
    width: "100%", boxSizing: "border-box", padding: "12px 14px",
    border: "1.5px solid #e0d8d0", borderRadius: 8, fontSize: 14,
    outline: "none", fontFamily: "inherit", background: "#fff", transition: "border-color 0.2s",
  };
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "52px 24px 80px" }}>
      {/* Page heading */}
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <div style={{ color: "#C41E3A", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Get In Touch</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", color: "#1a1a1a", margin: "0 0 14px" }}>Contact Us</h2>
        <p style={{ color: "#888", fontSize: 15, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>Have a question about a part or want to place a bulk order? We're here to help.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>
        {/* Left — contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Phone */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 38, height: 38, background: "#fdf0f2", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#1a1a1a" }}>Call to Us:</div>
            </div>
            <div style={{ color: "#666", fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>We're available 24/7, 7 days a week.</div>
            <a href="tel:+919818825770" style={{ color: "#C41E3A", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "block" }}>+91-9818825770</a>
            <a href="tel:+919355202001" style={{ color: "#C41E3A", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>9355202001</a>
          </div>
          <div style={{ height: 1, background: "#f0e8e0" }} />
          {/* Email */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 38, height: 38, background: "#fdf0f2", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>✉️</div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#1a1a1a" }}>Write to Us:</div>
            </div>
            <div style={{ color: "#666", fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>Fill out our form and we will contact you within 24 hours.</div>
            <a href="mailto:info@heliosautomotive.in" style={{ color: "#C41E3A", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>info@heliosautomotive.in</a>
          </div>
          <div style={{ height: 1, background: "#f0e8e0" }} />
          {/* Address */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 38, height: 38, background: "#fdf0f2", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📍</div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#1a1a1a" }}>Headquarter:</div>
            </div>
            <div style={{ color: "#C41E3A", fontWeight: 600, fontSize: 14, lineHeight: 1.8, marginBottom: 10 }}>
              Plot No. G 458, Industrial Area,<br />
              MG Road, Hapur, Dasna,<br />
              Ghaziabad – 201001,<br />
              Uttar Pradesh, India
            </div>
            <div style={{ color: "#666", fontSize: 13, lineHeight: 1.7 }}>
              <div>Monday – Saturday : 9:00 AM – 5:30 PM</div>
              <div style={{ color: "#C41E3A", fontWeight: 600 }}>Sunday : Closed</div>
            </div>
          </div>
        </div>
        {/* Right — contact form */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div style={{ fontSize: 56 }}>✅</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", marginTop: 16 }}>Message Sent!</div>
              <div style={{ color: "#888", fontSize: 14, marginTop: 8 }}>We'll get back to you within 24 hours.</div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 6 }}>Your name</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inp} placeholder="e.g. Rajesh Kumar"
                  onFocus={e => e.target.style.borderColor = "#C41E3A"} onBlur={e => e.target.style.borderColor = "#e0d8d0"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 6 }}>Your email</label>
                <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inp} placeholder="you@example.com"
                  onFocus={e => e.target.style.borderColor = "#C41E3A"} onBlur={e => e.target.style.borderColor = "#e0d8d0"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 6 }}>Subject</label>
                <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} style={inp} placeholder="e.g. Bulk order enquiry"
                  onFocus={e => e.target.style.borderColor = "#C41E3A"} onBlur={e => e.target.style.borderColor = "#e0d8d0"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 6 }}>
                  Your message <span style={{ color: "#bbb", fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={5} placeholder="Tell us what you need..."
                  style={{ ...inp, resize: "vertical", lineHeight: 1.6 }}
                  onFocus={e => e.target.style.borderColor = "#C41E3A"} onBlur={e => e.target.style.borderColor = "#e0d8d0"} />
              </div>
              <button onClick={handleSubmit}
                style={{ background: "linear-gradient(135deg, #C41E3A, #8B0000)", color: "#fff", border: "none", borderRadius: 30, padding: "13px 36px", fontSize: 13, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", letterSpacing: 1, textTransform: "uppercase", alignSelf: "flex-start" }}>
                Submit
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
