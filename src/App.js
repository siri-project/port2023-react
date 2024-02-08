import React from "react"; // react library 호출
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";

const App = () => { // App 상수 선언
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" elemen={<HomeView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App; // App 컴포넌트 내보내기
