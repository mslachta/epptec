import React from "react";
import { IClient } from "./db";

interface Props {
  clients: IClient[];
  selectedClient: number | null;
  setSelectedClient: (clientId: number | null) => void;
}

const ClientTable: React.FC<Props> = ({
  clients,
  selectedClient,
  setSelectedClient,
}) => {
  return (
    <table className="client-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client: IClient) => (
          <tr
            key={client.id}
            className={selectedClient === client.id ? "selected" : ""}
            onClick={() => setSelectedClient(client.id)}
          >
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.surname}</td>
            <td>{client.address}</td>
            <td>{client.phone_number}</td>
            <td>{client.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
