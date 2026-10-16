import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookDetails.module.css";

type BookDetailsProps = {
  book: Book;
  onBack: () => void;
};

export default function BookDetails({ book, onBack }: BookDetailsProps) {
  return (
    <section className={styles.details} aria-labelledby="book-details-title">
      <button type="button" onClick={onBack}>
        ← Wróć do listy
      </button>
      <h2 id="book-details-title">Szczegóły książki</h2>
      <h3 className={styles.title}>{book.title}</h3>
      <div className={styles.meta}>
        <p>Autor: {book.author}</p>
        <p>Rok wydania: {book.year}</p>
        <p>
          Gatunek: <Badge tone="success">{book.genre}</Badge>
        </p>
      </div>
      <div className={styles.footer}>
        <p>Ocena: {stars(book.rating)}</p>
        <p>Cena: {formatPrice(book.price)}</p>
        <p>
          Dostępność:{" "}
          {book.available ? (
            <Badge tone="success">Dostępna</Badge>
          ) : (
            <Badge tone="warning">Brak w magazynie</Badge>
          )}
        </p>
      </div>
    </section>
  );
}
