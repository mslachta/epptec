import React from "react";
import { ITransaction } from "./db";

interface Props {
  transactions: ITransaction[];
}

const TransactionTable: React.FC<Props> = ({ transactions }) => {
  return (
    <div className="transactions-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Timestamp</th>
            <th>Transaction Type</th>
            <th>Target Account ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: ITransaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.account_id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
              <td>{transaction.timestamp}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.target_account_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
