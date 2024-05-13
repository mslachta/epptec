import db, { IClient, IBalance } from "./db";

function sortClientsByTopBalance(clients: IClient[], balances: IBalance[]) {
  const totalBalances = new Map();

  balances.forEach((balance) => {
    totalBalances.set(
      balance.client_id,
      (totalBalances.get(balance.client_id) || 0) + balance.amount
    );
  });

  // Map clients to include their total balance and sort by total balance
  const clientTotals = Array.from(
    clients.map((client) => ({
      id: client.id,
      name: client.name,
      total: totalBalances.get(client.id) || 0,
    }))
  );

  // Sort clients by total balance and take the top 10
  clientTotals.sort((a, b) => b.total - a.total);

  // Return the top 10 clients by total balance
  return clientTotals.slice(0, 10);
}

const Task6 = () => {
  const clients = db.clients;
  const balances = db.balances;
  const result = sortClientsByTopBalance(clients, balances);

  return (
    <div>
      <h1>Task 6:</h1>
      <p>
        Postavte dotaz, který zobrazí 10 klientů s maximální celkovou výší
        pohledávky (suma všech pohledávek klienta) k ultimu měsíce a tuto na
        konci řádku vždy zobrazte.
      </p>

      <div>
        Vysledek:{" "}
        {result.map((res) => (
          <div key={`task6-${res.id}`}>
            {res.id} | {res.name} | {res.total}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task6;
