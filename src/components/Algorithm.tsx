import { useEffect, useState } from "react";
import BalanceTable from "./BalanceTable";
import db from "./db";

const Algorithm = () => {
  const [percent, setPercent] = useState<number>(0);
  const [balances, setBalances] = useState(db.balances);

  useEffect(() => {
    if (percent > 0) {
      const newBalance = db.balances.map((balance) => {
        const newInterest = balance.interest * (1 + percent / 100);
        return {
          ...balance,
          interest: newInterest,
        };
      });

      setBalances(newBalance);
    }
  }, [percent]);

  // function that removes balances with an amount less than 5000 from the balances array.uppon clicking button
  const removeBalanceLessThan5000 = () =>
    setBalances(balances.filter((balance) => balance.amount >= 5000));

  return (
    <div>
      <h1>Algoritmus:</h1>
      <ul>
        <li>Zobraz vsetky balance v databaze</li>
        <li>
          Pridaj input, kde uzivatel vie nastavit o koľko % sa ma zvysit urokova
          sadzba
        </li>
        <li>
          Pridaj tlacitko, kedy sa z balance vymazu vsetky polozky kde je Amount
          mensi ako 10 000
        </li>
      </ul>
      <label>
        Navysenie urokovej sadzby:
        <input
          type="number"
          defaultValue={percent}
          onChange={(v) => setPercent(Number(v.currentTarget.value))}
        />
      </label>
      <div>
        <button onClick={removeBalanceLessThan5000}>
          Vymazat kde je balance.account menej ako 5 000
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setBalances(db.balances);
            setPercent(0);
          }}
        >
          Reset vsetko
        </button>
      </div>
      <BalanceTable balances={balances} />
    </div>
  );
};

export default Algorithm;
