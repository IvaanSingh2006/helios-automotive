import { useState } from "react";
import Field from "./field";
import { formatINR, redBtn, ghostBtn } from "../utils/helpers";
export default function PaymentModal({ total, onClose, onSuccess }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", card: "", expiry: "", cvv: "" });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.includes("@")) e.email = "Invalid email";
    if (form.card.replace(/\s/g, "").length !== 16) e.card = "Must be 16 digits";
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) e.expiry = "Format MM/YY";
    if (form.cvv.length < 3) e.cvv = "Must be 3–4 digits";
    return e;
  };

  const handlePay = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setProcessing(true);
    setTimeout(() => { setProcessing(false); onSuccess(); }, 2000);
  };

  const formatCard   = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const formatExpiry = (v) => v.replace(/\D/g, "").slice(0, 4).replace(/(\d{2})(\d)/, "$1/$2");

  const handleStep1Continue = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.includes("@")) e.email = "Invalid email";
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStep(2);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
      <div style={{ background: "#fff", borderRadius: 12, width: "min(480px, 95vw)", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, #C41E3A, #8B0000)", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#fff", fontSize: 18, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Secure Checkout</div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, marginTop: 2 }}>Helios Automotive</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Total (incl. GST)</div>
            <div style={{ color: "#fff", fontSize: 22, fontWeight: 800 }}>{formatINR(total)}</div>
          </div>
        </div>

        {/*Contact details */}
        {step === 1 && (
          <div style={{ padding: 24 }}>
            <p style={{ margin: "0 0 20px", color: "#555", fontSize: 13, lineHeight: 1.6 }}>
              ⚠️ <strong>Demo Mode:</strong> Simulated checkout — no real transaction will occur.
            </p>
            <Field label="Full Name"      error={errors.name}  value={form.name}  onChange={v => setForm(f => ({ ...f, name: v }))}  placeholder="John Smith" />
            <Field label="Email Address"  error={errors.email} value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} placeholder="john@example.com" />
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              <button onClick={onClose}            style={ghostBtn}>Cancel</button>
              <button onClick={handleStep1Continue} style={redBtn}>Continue →</button>
            </div>
          </div>
        )}

        {/*Card details */}
        {step === 2 && (
          <div style={{ padding: 24 }}>
            <div style={{ fontSize: 13, color: "#777", marginBottom: 16 }}>🔒 Card details are simulated and not stored.</div>
            <Field label="Card Number" error={errors.card}   value={form.card}   onChange={v => setForm(f => ({ ...f, card: formatCard(v) }))}     placeholder="1234 5678 9012 3456" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
              <Field label="Expiry" error={errors.expiry} value={form.expiry} onChange={v => setForm(f => ({ ...f, expiry: formatExpiry(v) }))} placeholder="MM/YY" />
              <Field label="CVV"    error={errors.cvv}    value={form.cvv}    onChange={v => setForm(f => ({ ...f, cvv: v.replace(/\D/g, "").slice(0, 4) }))} placeholder="•••" />
            </div>
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              <button onClick={() => setStep(1)} style={ghostBtn}>← Back</button>
              <button onClick={handlePay} disabled={processing} style={{ ...redBtn, opacity: processing ? 0.7 : 1 }}>
                {processing ? "Processing..." : `Pay ${formatINR(total)}`}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
