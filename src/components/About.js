import { Link } from "react-router-dom";
import Student from "./Student";

const About = ({ students, onDelete, onToggle }) => {

  // CODE FOR ABSENT STUDENT STARTS HERE

  const absentStudents = students.filter((student) => {
    return student.present === true;
  });

  return (
    <>
      <div className="scroll">
        {absentStudents.length > 0 ? (
          absentStudents.map((student) => (
            <Student
              key={student.id}
              student={student}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))
        ) : (
          <p>There are no students to show</p>
        )}
      </div>
      <Link to="/">All Students</Link>
    </>
  );
};

export default About;
