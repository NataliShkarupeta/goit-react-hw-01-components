import css from './statistics.module.css';


export function Stat({ label, percentage, id }) {
  return (
    <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}
