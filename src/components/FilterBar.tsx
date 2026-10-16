import type { BookSort, GenreFilter } from "../types";
import styles from "./FilterBar.module.css";

type FilterBarProps = {
  genre: GenreFilter;
  onlyAvailable: boolean;
  search: string;
  sortBy: BookSort;
  onGenreChange: (genre: GenreFilter) => void;
  onOnlyAvailableChange: (onlyAvailable: boolean) => void;
  onSearchChange: (search: string) => void;
  onSortChange: (sortBy: BookSort) => void;
};

export default function FilterBar({
  genre,
  onlyAvailable,
  search,
  sortBy,
  onGenreChange,
  onOnlyAvailableChange,
  onSearchChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className={styles.controls}>
      <label>
        Szukaj tytułu lub autora
        <input
          type="search"
          value={search}
          placeholder="Wpisz tytuł lub autora"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>

      <label>
        Gatunek
        <select
          value={genre}
          onChange={(event) => onGenreChange(event.target.value as GenreFilter)}
        >
          <option value="wszystkie">Wszystkie</option>
          <option value="fantastyka">Fantastyka</option>
          <option value="kryminał">Kryminał</option>
          <option value="reportaż">Reportaż</option>
          <option value="informatyka">Informatyka</option>
        </select>
      </label>

      <label>
        Sortuj
        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value as BookSort)}
        >
          <option value="title-asc">Tytuł: A–Z</option>
          <option value="title-desc">Tytuł: Z–A</option>
          <option value="author-asc">Autor: A–Z</option>
          <option value="year-desc">Rok: od najnowszych</option>
          <option value="price-asc">Cena: od najniższej</option>
        </select>
      </label>

      <label className={styles.availability}>
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(event) => onOnlyAvailableChange(event.target.checked)}
        />
        Pokaż tylko dostępne książki
      </label>
    </div>
  );
}
