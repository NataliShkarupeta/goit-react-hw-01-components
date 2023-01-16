import PropTypes from 'prop-types';
import css from './history-tran.module.css';

export function Row({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
}
Row.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
