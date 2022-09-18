import Button from "./Button";
import { useLocation } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import CancelButton from "./CancelButton";

const Header = ({
  title,
  showAddStudent,
  showAddStudentValue,
  deleteAllStudents,
}) => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-title">
        <h1>{title}</h1>
        <div className="underline"></div>
      </div>
      {location.pathname === "/" && (
        <Button
          color={showAddStudentValue ? "green" : "green"}
          text={showAddStudentValue ? "Add" : "Add"}
          onClick={showAddStudent}
        />
      )}
      {location.pathname === "/" && (
        <DeleteButton onClick={deleteAllStudents} />
      )}
      {location.pathname === "/" && <CancelButton onClick={showAddStudent} />}
    </header>
  );
};

export default Header;
