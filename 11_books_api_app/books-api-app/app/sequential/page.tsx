import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getFiction() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",
    {
      cache: "no-store",
    }
  );

  const data = response.json();

  return data;
}

async function getNonFiction() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    {
      cache: "no-store",
    }
  );

  const data = response.json();

  return data;
}

const SequentialPage = async () => {
  const fictionBooks = await getFiction();

  const nonFictionBooks = await getNonFiction();

  return (
    <div>
      <h2>Fiction Books</h2>

      <ul>
        {fictionBooks.map((book: Book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>

      <h2>Non Fiction Books</h2>

      <ul>
        {nonFictionBooks.map((book: Book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SequentialPage;
