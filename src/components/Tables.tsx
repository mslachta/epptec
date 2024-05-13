import React from "react";
import ClientTable from "./ClientTable";
import AccountTable from "./AccountTable";
import TransactionTable from "./TransactionTable";
import BalanceTable from "./BalanceTable";
import { IClient, IAccount, ITransaction, IBalance } from "./db";

interface Props {
  clients: IClient[];
  accounts: IAccount[];
  transactions: ITransaction[];
  balances: IBalance[];
  selectedClient: number | null;
  setSelectedClient: (clientId: number | null) => void;
}

const Tables: React.FC<Props> = ({
  clients,
  accounts,
  transactions,
  balances,
  selectedClient,
  setSelectedClient,
}) => {
  return (
    <div>
      <h1>CLIENTS:</h1>
      <ClientTable
        clients={clients}
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
      />

      <h2>Client accounts</h2>
      <AccountTable accounts={accounts} selectedClient={selectedClient} />

      <h2>Transactions</h2>
      <TransactionTable transactions={transactions} />

      <h2>Balances</h2>
      <BalanceTable balances={balances} />
    </div>
  );
};

export default Tables;
