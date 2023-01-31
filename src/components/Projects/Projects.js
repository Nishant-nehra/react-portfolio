import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
	const [projects] = useState([
		{
			title: "Business Startup",
			description:
				"Design & Development.Design & Development.Design & DevelopmentDesign & DevelopmentDesign & Development.",
			image: "https://picsum.photos/100",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			image: "https://picsum.photos/200",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			image: "https://picsum.photos/300",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			image: "https://picsum.photos/400",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			image: "https://picsum.photos/500",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			image: "https://picsum.photos/600",
		},
	]);
	return (
		<section className="project" id="project">
			<Container>
				<Row>
					<Col>
						<h2>Projects</h2>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className={`nav-pills mb-5 justify-content-center align-items-center`}
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">React</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">React Three Fiber</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Misc</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content id="slideInUp">
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => (
											<ProjectCard key={index} {...project} />
										))}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cumque quam, quod neque provident velit, rem explicabo
										excepturi id illo molestiae blanditiis, eligendi dicta
										officiis asperiores delectus quasi inventore debitis quo.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cumque quam, quod neque provident velit, rem explicabo
										excepturi id illo molestiae blanditiis, eligendi dicta
										officiis asperiores delectus quasi inventore debitis quo.
									</p>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
