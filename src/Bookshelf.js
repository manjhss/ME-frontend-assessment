import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BookCard from "./BookCard";

function Bookshelf() {
	const [isDisplay, setIsDisplay] = useState(false);

	let getLCValue = JSON.parse(localStorage.getItem("my-bookshelf"));
	console.log(getLCValue);

	return (
		<section className="pt-2">
			<div className="flex">
				<h2>My Bookshelf</h2>

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
					{getLCValue.length === 0 && <div>No data found</div>}

					{getLCValue?.map((book, index) => (
						<BookCard key={index} book={book} />
					))}
				</div>
			)}
		</section>
	);
}

export default Bookshelf;
