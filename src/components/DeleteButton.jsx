const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "green" }}
      className="btn"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
