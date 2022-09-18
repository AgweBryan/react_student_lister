import { useState } from "react";

const AddStudent = ({ onAdd }) => {
  const [student_name, setStudent_name] = useState("");
  const [student_matricule, setStudent_matricule] = useState("");
  const [present, setPresent] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!student_name) {
      alert("Please add a student");
      return;
    }

    if (student_matricule.length !== 8) {
      alert("Student Matricule must be 8 characters");
      return;
    }

    onAdd({ student_name, student_matricule, present, status });

    setStudent_matricule("");
    setStudent_name("");
    setPresent(false);
    setStatus("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Name"
          value={student_name}
          onChange={(e) => {
            setStudent_name(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Student Matricule</label>
        <input
          type="text"
          placeholder="Matricule"
          value={student_matricule}
          onChange={(e) => {
            setStudent_matricule(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Student Matricule</label>
        <input
          type="number"
          placeholder="Status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Absent</label>
        <input
          type="checkbox"
          checked={present}
          onChange={(e) => {
            setPresent(e.currentTarget.checked);
          }}
        />
      </div>

      <input type="submit" value="Save Student" className="btn btn-block" />
    </form>
  );
};

export default AddStudent;
