import { useState } from "react";
import { PRODUCTS } from "./data/products";
import { formatINR, categoryIcon, smallQtyBtn } from "./utils/helpers";
import PaymentModal  from "./components/paymentModal";
import HomePage      from "./pages/home";
import ProductsPage  from "./pages/product";
import ContactPage   from "./pages/contact";

export default function App() {
  // Page routing
  const [page, setPage] = useState("home");

  // Cart state (lives here so it persists across page changes)
  const [cart,     setCart]     = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [paying,   setPaying]   = useState(false);
  const [paid,     setPaid]     = useState(false);

  // Cart helpers
  const addToCart     = (id) => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeOne     = (id) => setCart(c => { const n = { ...c }; if (n[id] > 1) n[id]--; else delete n[id]; return n; });
  const removeAll     = (id) => setCart(c => { const n = { ...c }; delete n[id]; return n; });
  const handleSuccess = ()   => { setPaying(false); setPaid(true); setCart({}); };

  // Derived cart values
  const cartItems = Object.entries(cart).map(([id, qty]) => ({ ...PRODUCTS.find(p => p.id === +id), qty })).filter(Boolean);
  const cartTotal = cartItems.reduce((s, i) => s + i.mrp * i.qty, 0);
  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);

  // Nav config
  const navLinks   = ["Home", "Products", "Contact"];
  const navPageMap = { Home: "home", Products: "products", Contact: "contact" };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#f8f4f0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ── NAVBAR ── */}
      <nav style={{ background: "#C41E3A", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 16px rgba(196,30,58,0.35)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Logo — clicking takes you home */}
          <div onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
            <svg width="210" height="52" viewBox="0 0 210 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(2, 2)">
                <path d="M60 18 C68 18 74 14 82 12 C90 10 102 9 114 9 C124 9 134 11 140 14 C146 17 150 18 154 18"
                  stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                <path d="M55 22 C57 20 62 18 70 17 C78 16 86 14 96 13 C106 12 118 12 126 13 C134 14 140 16 146 18 C150 19 154 20 157 22"
                  stroke="rgba(255,255,255,0.55)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
              </g>
              <text x="0" y="36" fontFamily="Georgia, serif" fontWeight="700" fontSize="26" fill="#ffb3be" letterSpacing="-0.3">Helios</text>
              <text x="78" y="36" fontFamily="Georgia, serif" fontWeight="400" fontSize="26" fill="#ffffff" letterSpacing="-0.3">Automotive</text>
              <text x="2" y="50" fontFamily="Georgia, Times New Roman, serif" fontStyle="italic" fontSize="10" fill="rgba(255,255,255,0.7)" letterSpacing="0.3">... The Passionate Pursuit of Perfection</text>
            </svg>
          </div>

          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {navLinks.map(l => (
              <button key={l} onClick={() => setPage(navPageMap[l])}
                style={{
                  background:    "none",
                  border:        "none",
                  cursor:        "pointer",
                  fontFamily:    "inherit",
                  color:         page === navPageMap[l] ? "#fff" : "rgba(255,255,255,0.75)",
                  fontSize:      14,
                  fontWeight:    page === navPageMap[l] ? 700 : 500,
                  borderBottom:  page === navPageMap[l] ? "2px solid #fff" : "2px solid transparent",
                  paddingBottom: 2,
                }}>
                {l}
              </button>
            ))}

            {/* Cart button */}
            <button onClick={() => setCartOpen(true)}
              style={{ background: cartCount > 0 ? "#fff" : "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, color: cartCount > 0 ? "#C41E3A" : "#fff", fontWeight: 700, fontSize: 14, fontFamily: "inherit" }}>
              🛒 Cart {cartCount > 0 && <span style={{ background: "#C41E3A", color: "#fff", borderRadius: 12, padding: "1px 7px", fontSize: 11 }}>{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* ── PAGE ROUTER ── */}
      {page === "contact"  && <ContactPage />}
      {page === "home"     && <HomePage onShopNow={() => setPage("products")} />}
      {page === "products" && <ProductsPage cart={cart} addToCart={addToCart} removeOne={removeOne} />}

      {/* ── CART SIDEBAR ── */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
          <div onClick={() => setCartOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "min(440px, 100vw)", background: "#fff", boxShadow: "-4px 0 30px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column" }}>

            {/* Cart header */}
            <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#C41E3A" }}>
              <div style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700 }}>
                Your Cart {cartCount > 0 && `(${cartCount})`}
              </div>
              <button onClick={() => setCartOpen(false)} style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", width: 32, height: 32, borderRadius: 8, cursor: "pointer", fontSize: 18 }}>×</button>
            </div>

            {/* Cart items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 0", color: "#bbb" }}>
                  <div style={{ fontSize: 48 }}>🛒</div>
                  <div style={{ marginTop: 12, fontSize: 15 }}>Your cart is empty</div>
                </div>
              ) : cartItems.map(item => (
                <div key={item.id} style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 0", borderBottom: "1px solid #f5f0ed" }}>
                  <div style={{ width: 40, height: 40, background: "#fdf0f2", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                    {categoryIcon(item.category)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: "#bbb", marginTop: 2 }}>{item.sku} · MRP {formatINR(item.mrp)} × {item.qty}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontWeight: 800, color: "#C41E3A", fontSize: 14 }}>{formatINR(item.mrp * item.qty)}</div>
                    <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                      <button onClick={() => removeOne(item.id)} style={smallQtyBtn}>−</button>
                      <button onClick={() => addToCart(item.id)} style={smallQtyBtn}>+</button>
                      <button onClick={() => removeAll(item.id)} style={{ ...smallQtyBtn, color: "#C41E3A" }}>✕</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart footer */}
            {cartItems.length > 0 && (
              <div style={{ padding: "20px 24px", borderTop: "1px solid #f0e0e0" }}>
                <div style={{ fontSize: 11, color: "#bbb", marginBottom: 10 }}>Cart total based on MRP (all-inclusive)</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, paddingTop: 6, borderTop: "2px solid #f0e0e0" }}>
                  <span style={{ fontWeight: 800, fontSize: 16 }}>Total (MRP)</span>
                  <span style={{ fontWeight: 800, fontSize: 20, color: "#C41E3A" }}>{formatINR(cartTotal)}</span>
                </div>
                <button onClick={() => { setCartOpen(false); setPaying(true); }}
                  style={{ width: "100%", background: "linear-gradient(135deg, #C41E3A, #8B0000)", color: "#fff", border: "none", borderRadius: 10, padding: "14px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Proceed to Payment →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── PAYMENT MODAL ── */}
      {paying && <PaymentModal total={cartTotal} onClose={() => setPaying(false)} onSuccess={handleSuccess} />}

      {/* ── ORDER SUCCESS ── */}
      {paid && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "48px 40px", textAlign: "center", maxWidth: 380, boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ fontSize: 64 }}>✅</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", margin: "16px 0 8px" }}>Order Confirmed!</h2>
            <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7 }}>Thank you for your order. A confirmation will be sent to your email. Our team will be in touch shortly.</p>
            <button onClick={() => setPaid(false)} style={{ marginTop: 24, background: "#C41E3A", color: "#fff", border: "none", borderRadius: 8, padding: "12px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1a0a0a", color: "rgba(255,255,255,0.5)", padding: "28px 20px", textAlign: "center", fontSize: 13 }}>
        <div style={{ marginBottom: 10, display: "flex", justifyContent: "center" }}>
          <svg width="210" height="52" viewBox="0 0 210 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(2, 2)">
              <path d="M60 18 C68 18 74 14 82 12 C90 10 102 9 114 9 C124 9 134 11 140 14 C146 17 150 18 154 18"
                stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d="M55 22 C57 20 62 18 70 17 C78 16 86 14 96 13 C106 12 118 12 126 13 C134 14 140 16 146 18 C150 19 154 20 157 22"
                stroke="rgba(255,255,255,0.25)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
            </g>
            <text x="0" y="36" fontFamily="Georgia, serif" fontWeight="700" fontSize="26" fill="#C41E3A" letterSpacing="-0.3">Helios</text>
            <text x="78" y="36" fontFamily="Georgia, serif" fontWeight="400" fontSize="26" fill="rgba(255,255,255,0.6)" letterSpacing="-0.3">Automotive</text>
            <text x="2" y="50" fontFamily="Georgia, Times New Roman, serif" fontStyle="italic" fontSize="10" fill="rgba(255,255,255,0.35)" letterSpacing="0.3">... The Passionate Pursuit of Perfection</text>
          </svg>
        </div>
        <div style={{ marginBottom: 6 }}>
          <a href="tel:+919818825770"              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", marginRight: 16 }}>+91-9818825770</a>
          <a href="mailto:info@heliosautomotive.in" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>info@heliosautomotive.in</a>
        </div>
        <div>© 2026 Helios Automotive, Ghaziabad, UP. All List Prices exclude GST (28%). MRP is all-inclusive. Demo payment portal.</div>
      </footer>
    </div>
  );
}