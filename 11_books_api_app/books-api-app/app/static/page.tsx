import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books");

  const data = response.json();

  return data;
}

const StaticPage = async () => {
  const books = await getBooks();

  // console.log(books);

  return (
    <div>
      <h2>Static Page</h2>
      <ul>
        {books.map((book: Book) => {
          return (
            <li key={book.id}>
              {book.name} - {book.type}
            </li>
          );
        })}
      </ul>
      ;
    </div>
  );
};

export default StaticPage;
