import { useState, useMemo } from "react";
import { PRODUCTS, ALL_BRANDS, ALL_CATEGORIES } from "../data/products";
import { formatINR, categoryIcon, qtyBtn } from "../utils/helpers";
export default function ProductsPage({ cart, addToCart, removeOne }) {
  const [search,   setSearch]   = useState("");
  const [brand,    setBrand]    = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => PRODUCTS.filter(p => {
    const matchBrand  = brand    === "All" || p.brands.includes(brand);
    const matchCat    = category === "All" || p.category === category;
    const q           = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchBrand && matchCat && matchSearch;
  }), [search, brand, category]);

  return (
    <>
      {/* Hero banner */}
      <div style={{ background: "linear-gradient(135deg, #8B0000 0%, #C41E3A 50%, #E8294A 100%)", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Genuine 2W & 3W Automotive Parts</div>
          <h1 style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 5vw, 44px)", margin: "0 0 14px", lineHeight: 1.2 }}>
            Drive With Confidence.<br />Drive With Helios.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, margin: "0 0 24px", lineHeight: 1.7 }}>
            Clutch plates, brake shoes, hub & center sets, bearings and more — for Hero, Bajaj, TVS, Honda, Yamaha & beyond.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            {["200+ Products", "GST Extra on List Price", "Make in India"].map(tag => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: 20, padding: "6px 16px", fontSize: 13, fontWeight: 500 }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "28px 20px 12px" }}>
        {/* Search bar */}
        <div style={{ position: "relative", marginBottom: 16 }}>
          <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: "#aaa" }}>🔍</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, SKU or category..."
            style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px 12px 42px", border: "1.5px solid #e0d8d0", borderRadius: 10, fontSize: 14, outline: "none", background: "#fff", fontFamily: "inherit" }}
            onFocus={e => e.target.style.borderColor = "#C41E3A"}
            onBlur={e  => e.target.style.borderColor = "#e0d8d0"}
          />
        </div>

        {/* Brand filter */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Filter by Brand</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {ALL_BRANDS.map(b => (
              <button key={b} onClick={() => setBrand(b)}
                style={{ padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "1.5px solid", fontFamily: "inherit",
                  background: brand === b ? "#C41E3A" : "#fff",
                  borderColor: brand === b ? "#C41E3A" : "#e0d8d0",
                  color:       brand === b ? "#fff"    : "#555" }}>
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Filter by Category</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {ALL_CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "1.5px solid", fontFamily: "inherit",
                  background: category === c ? "#8B0000" : "#fff",
                  borderColor: category === c ? "#8B0000" : "#e0d8d0",
                  color:       category === c ? "#fff"    : "#666" }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div style={{ color: "#999", fontSize: 13, marginTop: 4 }}>{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</div>
      </div>

      {/* Product grid */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 20px 60px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#aaa" }}>
            <div style={{ fontSize: 48 }}>🔧</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginTop: 12 }}>No products found</div>
            <div style={{ fontSize: 14, marginTop: 6 }}>Try adjusting your search, brand or category filter</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 18 }}>
            {filtered.map(p => (
              <div key={p.id}
                style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(196,30,58,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)"; }}>

                {/* Card header */}
                <div style={{ background: "linear-gradient(135deg, #fdf0f2, #f8e8e8)", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", borderBottom: "1px solid #f0e0e0" }}>
                  <span style={{ fontSize: 32 }}>{categoryIcon(p.category)}</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ background: "#C41E3A", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>{p.category}</span>
                    <div style={{ display: "flex", gap: 4 }}>
                      {p.brands.map(b => (
                        <span key={b} style={{ background: "#f0e0e0", color: "#8B0000", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4 }}>{b}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "14px 16px 16px" }}>
                  <div style={{ fontSize: 10, color: "#ccc", letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{p.sku}</div>
                  <h3 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.4 }}>{p.name}</h3>
                  <div style={{ fontSize: 12, color: "#aaa", marginBottom: 12 }}>Pack of {p.pcs} pc{p.pcs > 1 ? "s" : ""}</div>

                  {/* Dual pricing */}
                  <div style={{ background: "#fdf8f8", border: "1px solid #f0e0e0", borderRadius: 8, padding: "10px 12px", marginBottom: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                    <div>
                      <div style={{ fontSize: 10, color: "#bbb", textTransform: "uppercase", letterSpacing: 0.5 }}>List Price</div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: "#C41E3A" }}>{formatINR(p.listPrice)}</div>
                      <div style={{ fontSize: 9, color: "#bbb" }}>GST extra</div>
                    </div>
                    <div style={{ borderLeft: "1px solid #f0e0e0", paddingLeft: 12 }}>
                      <div style={{ fontSize: 10, color: "#bbb", textTransform: "uppercase", letterSpacing: 0.5 }}>MRP / Set</div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: "#555" }}>{formatINR(p.mrp)}</div>
                      <div style={{ fontSize: 9, color: "#bbb" }}>incl. all taxes</div>
                    </div>
                  </div>

                  {/* Cart controls */}
                  {cart[p.id] ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                      <button onClick={() => removeOne(p.id)} style={qtyBtn}>−</button>
                      <span style={{ fontWeight: 700, fontSize: 16, minWidth: 24, textAlign: "center" }}>{cart[p.id]}</span>
                      <button onClick={() => addToCart(p.id)} style={qtyBtn}>+</button>
                    </div>
                  ) : (
                    <button onClick={() => addToCart(p.id)}
                      style={{ width: "100%", background: "#C41E3A", color: "#fff", border: "none", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s" }}
                      onMouseEnter={e => e.target.style.background = "#8B0000"}
                      onMouseLeave={e => e.target.style.background = "#C41E3A"}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
