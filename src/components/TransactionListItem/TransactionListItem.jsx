export default function TransactionListItem({ type, amount, currency }) {
  return (
    <tr>
      <td style={{ textTransform: "capitalize" }}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
