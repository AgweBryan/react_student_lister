import React from "react";
import AddStudent from "./AddStudent";
import Students from "./Students";

const Home = ({ showAddStudent, onAdd, students, onDelete, onToggle }) => {
  return (
    <>
      {showAddStudent && <AddStudent onAdd={onAdd} />}
      {students.length > 0 ? (
        <Students students={students} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <p>There are no students to show</p>
      )}
    </>
  );
};

export default Home;
