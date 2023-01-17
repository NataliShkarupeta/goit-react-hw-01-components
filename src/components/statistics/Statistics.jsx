import PropTypes from 'prop-types';
import css from './statistics.module.css'
import { Stat } from './Stat';

export default function Statistics({title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(stat => (
          <Stat label={stat.label} percentage={stat.percentage} key={stat.id} />
        ))}
      </ul>
    </section>
  );
}


Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
