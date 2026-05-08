// Countdown.jsx — live ticker to a target ISO date
function Countdown({ target = "2026-06-15T14:00:00+03:00" }) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, new Date(target).getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="section" data-screen-label="02 Countdown">
      <SectionHead num={2} label="ОБРАТНЫЙ ОТСЧЁТ" title="ДО ЗАПУСКА"/>
      <div className="cd">
        <div className="seg"><div className="num">{pad(d)}</div><div className="unit">дни</div></div>
        <div className="seg"><div className="num">{pad(h)}</div><div className="unit">часы</div></div>
        <div className="seg"><div className="num">{pad(m)}</div><div className="unit">мин</div></div>
        <div className="seg"><div className="num">{pad(s)}</div><div className="unit">сек</div></div>
      </div>
    </section>
  );
}

Object.assign(window, { Countdown });
