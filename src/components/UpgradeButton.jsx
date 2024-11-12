import { useState, useEffect } from "react";

export default function UpgradeButton({ buyUpgrade, cookies }) {
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setDisable(cookies < 10);
  }, [cookies]);

  return (
    <button onClick={buyUpgrade} disabled={disable}>
      Buy Upgrade
    </button>
  );
}
