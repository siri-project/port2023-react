import React from "react";
import { contactText } from "../constants";

const Contact = () =>{
	return (
		<section id="contact">
			<div className="contact-inner">
				<h2 className="contact-title">Contact</h2>
				<div className="contact-lines" aria-hidden="true">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
				<div className="contact-text">
					<div className="text">
						{contactText.map((contact, key) => (
							<div key={key}>
								<a href={contact.link} rel="noopener noreferrer" target="_blank">
									{contact.title}
								</a>
							</div>
						))}
					</div>
				</div>
				<div className="contact-lines bottom" aria-hidden="true">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
			</div>
		</section>
	);
};

export default Contact;
