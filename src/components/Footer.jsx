import React from "react";

const footerText = [
	{
		title: "github",
		desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
		link: "https://github.com/siri-project",
	},
];

const Footer = () => {
	return (
		<footer id="footer" role="contentinfo">
			<div className="footer-inner">
				<div className="footer-text">
					<span>siri</span>
					<span>&copy; webs</span>
				</div>
				<div className="footer-info">
					<div className="left">
						<div className="title">
							<a href="#">sign up</a>
						</div>
						<p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
					</div>
					<div className="right">
						<h3>social</h3>
						<ul>
							{footerText.map((footer, key) => (
								<li key={key}>
									<a href="{footer.link}">{footer.title}</a>
									<em>{footer.desc}</em>
								</li>
							))}
						</ul>
					</div>
					<div className="footer-right">
						&copy; 2024 siri<br />
						이 사이트는 리액트를 이용하여 제작하였습니다.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
