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

const ParallelPage = async () => {
  const fictionBooks = getFiction();

  const nonFictionBooks = getNonFiction();

  const [fiction, nonfiction] = await Promise.all([
    fictionBooks,
    nonFictionBooks,
  ]);
  return (
    <div>
      <h2>Fiction Books</h2>

      <ul>
        {fiction.map((book: Book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>

      <h2>Non Fiction Books</h2>

      <ul>
        {nonfiction.map((book: Book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ParallelPage;
