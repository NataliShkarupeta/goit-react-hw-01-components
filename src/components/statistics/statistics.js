import PropTypes from 'prop-types';
import css from './statistics.module.css'

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.list}>
        {stats.map(stat => (
          <Stat
            label={stat.label}
            percentage={stat.percentage}
            key={stat.id}
           
          />
        ))}
      </ul>
    </section>
  );
}
 function Stat({ label, percentage, id }) {
   return (
     <li className={css.item} key={id} >
       <span className={css.label}>{label}</span>
       <span className={css.percentage}>{percentage}%</span>
     </li>
   );
 }

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};