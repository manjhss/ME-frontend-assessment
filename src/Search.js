import React, { useState } from "react";
import QueryInput from "./QueryInput";
import BookCard from "./BookCard";
import { ChevronDown, ChevronUp } from "lucide-react";

function Search() {
	const [booksData, setBooksData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isDisplay, setIsDisplay] = useState(false);

	let getLCValue = JSON.parse(localStorage.getItem("my-bookshelf"));

	function setLCValue(newData) {
		getLCValue.push(newData);

		let updateData = getLCValue;
		localStorage.setItem("my-bookshelf", JSON.stringify(updateData));
	}

	function fetchData(query) {
		setLoading(true);
		setBooksData([]);

		fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.docs);
				setBooksData(data.docs);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
				setLoading(false);
			});
	}

	return (
		<section className="pt-2">
			<div className="flex">
				<div className="flex">
					<h2>Search</h2>
					<QueryInput
						fetchData={fetchData}
						setBooksData={setBooksData}
					/>
				</div>

				<div className="icon">
					{isDisplay == false ? (
						<ChevronDown
							strokeWidth={3}
							size={28}
							onClick={() => {
								setIsDisplay(!isDisplay);
							}}
						/>
					) : (
						<ChevronUp
							strokeWidth={3}
							size={28}
							onClick={() => {
								setIsDisplay(!isDisplay);
							}}
						/>
					)}
				</div>
			</div>

			{!isDisplay && (
				<div className="book-card-ctn">
					{loading && <div>Loading...</div>}
					{!loading && booksData.length === 0 && (
						<div>No data found</div>
					)}
					{error && <div>{error}</div>}

					{booksData?.map((book, index) => (
						<BookCard
							key={index}
							book={book}
							setLCValue={setLCValue}
							disable={false}
						/>
					))}
				</div>
			)}
		</section>
	);
}

export default Search;
