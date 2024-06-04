import React from "react";
import { Plus } from "lucide-react";

function BookCard({ book, setLCValue, disable = true }) {
	function handleClick() {
		let obj = {
			title: book.title,
			edition_count: book.edition_count,
		};

		setLCValue(obj);
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
					<Plus strokeWidth={3} />
					Bookshelf
				</button>
			)}
		</div>
	);
}

export default BookCard;
