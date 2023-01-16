import PropTypes from 'prop-types'
import css from './history-tran.module.css';

export default function TransactionHistory({transactions}) {
return  <table>
    <thead>
      <tr>
        <th className={css.th}>Type</th>
        <th className={css.th}>Amount</th>
        <th className={css.th}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <Row
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
        />
      ))}
    </tbody>
  </table>;
}

function Row({ id, type, amount, currency }) {
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
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape),
};