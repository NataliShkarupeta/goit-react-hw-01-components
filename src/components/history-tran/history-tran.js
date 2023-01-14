import PropTypes from 'prop-types'
import css from './history-tran.module.css';

export default function TransactionHistory({transactions}) {
return  <table className={css.transaction-history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <Row
          id={transaction.id}
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
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
Row.PropTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
TransactionHistory.PropTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};