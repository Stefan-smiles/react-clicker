import { useEffect, useState } from "react";
import UpgradeButton from "./components/UpgradeButton";

export default function App() {
  const [cookies, setCookies] = useState(() => {
    return Number(localStorage.getItem("cookies") || 0);
  });
  const [cps, setCps] = useState(() => {
    return Number(localStorage.getItem("cps") || 0);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((current) => current + cps);
    }, 1000);

    return () => clearInterval(interval);
  }, [cps]);

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  function buyUpgrade() {
    setCps(cps + 1);
    setCookies(cookies - 10);
  }

  return (
    <div>
      <h1>Cookie Clicker</h1>
      <button onClick={incrementCookies}>cookie</button>
      <p>Cookies: {cookies}</p>
      <p>CPS (Cookies Per Second): {cps}</p>
      <UpgradeButton buyUpgrade={buyUpgrade} cookies={cookies} />
    </div>
  );
}
