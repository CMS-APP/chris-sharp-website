/** @format */

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "var(--primary)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        border: "none",
        transition: "background-color 0.3s ease",
        width: "150px"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "var(--primary-hover)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "var(--primary)";
      }}
    >
      <p className="text-white">{text}</p>
    </button>
  );
}
