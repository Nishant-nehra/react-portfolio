import { Col } from "react-bootstrap";
import style from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, image }) => {
	return (
		<Col xs={12} sm={6} md={4}>
			<div className={style.cardWrap}>
				<img src={image} />
				<div className={style.cardText}>
					<h4>{title}</h4>
					<span>{description}</span>
				</div>
			</div>
		</Col>
	);
};

export default ProjectCard;
