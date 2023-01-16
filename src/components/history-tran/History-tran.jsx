import PropTypes from 'prop-types'
import css from './history-tran.module.css';
import { Row } from './Row';

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


TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape),
};