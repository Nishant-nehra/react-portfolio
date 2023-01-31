import style from "./SocialIcons.module.css";
import githubIcon from "../../../assets/github.svg";
import mailIcon from "../../../assets/mail.svg";
import linkedinIcon from "../../../assets/linkedin.svg";

const SocialIcons = () => {
	return (
		<div className={style.socialIcon}>
			<a
				href="https://www.linkedin.com/in/nishant-nehra/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={linkedinIcon} alt="linkedIn" />
			</a>
			<a
				href="mailto:nishantnehra0@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={mailIcon} alt="email" />
			</a>
			<a
				href="https://github.com/Nishant-nehra"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={githubIcon} alt="github" />
			</a>
		</div>
	);
};

export default SocialIcons;
