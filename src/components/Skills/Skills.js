import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillsProgress from "../UI/progressBar/SkillsProgress";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Skills.module.css";
import { useState } from "react";

const Skills = () => {
	const [skillsData] = useState([
		{
			skill: "JavaScript",
			percent: 85,
		},
		{
			skill: "Python",
			percent: 85,
		},
		{
			skill: "React",
			percent: 80,
		},
		{
			skill: "Three.js",
			percent: 75,
		},
		{
			skill: "Angular",
			percent: 70,
		},
		{
			skill: "React Three Fiber",
			percent: 70,
		},
	]);
	const [responsive] = useState({
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 992 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 992, min: 768 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
		},
	});

	return (
		<section className={styles.skill} id="skills">
			<Container>
				<Row>
					<Col xs={12}>
						<div className={styles.skillsWrap}>
							<h2>Skills</h2>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
								autoPlay={true}
							>
								{skillsData.map((item, index) => (
									<SkillsProgress item={item} key={index} />
								))}
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Skills;
