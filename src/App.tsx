import React, { useState } from "react";
import db from "./components/db";
import Tables from "./components/Tables";
import "./App.css";
import Task5 from "./components/Task5";
import Task6 from "./components/Task6";
import Algorithm from "./components/Algorithm";

function App() {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);

  return (
    <div className="App">
      <hr />
      <Task5 />
      <hr />
      <Task6 />
      <hr />
      <Algorithm />
      <hr />

      <Tables
        clients={db.clients}
        accounts={db.accounts}
        transactions={db.transactions}
        balances={db.balances}
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
      />
    </div>
  );
}

export default App;
