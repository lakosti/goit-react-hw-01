import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionWrap}>
      <table className={css.table}>
        <thead className={css.transactionHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.transactionBody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
