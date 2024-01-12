import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot() 메서드 사용하여 렌더링할 최상위(root) 컨테이너 생성
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
