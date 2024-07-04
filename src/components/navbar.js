import Nav from "./nav";
import "./navbar.css";

function Navbar(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="container">
      <div className="navbar">
        <div className="title">ClassBook</div>
        <Nav />
      </div>
      <hr></hr>
    </div>
  );
}

export default Navbar;
