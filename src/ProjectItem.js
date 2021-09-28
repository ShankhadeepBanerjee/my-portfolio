import "./ProjectItem.css";
import ReactHtmlParser from "react-html-parser";
import Slide from "react-reveal/Slide";

export default function ProjectItem(props) {
	return (
		<div className="project-item">
			<Slide left>
				<div data-aos="slide-right">
					<img src={props.imgSrc} alt="" />
				</div>
			</Slide>
			<Slide right>
				<div data-aos="slide-left">
					<h2>{props.projectTitle}</h2>
					<p>{ReactHtmlParser(props.projectText)}</p>
					<span>
						<i class="fab fa-github icons"></i>
						<i class="fas fa-external-link-alt icons"></i>
					</span>
				</div>
			</Slide>
		</div>
	);
}
