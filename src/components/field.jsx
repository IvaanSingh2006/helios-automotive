import PropTypes from 'prop-types'

// ─── REUSABLE FORM FIELD ─────────────────────────────────────────────────────

export default function Field({ label, error, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, 
        color: "#444", marginBottom: 5, textTransform: "uppercase", 
        letterSpacing: 0.5 }}>
        {label}
      </label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "10px 12px",
          border: `1.5px solid ${error ? "#C41E3A" : "#ddd"}`,
          borderRadius: 7,
          fontSize: 14,
          outline: "none",
          transition: "border-color 0.2s",
          fontFamily: "inherit",
        }}
        onFocus={e => e.target.style.borderColor = "#C41E3A"}
        onBlur={e => e.target.style.borderColor = error ? "#C41E3A" : "#ddd"}
      />
      {error && (
        <div style={{ color: "#C41E3A", fontSize: 11, marginTop: 3 }}>{error}</div>
      )}
    </div>
  );
}

// ─── PROPS VALIDATION ────────────────────────────────────────────────────────
// This tells React what type each prop should be and which ones are required.
// If wrong type is passed, React shows a warning in the browser console.

Field.propTypes = {
  label:       PropTypes.string.isRequired,   // must be a string, always required
  value:       PropTypes.string.isRequired,   // must be a string, always required
  onChange:    PropTypes.func.isRequired,     // must be a function, always required
  placeholder: PropTypes.string,             // string, optional
  error:       PropTypes.string,             // string, optional (only shown when there's an error)
}