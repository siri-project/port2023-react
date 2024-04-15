import React from "react";

import port1 from "../assets/img/about.jpg";
import port2 from "../assets/img/about.jpg";
import port3 from "../assets/img/about.jpg";
import port4 from "../assets/img/about.jpg";
import port5 from "../assets/img/about.jpg";

const portText = [
	{
		num: "01",
		title: "포트폴리오 1",
		desc: "포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다.",
		img: port1,
		code: "#",
		view: "#",
		name: "my portfolio",
	},
	{
		num: "02",
		title: "포트폴리오 2",
		desc: "포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다.",
		img: port2,
		code: "#",
		view: "#",
		name: "my portfolio",
	},
	{
		num: "03",
		title: "포트폴리오 3",
		desc: "포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다.",
		img: port3,
		code: "#",
		view: "#",
		name: "my portfolio",
	},
	{
		num: "04",
		title: "포트폴리오 4",
		desc: "포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다.",
		img: port4,
		code: "#",
		view: "#",
		name: "my portfolio",
	},
	{
		num: "05",
		title: "포트폴리오 5",
		desc: "포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다. 포트폴리오 설명을 기재합니다.",
		img: port5,
		code: "#",
		view: "#",
		name: "my portfolio",
	},
]

const Port = () => {
	return (
		<section id="port">
			<div className="port-inner">
				<div className="port-title">
					portfolio <em>포폴 작업물</em>
				</div>

				<div className="port-wrap">
					{portText.map((port, key) => (
						<article className="{`port-item p${key+1}`}" key={key}>
							<span className="num">{port.num}.</span>
							<a href="{port.code}" target="blank" className="img" rel="noreferrer">
								<img src="{port.img}" alt="{port.name}" />
							</a>
							<h3 className="title">{port.title}</h3>
							<p className="desc">{port.desc}</p>
							<a href="{port.view}" target="blank" className="site" rle="noreferrer">사이트 보기</a>
						</article>
					))};
				</div>
			</div>
		</section>
	);
};

export default Port;
