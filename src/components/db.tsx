// Define interface for client entity
export interface IClient {
  id: number;
  name: string;
  surname: string;
  address: string;
  phone_number: string;
  email: string;
}
// Define interface for account entity
export interface IAccount {
  id: number;
  client_id: number;
  type: string; // "credit" | "debit" 
  balance: number;
}
// Define interface for transaction entity
export interface ITransaction {
  id: number;
  account_id: number;
  amount: number;
  status: "Pending" | "Approved" | "Rejected";
  timestamp: string; // Changed to string for simplicity, can be changed to Date if needed (date-fns.org)
  transaction_type: "Withdrawal" | "Deposit";
  target_account_id?: number;
}
// Define interface for balance entity
export interface IBalance {
  id: number;
  client_id: number;
  account_id: number;
  timestamp: string;// Changed to string for simplicity, can be changed to Date if needed (date-fns.org)
  amount: number;
  fees: number;
  interest: number;
  principal: number;
}
// Define interface for the entire database
export interface IDB {
  clients: IClient[];         // Array of clients
  accounts: IAccount[];       // Array of accounts
  transactions: ITransaction[]; // Array of transactions
  balances: IBalance[];       // Array of balances
}
// Create an instance of the database object adhering to the IDB interface
 export const db: IDB = {
  clients: [
    {
      id: 1,
      name: "Jakub",
      surname: "Novák",
      address: "V Parku 2308/8, Praha 4",
      phone_number: "+420 601 123 456",
      email: "jakub.novak@example.cz",
    },
    {
      id: 2,
      name: "Eva",
      surname: "Dvořáková",
      address: "Dlouhá 96/15, Ostrava",
      phone_number: "+420 702 987 654",
      email: "eva.dvorakova@example.cz",
    },
    {
      id: 3,
      name: "Martin",
      surname: "Králiček",
      address: "Brněnská 2032, Brno",
      phone_number: "+420 615 253 879",
      email: "martin.kralicek@example.cz",
    },
    {
      id: 4,
      name: "Lucie",
      surname: "Horáková",
      address: "Pražská 59, Plzeň",
      phone_number: "+420 737 489 210",
      email: "lucie.horakova@example.cz",
    },
    {
      id: 5,
      name: "Ondřej",
      surname: "Vávra",
      address: "Na Poříčí 1047/26, Praha 1",
      phone_number: "+420 777 123 456",
      email: "ondrej.vavra@example.cz",
    },
  ],
  accounts: [
    {
      id: 101,
      client_id: 1,
      type: "Checking",
      balance: 2400.5,
    },
    {
      id: 102,
      client_id: 2,
      type: "Savings",
      balance: 5800.0,
    },
    {
      id: 103,
      client_id: 3,
      type: "Checking",
      balance: 3200.0,
    },
    {
      id: 104,
      client_id: 4,
      type: "Savings",
      balance: 1500.0,
    },
    {
      id: 105,
      client_id: 5,
      type: "Investment",
      balance: 9800.0,
    },
    {
      id: 106,
      client_id: 1,
      type: "Investment",
      balance: 4550.0,
    },
    {
      id: 107,
      client_id: 2,
      type: "Checking",
      balance: 2330.0,
    },
    {
      id: 108,
      client_id: 3,
      type: "Savings",
      balance: 5400.0,
    },
    {
      id: 109,
      client_id: 4,
      type: "Investment",
      balance: 2200.0,
    },
    {
      id: 110,
      client_id: 5,
      type: "Checking",
      balance: 6200.0,
    },
  ],
  transactions: [
    {
      id: 201,
      account_id: 101,
      amount: 150.0,
      status: "Approved",
      timestamp: "2024-05-12T09:30:00Z",
      transaction_type: "Deposit",
      target_account_id: 102,
    },
    {
      id: 202,
      account_id: 102,
      amount: 75.0,
      status: "Pending",
      timestamp: "2024-05-12T10:45:00Z",
      transaction_type: "Withdrawal",
    },
    {
      id: 203,
      account_id: 103,
      amount: 200.0,
      status: "Approved",
      timestamp: "2024-05-12T12:00:00Z",
      transaction_type: "Deposit",
    },
    {
      id: 204,
      account_id: 104,
      amount: 300.0,
      status: "Rejected",
      timestamp: "2024-05-12T14:30:00Z",
      transaction_type: "Withdrawal",
    },
    {
      id: 205,
      account_id: 105,
      amount: 500.0,
      status: "Approved",
      timestamp: "2024-05-12T16:00:00Z",
      transaction_type: "Deposit",
      target_account_id: 107,
    },
    {
      id: 206,
      account_id: 106,
      amount: 150.0,
      status: "Pending",
      timestamp: "2024-05-12T17:30:00Z",
      transaction_type: "Withdrawal",
    },
    {
      id: 207,
      account_id: 107,
      amount: 250.0,
      status: "Approved",
      timestamp: "2024-05-13T09:00:00Z",
      transaction_type: "Deposit",
    },
    {
      id: 208,
      account_id: 108,
      amount: 300.0,
      status: "Rejected",
      timestamp: "2024-05-13T11:15:00Z",
      transaction_type: "Withdrawal",
    },
    {
      id: 209,
      account_id: 109,
      amount: 450.0,
      status: "Approved",
      timestamp: "2024-05-13T13:30:00Z",
      transaction_type: "Deposit",
      target_account_id: 110,
    },
    {
      id: 210,
      account_id: 110,
      amount: 100.0,
      status: "Pending",
      timestamp: "2024-05-13T15:45:00Z",
      transaction_type: "Withdrawal",
    },
  ],
  balances: [
    {
      id: 301,
      client_id: 1,
      account_id: 101,
      timestamp: "2024-05-12T11:00:00Z",
      amount: 2250.5,
      fees: 10.0,
      interest: 5.0,
      principal: 1000.5,
    },
    {
      id: 302,
      client_id: 2,
      account_id: 102,
      timestamp: "2024-05-12T11:15:00Z",
      amount: 5725.0,
      fees: 15.0,
      interest: 10.0,
      principal: 2000.0,
    },
    {
      id: 303,
      client_id: 3,
      account_id: 103,
      timestamp: "2024-05-12T12:30:00Z",
      amount: 3150.0,
      fees: 8.0,
      interest: 6.0,
      principal: 3000.0,
    },
    {
      id: 304,
      client_id: 4,
      account_id: 104,
      timestamp: "2024-05-12T13:45:00Z",
      amount: 1180.0,
      fees: 20.0,
      interest: 7.5,
      principal: 4000.5,
    },
    {
      id: 305,
      client_id: 5,
      account_id: 105,
      timestamp: "2024-05-12T15:00:00Z",
      amount: 9700.0,
      fees: 25.0,
      interest: 12.5,
      principal: 5000.5,
    },
    {
      id: 306,
      client_id: 1,
      account_id: 106,
      timestamp: "2024-05-12T16:15:00Z",
      amount: 4420.0,
      fees: 30.0,
      interest: 20.0,
      principal: 6000.0,
    },
    {
      id: 307,
      client_id: 2,
      account_id: 107,
      timestamp: "2024-05-12T17:30:00Z",
      amount: 2280.0,
      fees: 50.0,
      interest: 15.0,
      principal: 7000,
    },
  ],
};

export default db;
