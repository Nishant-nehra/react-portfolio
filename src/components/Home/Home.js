import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./Home.module.css";
import profilePic from "../../assets/profile.jpg";

const Home = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300);
	const [textArray] = useState(["Web Developer", "3D Developer"]);

	useEffect(() => {
		let interval = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(interval);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % textArray.length;
		let fullText = textArray[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(2000);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<>
			<section className={style.intro} id="home">
				<Container>
					<Row>
						<Col xs={9} md={9}>
							<h1>Nishant Nehra</h1>
							<h2>
								A <span>{text}</span>
							</h2>
							<p>
								A Web Developer with over 1.5 Years of Experience and passion
								for responsive website design and 3D website development.
								<br />
								Currently working as a Software Engineer at S&P Global, Noida.
							</p>
						</Col>
						<Col xs={3} md={3}>
							<div className={style.profilePic}>
								<img src={profilePic}></img>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className={style.contact} id="contact">
				<Container>
					<h1>Contact</h1>
					<div>
						<a
							className={style.contact_button}
							href="https://www.linkedin.com/in/nishant-nehra/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>LinkedIn</span>
							<span className={style.contact_button_hover}>LinkedIn</span>
						</a>
						<a
							className={style.contact_button}
							href="https://github.com/Nishant-nehra"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>Github</span>
							<span className={style.contact_button_hover}>Github</span>
						</a>
						<a
							className={style.contact_button}
							href="mailto:nishantnehra0@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>Gmail</span>
							<span className={style.contact_button_hover}>Gmail</span>
						</a>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Home;
