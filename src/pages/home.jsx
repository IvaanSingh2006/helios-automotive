export default function HomePage({ onShopNow }) {
  const stats = [
    { value: "2010", label: "Est. Year" },
    { value: "200+", label: "Products" },
    { value: "15+",  label: "Years Experience" },
    { value: "50+",  label: "Vehicle Models" },
  ];
  const categories = [
    { icon: "⚙️", title: "Clutch Plates",   desc: "2W & 3W friction plates for all major models",    count: "37 SKUs" },
    { icon: "🔩", title: "Pressure Plates", desc: "Precision-engineered clutch pressure plates",      count: "12 SKUs" },
    { icon: "🎯", title: "Hub & Center",    desc: "Complete hub & center sets for bikes & autos",     count: "40 SKUs" },
    { icon: "🛠️", title: "Clutch Assembly", desc: "Full clutch assemblies ready to fit",              count: "29 SKUs" },
    { icon: "🛑", title: "Brake Shoes",     desc: "2W & 3W brake shoes for drums",                   count: "20 SKUs" },
    { icon: "⭕", title: "Ball Bearings",   desc: "V2-2RS series industrial grade bearings",          count: "14 SKUs" },
  ];
  const brands = ["Hero", "Honda", "Bajaj", "TVS", "Yamaha", "Royal Enfield", "Mahindra", "Piaggio"];
  const whyUs = [
    { icon: "🏭", title: "In-House Manufacturing", desc: "Every part manufactured at our Ghaziabad facility with precision die-casting machinery." },
    { icon: "✅", title: "Quality Assured",         desc: "Strict QC at every stage. Our parts meet or exceed OEM specifications." },
    { icon: "🇮🇳", title: "Make in India",          desc: "Proudly manufactured in India, supporting local industry since 2010." },
    { icon: "🚚", title: "Pan-India Dispatch",      desc: "Fast, reliable shipping to dealers and customers across India." },
    { icon: "💰", title: "Competitive Pricing",     desc: "Factory-direct pricing with transparent List Price + GST and MRP on every product." },
    { icon: "📞", title: "24/7 Support",            desc: "Our team is always available to help you find the right part for your vehicle." },
  ];
  return (
    <div>
      {/* ── HERO ── */}
      <div style={{ position: "relative", background: "linear-gradient(135deg, #0d0000 0%, #3a0008 40%, #8B0000 70%, #C41E3A 100%)", minHeight: 580, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "30px 30px" }} />
        <div style={{ position: "absolute", right: -120, top: -120, width: 600, height: 600, borderRadius: "50%", border: "80px solid rgba(255,255,255,0.03)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 60, top: 40, width: 360, height: 360, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "80px 24px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "6px 16px", marginBottom: 28 }}>
              <span style={{ fontSize: 12 }}>🇮🇳</span>
              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Proud Make in India Manufacturer</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5.5vw, 62px)", color: "#fff", margin: "0 0 20px", lineHeight: 1.12, fontWeight: 800 }}>
              The Passionate<br />
              <span style={{ color: "#ffb3be" }}>Pursuit of</span><br />
              Perfection.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.8, margin: "0 0 36px", maxWidth: 500 }}>
              Since 2010, Helios Automotive has manufactured world-class clutch plates, brake shoes, hub & center sets and more — for India's most trusted two-wheeler and three-wheeler brands.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={onShopNow}
                style={{ background: "#fff", color: "#C41E3A", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)"; }}>
                Browse Products →
              </button>
              <a href="tel:+919818825770"
                style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ── STATS STRIP ── */}
      <div style={{ background: "#C41E3A", padding: "0 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "28px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* ── ABOUT ── */}
      <div style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ color: "#C41E3A", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Who We Are</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#1a1a1a", margin: "0 0 20px", lineHeight: 1.3 }}>
              India's Trusted<br />Automotive Parts Manufacturer
            </h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.85, margin: "0 0 18px" }}>
              At Helios Automotive India, we pride ourselves on being your go-to destination for all things automotive. Established in 2010, we have consistently delivered top-notch service and quality products to meet the diverse needs of our valued customers.
            </p>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.85, margin: "0 0 28px" }}>
              We are a leading manufacturer of Automotive Door Hinges, Clutch Hub Centre Housing and Two Wheeler Parts from Ghaziabad, India.
            </p>
            <div style={{ display: "flex", gap: 32 }}>
              {[["2W Parts", "Bikes & Scooters"], ["3W Parts", "Auto Rickshaws"], ["Since 2010", "14+ Years"]].map(([a, b]) => (
                <div key={a}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#C41E3A" }}>{a}</div>
                  <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Clutch Plates",    val: "37", bg: "#fdf0f2", accent: "#C41E3A" },
              { label: "Hub & Center Sets",val: "33", bg: "#fff5f0", accent: "#e05a20" },
              { label: "Clutch Assemblies",val: "26", bg: "#f8f0ff", accent: "#7c3aed" },
              { label: "Brake Shoes",      val: "20", bg: "#f0fdf4", accent: "#16a34a" },
            ].map(({ label, val, bg, accent }) => (
              <div key={label} style={{ background: bg, borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: accent, lineHeight: 1 }}>{val}+</div>
                <div style={{ fontSize: 13, color: "#555", marginTop: 8, fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ── PRODUCT CATEGORIES ── */}
      <div style={{ background: "#f8f4f0", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: "#C41E3A", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>What We Make</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#1a1a1a", margin: 0 }}>Our Product Categories</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {categories.map((cat, i) => (
              <div key={i} onClick={onShopNow}
                style={{ background: "#fff", borderRadius: 14, padding: "28px 24px", cursor: "pointer", border: "1.5px solid transparent", transition: "all 0.2s", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#C41E3A"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{cat.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#1a1a1a", marginBottom: 8 }}>{cat.title}</div>
                <div style={{ color: "#888", fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{cat.desc}</div>
                <div style={{ display: "inline-block", background: "#fdf0f2", color: "#C41E3A", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>{cat.count}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button onClick={onShopNow} style={{ background: "linear-gradient(135deg, #C41E3A, #8B0000)", color: "#fff", border: "none", borderRadius: 10, padding: "14px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
              View All Products →
            </button>
          </div>
        </div>
      </div>
      {/* ── BRANDS ── */}
      <div style={{ background: "#fff", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#C41E3A", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Compatibility</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3vw, 32px)", color: "#1a1a1a", margin: "0 0 40px" }}>Parts for Every Major Brand</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {brands.map(b => (
              <div key={b} onClick={onShopNow}
                style={{ background: "#f8f4f0", border: "1.5px solid #f0e8e0", borderRadius: 10, padding: "14px 28px", fontSize: 14, fontWeight: 700, color: "#333", cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#C41E3A"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#C41E3A"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#f8f4f0"; e.currentTarget.style.color = "#333"; e.currentTarget.style.borderColor = "#f0e8e0"; }}>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ── WHY HELIOS ── */}
      <div style={{ background: "#1a0a0a", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ color: "#ffb3be", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Why Choose Us</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#fff", margin: 0 }}>Built on Trust, Driven by Quality</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {whyUs.map((item, i) => (
              <div key={i}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "28px 24px", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(196,30,58,0.15)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 10 }}>{item.title}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ── CTA BANNER ── */}
      <div style={{ background: "linear-gradient(135deg, #C41E3A, #8B0000)", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 40px)", color: "#fff", margin: "0 0 16px" }}>Ready to Find Your Part?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, margin: "0 0 32px", lineHeight: 1.7 }}>Browse our full catalogue of 200+ automotive parts for 2W and 3W vehicles. Fast dispatch, competitive pricing, genuine quality.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <button onClick={onShopNow} style={{ background: "#fff", color: "#C41E3A", border: "none", borderRadius: 10, padding: "14px 36px", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
              Shop Now →
            </button>
            <a href="tel:+919818825770" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
              📞 +91-9818825770
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
