import React, { useState } from "react";
import db, { IClient, IBalance } from "./db";

function clientWithPrincipalGreatherThanC(
  clients: IClient[],
  balances: IBalance[],
  c: number
) {
  const selectedClients: IClient[] = [];

  for (const client of clients) {
    const totalPrincipal = balances
      .filter((balance) => balance.client_id === client.id)
      .reduce((acc, curr) => acc + curr.principal, 0);

    if (totalPrincipal > c) selectedClients.push(client);
  }

  return selectedClients;
}

const Task5: React.FC = () => {
  const [c, setC] = useState<number>(5000);
  const clients = db.clients;
  const balances = db.balances;
  const result = clientWithPrincipalGreatherThanC(clients, balances, c ?? 0);

  return (
    <div>
      <h1>Task 5:</h1>
      <p>
        Postavte dotaz, který vybere všechny klienty (např. id_klient, jméno a
        příjmení) pro něž bude platit, že suma jistin všech jejich účtů na konci
        měsíce bude větší než číslo c.
      </p>
      <label>
        C:{" "}
        <input
          type="number"
          defaultValue={c}
          onChange={(v) => setC(Number(v.currentTarget.value))}
        />
      </label>

      <div>
        Vysledek:{" "}
        {result.map((res) => (
          <div key={`task5-${res.id}`}>
            {res.id} | {res.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task5;
