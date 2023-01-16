import css from './statistics.module.css';


export function Stat({ label, percentage }) {
  return (
    <li className={css.item} >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}
