import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookCard.module.css";

type BookCardProps = { book: Book };

export default function BookCard({ book }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <article className={styles.card}>
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
