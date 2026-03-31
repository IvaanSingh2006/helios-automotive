export const formatINR = (n) => "₹" + n.toLocaleString("en-IN");
export function categoryIcon(cat) {
  const icons = {
    "2W Clutch Plates": "⚙️",
    "2W Pressure Plates": "🔩",
    "Lifter Plates": "🪛",
    "3W Pressure Plates": "🔧",
    "3W Clutch Plates": "⚙️",
    "2W Hub & Center": "🎯",
    "3W Hub Center": "🎯",
    "2W Clutch Assy.": "🛠️",
    "3W Clutch Assy.": "🛠️",
    "3W Hinges": "🔗",
    "2W Brake Shoes": "🛑",
    "3W Brake Shoes": "🛑",
    "2W Ball Bearings": "⭕",
  };
  return icons[cat] || "🔧";
}
export const redBtn = {
  background: "linear-gradient(135deg, #C41E3A, #8B0000)",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "11px 24px",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  flex: 1,
  fontFamily: "inherit",
};
export const ghostBtn = {
  background: "transparent",
  color: "#666",
  border: "1.5px solid #ddd",
  borderRadius: 8,
  padding: "11px 20px",
  fontSize: 14,
  cursor: "pointer",
  fontFamily: "inherit",
};
export const qtyBtn = {
  width: 30,
  height: 30,
  background: "#fdf0f2",
  border: "1.5px solid #f0d8da",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: 16,
  fontWeight: 700,
  color: "#C41E3A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const smallQtyBtn = {
  width: 24,
  height: 24,
  background: "#f5f0ed",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 700,
  color: "#555",
};
