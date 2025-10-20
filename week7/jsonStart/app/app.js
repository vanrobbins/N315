const initListeners = () => {
	initBooks();
};

const initBooks = () => {
	$.getJSON("./data/data.json", (data) => {
		console.log("Data Loaded", data.Books);
		$.each(data.Genres, (index, genre) => {
			const genreHTML = `<div class="genre">
				<h2>${genre}</h2>
                <div class="books-container genre-${genre}"></div>
			</div>`;
			$(".books").append(genreHTML);
		});
		$.each(data.Books, (index, book) => {
			const bookHTML = `<div class="book">
				<div class="book-img">
					<img src="${book.image}" alt="Book 1" />
				</div>
				<div class="book-info">
					<h3>${book.title}</h3>
					<p>${book.author}</p>
                    <p>${book.description}</p>
					<p>${formatterUSD.format(book.price)}</p>
					<button id="${book.id}">Add to Cart</button>
				</div>
			</div>`;
			$(".books").append(bookHTML);
		});
	}).fail((jqxhr, textStatus, error) => {
		console.error("Failed to load data:", textStatus, error);
	});
};
//Format prices
const formatterUSD = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
$(document).ready(() => {
	initListeners();
});
