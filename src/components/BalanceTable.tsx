import React from "react";
import { IBalance } from "./db";

interface Props {
  balances: IBalance[];
}

const BalanceTable: React.FC<Props> = ({ balances }) => {
  return (
    <div className="balances-container">
      <table className="balance-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client ID</th>
            <th>Account ID</th>
            <th>Timestamp</th>
            <th>Amount</th>
            <th>Fees</th>
            <th>Interest</th>
            <th>Principal</th>
          </tr>
        </thead>
        <tbody>
          {balances.map((balance: IBalance) => (
            <tr key={balance.id}>
              <td>{balance.id}</td>
              <td>{balance.client_id}</td>
              <td>{balance.account_id}</td>
              <td>{balance.timestamp}</td>
              <td>{balance.amount}</td>
              <td>{balance.fees}</td>
              <td>{balance.interest}</td>
              <td>{balance.principal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BalanceTable;
