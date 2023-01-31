import styles from "./SkillsProgress.module.css";

const SkillsProgress = ({ item }) => {
	return (
		<div className={styles.circle_box}>
			<div>
				<svg>
					<circle cx="100" cy="100" r="95" />
					<circle
						style={{
							strokeDashoffset: `calc((100 * 6) - ((100 * 6) * ${item.percent}) / 100)`,
						}}
						cx="100"
						cy="100"
						r="95"
					/>
				</svg>
				<span>{item.percent}%</span>
			</div>
			<strong>{item.skill}</strong>
		</div>
	);
};

export default SkillsProgress;
