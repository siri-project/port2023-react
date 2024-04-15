import React from "react";

import about from "../assets/img/about.jpg";

import { introText } from "../constants";

const Intro = () => {
	return (
		<section id="intro">
			<div className="intro-inner">
				<h1 className="intro-title">{introText.title}</h1>
				<div className="intro-lines" aria-hidden="true">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
				<div className="intro-text">
					<div className="text">
						<div>{introText.desc[0]}</div>
						<div>{introText.desc[1]}</div>
						<div>{introText.desc[2]}</div>
					</div>
					<div className="img">
						<img src={about} alt="" />
					</div>
				</div>
				<div className="intro-lines bottom" aria-hidden="true">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
			</div>
		</section>
	);
};

export default Intro;
