import "./App.css";
import Bookshelf from "./Bookshelf";
import Header from "./Header";
import Search from "./Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

if ("my-bookshelf" in localStorage) {
	console.log("Great to GOOO");
} else {
	localStorage.setItem("my-bookshelf", JSON.stringify([]));
}

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Search />,
		},
		{
			path: "/my-bookshelf",
			element: <Bookshelf />,
		},
	]);

	return (
		<div className="App">
			<Header />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
