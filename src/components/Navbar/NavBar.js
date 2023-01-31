import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo-white.png";
import style from "./Navbar.module.css";

import SocialIcons from "../UI/socialIcons/SocialIcons";

const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<>
			<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img
							src={logo}
							style={{ height: "70px" }}
							className="d-inline-block align-top"
							alt="Brand logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								href="#home"
								className={
									activeLink === "home" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("home")}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#skills"
								className={
									activeLink === "skills" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("skills")}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href="#project"
								className={
									activeLink === "project"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("project")}
							>
								Projects
							</Nav.Link>
						</Nav>
						<span className={style.hiddenIcons}>
							<SocialIcons />
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
