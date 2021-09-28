import { useEffect, useState } from "react";
import "./Body.css";
import firebaseIcon from "./Assets/FirebaseIcon.png";
import projectToDo from "./Assets/Project(To-Do).png";
import projectAnime from "./Assets/Project(AnimeList).png";
import projectSnake from "./Assets/Project(Snake-Game).png";
import contactBack from "./Assets/Contact-back.jpg";
import ProjectItem from "./ProjectItem";
import Config from "./Config";
import emailjs from "emailjs-com";

import { Link } from "react-scroll";

import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

export default function Body() {
	// variable for smooth scrolling duration
	var smoothScrollDuration = 500;

	// This is the hook for Contact Form
	const [formInputs, setFormInputs] = useState({
		name: "",
		email: "",
		message: "",
	});

	function handleFormInput(e) {
		console.log(e.target.name);
		const { name, value } = e.target;
		setFormInputs((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		emailjs
			.send(
				Config.EMAILJS_SERVICE_ID,
				Config.EMAILJS_TEMPLATE_ID,
				formInputs,
				Config.EMAILJS_USER_ID
			)
			.then(
				function (response) {
					console.log("SUCCESS!", response.status, response.text);
				},
				function (error) {
					console.log("FAILED...", error);
				}
			);

		setFormInputs({
			name: "",
			email: "",
			message: "",
		});
	}

	// This is to initialize email-js
	useEffect(() => {
		emailjs.init(Config.EMAILJS_USER_ID);
	}, []);

	return (
		<div className="body">
			{/* banner section  */}
			<section id="banner" className="banner">
				<span>
					<Flip bottom cascade>
						<div className="banner-text">
							<p>Hello, I am</p>
							<h1>Shankhadeep</h1>
							<p>I'am a Front-end Web Developer. </p>
							<p> I make Interactive and Responsive Webapps</p>

							<Link
								to="contact"
								smooth={true}
								duration={smoothScrollDuration}
							>
								<button className="action-btn">
									Contact Me
								</button>
							</Link>
						</div>
					</Flip>
				</span>
				<Link to="about" smooth={true} duration={smoothScrollDuration}>
					<span class="scroll-down-btn">
						<i class="fas fa-chevron-down"></i>
						<i class="fas fa-chevron-down"></i>
						<i class="fas fa-chevron-down"></i>
					</span>
				</Link>
			</section>

			{/* About section  */}
			<section id="about" className="about">
				<div className="about-text" data-aos="fade-left">
					<h2>ABOUT</h2>
					<p>I am a Front-end Developer from West Bengal, India.</p>
					<p>I make Interactive and Responsive Websites. </p>
					<p> Currently I am learning UI/UX design fundamentals.</p>
				</div>
			</section>

			{/* Skills section  */}

			<section id="skills" className="skills">
				<div data-aos="fade-down">
					<h1>Skills</h1>
				</div>
				<Zoom top cascade>
					<div data-aos="fade-up">
						<div>
							<i class="fab fa-python fa-5x"></i>
							<h3>Python</h3>
						</div>
						<div>
							<i class="fab fa-html5 fa-5x"></i>
							<h3>HTML</h3>
						</div>
						<div>
							<i class="fab fa-css3-alt fa-5x"></i>
							<h3>CSS</h3>
						</div>
						<div>
							<i class="fab fa-js-square fa-5x"></i>
							<h3>Javascript</h3>
						</div>
						<div>
							<i class="fab fa-react fa-5x"></i>
							<h3>ReactJs</h3>
						</div>
						<div>
							<img
								src={firebaseIcon}
								alt=""
								style={{ width: "5rem" }}
							/>
							<h3>Firebase</h3>
						</div>
						<div>
							<i class="fab fa-git-alt fa-5x"></i>
							<h3>Git</h3>
						</div>
					</div>
				</Zoom>
			</section>

			{/* This is projects section  */}
			<section id="projects" className="projects">
				<ProjectItem
					imgSrc={projectToDo}
					projectTitle="ToDO"
					projectText={`A ToDo web app with <b>CRUD</b> functionalities made with
						ReactJs.<br>
						user can also upload relevant Images with Todo.`}
					key={1}
				/>

				<ProjectItem
					imgSrc={projectAnime}
					projectTitle="YourAnimeList"
					projectText={`User can get info about Top Upcoming Anime and Manga, and
					also can search for a specific Title. `}
					key={2}
				/>

				<ProjectItem
					imgSrc={projectSnake}
					projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc aliquet pharetra justo, vel elementum sapien tincidunt
					id. Nam dictum pretium arcu sed finibus. Pellentesque
					maximus ipsum eget fermentum rhoncus. Sed non nunc dapibus,
					hendrerit orci ut, faucibus massa. Ut porta neque eu velit
					efficitur condimentum. Nunc a semper metus. "
					key={3}
				/>
			</section>

			{/* This is Contact Section  */}
			<section id="contact" className="contact">
				{/* <img src={contactBack} alt="" className="contact-back" /> */}

				<form>
					<div>
						<div>
							<h1>Lets get in Touch</h1>
						</div>
						<div className="name-email">
							<span>
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									onChange={handleFormInput}
									value={formInputs.name}
								/>
							</span>
							<span>
								<label htmlFor="email">Email address</label>
								<input
									type="email"
									name="email"
									onChange={handleFormInput}
									value={formInputs.email}
								/>
							</span>
						</div>
						<div className="massage">
							<label htmlFor="message">Message</label>
							<textarea
								className="form-control"
								rows="5"
								name="message"
								onChange={handleFormInput}
								value={formInputs.message}
							></textarea>
						</div>
						<div>
							<button
								className="action-btn"
								onClick={handleFormSubmit}
							>
								Send
							</button>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
}
