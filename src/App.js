import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [showAddStudent, setShowAddStudent] = useState(false);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const studentsFromServer = await fetchStudents();
      setStudents(studentsFromServer);
    };
    getTasks();
  }, []);

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();
    return data;
  };

  const addStudent = async (student) => {
    const exist = students.find((x) => {
      return (
        x.student_matricule.toLowerCase() ===
        student.student_matricule.toLowerCase()
      );
    });

    if (exist) {
      alert("Student Matricule already exist. Try changing it");
      return;
    } else {
      const res = await fetch("http://localhost:5000/students", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const data = await res.json();
      setStudents([...students, data]);
      alert(`${student.student_name} added successfully.`);
    }

    // const id = Date.now();
    // const newTask = { id, ...task };
  };

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:5000/students/${id}`, { method: "DELETE" });

    setStudents(students.filter((student) => student.id !== id));
  };

  const deleteAllStudents = async () => {
    students.forEach((student) => {
      fetch(`http://localhost:5000/students/${student.id}`, {
        method: "DELETE",
      });
    });

    setStudents([]);
  };

  const togglePresent = async (id) => {
    setStudents(
      students.map((student) => {
        return student.id === id
          ? { ...student, present: !student.present }
          : student;
      })
    );
  };

  const setShowAddStudentBtn = () => {
    setShowAddStudent(!showAddStudent);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title={"Student List"}
          showAddStudent={setShowAddStudentBtn}
          showAddStudentValue={showAddStudent}
          deleteAllStudents={deleteAllStudents}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                showAddStudent={showAddStudent}
                onAdd={addStudent}
                students={students}
                onDelete={deleteStudent}
                onToggle={togglePresent}
              />
            }
          />
          <Route
            path="/absent-students"
            exact
            element={
              <About
                students={students}
                onDelete={deleteStudent}
                onToggle={togglePresent}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
