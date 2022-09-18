const CancelButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "green" }}
      className="btn"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
