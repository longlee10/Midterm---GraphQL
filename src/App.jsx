import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddRental from "./components/AddRental";
import Rentals from "./components/Rentals";

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="home">React Client For GraphQL API</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/addrental">
                Add Rental Property
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Rental Property List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route index element={<Rentals />} />
          <Route path="home" element={<Rentals />} />
          <Route path="addrental" element={<AddRental />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
