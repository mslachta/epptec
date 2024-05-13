import React from "react";
import { IClient } from "./db";

interface Props {
  clients: IClient[];
}

const SelectedClientsTable: React.FC<Props> = ({ clients }) => {
  return (
    <div className="selected-clients-table">
      <h2>Selected Clients</h2>
      <table>
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
          {clients.map((client) => (
            <tr key={client.id}>
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
    </div>
  );
};

export default SelectedClientsTable;
