import { useState } from "react";
import { books } from "./data/books";
import type { Book, BookSort, GenreFilter } from "./types";
import FilterBar from "./components/FilterBar";
import BookList from "./components/BookList";

export default function App() {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<BookSort>("title-asc");

  const normalizedSearch = search.trim().toLocaleLowerCase("pl-PL");

  const filteredBooks = books.filter(
    (book) =>
      (genre === "wszystkie" || book.genre === genre) &&
      (!onlyAvailable || book.available) &&
      (normalizedSearch === "" ||
        book.title.toLocaleLowerCase("pl-PL").includes(normalizedSearch) ||
        book.author.toLocaleLowerCase("pl-PL").includes(normalizedSearch)),
  );

  const compareBooks: Record<BookSort, (a: Book, b: Book) => number> = {
    "title-asc": (a, b) => a.title.localeCompare(b.title, "pl"),
    "title-desc": (a, b) => b.title.localeCompare(a.title, "pl"),
    "author-asc": (a, b) => a.author.localeCompare(b.author, "pl"),
    "year-desc": (a, b) => b.year - a.year,
    "price-asc": (a, b) => a.price - b.price,
  };
  const visibleBooks = [...filteredBooks].sort(compareBooks[sortBy]);

  return (
    <>
      <h1>📚 Katalog książek</h1>
      <FilterBar
        genre={genre}
        onlyAvailable={onlyAvailable}
        search={search}
        sortBy={sortBy}
        onGenreChange={setGenre}
        onOnlyAvailableChange={setOnlyAvailable}
        onSearchChange={setSearch}
        onSortChange={setSortBy}
      />
      <p>Znaleziono: {visibleBooks.length}</p>
      <BookList books={visibleBooks} />
    </>
  );
}
