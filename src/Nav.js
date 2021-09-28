import React from "react";
import Logo from "./Assets/Logo.png";
import { Link } from "react-scroll";
import "./Nav.css";
import { useEffect, useState } from "react";

export default function Nav() {
	const [navOpen, setNavOpen] = useState(false);
	var smoothScrollDuration = 500;

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth >= 610) {
				setNavOpen(false);
				document
					.querySelector(".nav")
					.classList.remove("animation-nav-open");
			}
		});
	}, []);

	useEffect(() => {
		navOpen
			? document.querySelector(".nav").classList.add("animation-nav-open")
			: document
					.querySelector(".nav")
					.classList.remove("animation-nav-open");
	}, [navOpen]);
	return (
		<div className="nav">
			<span>
				<img src={Logo} alt="" className="logo" />
			</span>
			<span className="nav-list">
				<ul>
					<li>
						<Link
							to="about"
							smooth={true}
							duration={smoothScrollDuration}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							smooth={true}
							to="skills"
							duration={smoothScrollDuration}
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							smooth={true}
							to="projects"
							duration={smoothScrollDuration}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							smooth={true}
							to="contact"
							duration={smoothScrollDuration}
						>
							Contact
						</Link>
					</li>
				</ul>
			</span>
			<span>
				<i
					className="fas fa-plus fa-2x nav-btn"
					style={{
						transform: `rotate(${navOpen ? "45deg" : "180deg"})`,
					}}
					onClick={() => setNavOpen((prev) => !prev)}
				></i>
			</span>
		</div>
	);
}
