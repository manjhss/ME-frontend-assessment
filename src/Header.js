import React from "react";

function Header() {
	return (
		<header>
			<nav className="flex">
				<h1 className="my-2">
					<a href="/">PERSONAL BOOKSHELF</a>
				</h1>

				<div>
					<button className="button">
						<a href="/my-bookshelf">My Bookshelf</a>
					</button>
				</div>
			</nav>
		</header>
	);
}

export default Header;
