import React, { useEffect, useState } from "react";

function QueryInput({ fetchData, setBooksData }) {
	const [searchTerm, setSearchTerm] = useState("");

	console.log(searchTerm);

	useEffect(() => {
		if (searchTerm !== "") {
			fetchData(searchTerm);
		} else {
			setBooksData([]);
		}
	}, [searchTerm]);

	return (
		<div className="search-input-ctn">
			<input
				type="text"
				value={searchTerm}
				name="query_books"
				id="query_books"
				className="search-input"
				placeholder="e.g. Harry Potter"
				onChange={(e) => setSearchTerm(e.target.value)}
				autoFocus
			/>
		</div>
	);
}

export default QueryInput;
