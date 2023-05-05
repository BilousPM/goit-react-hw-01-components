import PropTypes from 'prop-types';
import TransactionTableRow from "./TransactionTabeRow";
import css from './Transaction.module.css';

export default function TransactionHistory ({items}) {
    return <table className={css.transaction__history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map(item => {
        return <TransactionTableRow
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
      })}
    </tbody>
  </table>
  
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }))
}