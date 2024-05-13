import React from "react";
import { IAccount } from "./db";

interface Props {
  accounts: IAccount[];
  selectedClient: number | null;
}

const AccountTable: React.FC<Props> = ({ accounts, selectedClient }) => {
  return (
    <div className="accounts-container">
      {selectedClient &&
      accounts.filter((x: IAccount) => x.client_id === selectedClient)
        .length === 0 ? (
        <div>No accounts</div>
      ) : (
        <table className="account-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client ID</th>
              <th>Type</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts
              .filter((x: IAccount) => x.client_id === selectedClient)
              .map((account: IAccount) => (
                <tr key={account.id}>
                  <td>{account.id}</td>
                  <td>{account.client_id}</td>
                  <td>{account.type}</td>
                  <td>{account.balance}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AccountTable;
