import React, { useState } from "react";
import { Plus, Check } from "lucide-react";

function BookCard({ book, setLCValue, disable = true }) {
	const [isAddedInBookshelf, setIsAddedInBookshelf] = useState(false);

	console.log(isAddedInBookshelf);

	function handleClick() {
		let obj = {
			title: book.title,
			edition_count: book.edition_count,
		};

		setLCValue(obj);
		setIsAddedInBookshelf(true);
	}

	return (
		<div className="book-card">
			<div>
				Title: <span>{book.title}</span>
			</div>
			<div>
				Edition Count: <span>{book.edition_count}</span>
			</div>

			{!disable && (
				<button className="button" onClick={handleClick}>
					{isAddedInBookshelf === false ? (
						<Plus strokeWidth={3} />
					) : (
						<Check strokeWidth={3} />
					)}
					Bookshelf
				</button>
			)}
		</div>
	);
}

export default BookCard;
