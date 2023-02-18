import {
  TransactionTable,
  TableHeadCell,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <TableData>{item.type}</TableData>
              <TableData>{item.amount}</TableData>
              <TableData>{item.currency}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};
