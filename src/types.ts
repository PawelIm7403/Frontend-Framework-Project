export type Genre = "fantastyka" | "kryminał" | "reportaż" | "informatyka";
export type GenreFilter = Genre | "wszystkie";
export type BookSort = "title-asc" | "title-desc" | "author-asc" | "year-desc" | "price-asc";

export type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: Genre;
  rating: number; // 1-5
  price: number; // PLN
  available: boolean;
};
