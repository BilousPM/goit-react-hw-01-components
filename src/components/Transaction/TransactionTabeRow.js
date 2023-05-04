// import PropTypes from 'prop-types';

export default function TransactionTableRow ({type, amount, currency}) {
  return <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
    </tr>
}

// TransactionTableRow.propTypes = {
//   type: PropTypes.string,
//   amount: PropTypes.number,
//   currency: PropTypes.number,
// }