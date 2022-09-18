import Student from "./Student";

const Students = ({ students, onDelete, onToggle }) => {
  return (
    <div className="scroll">
      {students.map((student) => (
        <Student
          key={student.id}
          student={student}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Students;
