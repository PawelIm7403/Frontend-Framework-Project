import type { KeyboardEvent } from "react";
import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookCard.module.css";

type BookCardProps = { book: Book; onSelect: (book: Book) => void };

export default function BookCard({ book, onSelect }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(book);
    }
  }

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-label={`Pokaż szczegóły książki: ${title}`}
      onClick={() => onSelect(book)}
      onKeyDown={handleKeyDown}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.meta}>
        <p>
          Autor: {author} · {year}
        </p>
        <p>
          Gatunek: <Badge tone="success">{genre}</Badge>
        </p>
      </div>
      <footer className={styles.footer}>
        <p>Ocena: {stars(rating)}</p>
        <p>Cena: {formatPrice(price)}</p>
        {available ? (
          <Badge tone="success">Dostępna</Badge>
        ) : (
          <Badge tone="warning">Brak w magazynie</Badge>
        )}
      </footer>
    </article>
  );
}
