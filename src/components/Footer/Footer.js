import Style from "./Footer.module.css";
import { Row, Col, Container } from "react-bootstrap";
import logo from "../../assets/logo-white.png";
import SocialIcons from "../UI/socialIcons/SocialIcons";

const Footer = () => {
	return (
		<footer className={Style.footer}>
			<Container>
				<Row className="align-items-center text-center text-sm-start mt-5">
					<Col sm={6}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col sm={6} className="text-sm-end text-center ">
						<SocialIcons />
						<p>Copyright 2023. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
