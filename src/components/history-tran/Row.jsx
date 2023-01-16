import PropTypes from 'prop-types';
import css from './history-tran.module.css';

export function Row({ type, amount, currency }) {
  return (
    <tr >
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
}
Row.propTypes = {type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
