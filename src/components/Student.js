import { FaTimes } from "react-icons/fa";

const Student = ({ student, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={() => onToggle(student.id)}
      className={`task ${student.present ? "reminder" : ""}`}
    >
      <h3>
        <div>
          {student.present === true ? (
            <input
              type="checkbox"
              name=""
              id="student_absent_checkbox"
              checked
              onChange={() => onToggle(student.id)}
            />
          ) : (
            <input
              type="checkbox"
              name=""
              id="student_absent_checkbox"
              onChange={() => onToggle(student.id)}
            />
          )}
          {student.student_matricule}: {student.student_name}
        </div>
        <FaTimes
          onClick={() => onDelete(student.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>Status: {student.status}%</p>
    </div>
  );
};

export default Student;
