import s from "./TransactionHistory.module.css";
import TransactionListItem from "../TransactionListItem/TransactionListItem";

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead className={s.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((trans, index) => {
          return (
            <TransactionListItem
              key={index}
              type={trans.type}
              amount={trans.amount}
              currency={trans.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

/*       <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table> */
