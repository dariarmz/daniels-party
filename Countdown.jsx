// Agenda.jsx — timeline of party blocks
const AGENDA_ITEMS = [
  { time: "12:50", name: "СБОР АГЕНТОВ",   meta: "ВЫДАЧА ПРОПУСКОВ" },
  { time: "13:00", name: "НАЧАЛО МИССИИ",  meta: "БРИФИНГ" },
  { time: "14:10", name: "ТОРТ_v8.0",      meta: "ОБЯЗАТЕЛЬНО" },
  { time: "14:50", name: "КОНЕЦ МИССИИ",   meta: "СБОР АГЕНТОВ" },
];

function Agenda() {
  return (
    <section className="section" id="agenda" data-screen-label="04 Plan">
      <SectionHead num={4} label="ПЛАН МИССИИ" title="ХРОНОЛОГИЯ"/>
      <div className="agenda">
        {AGENDA_ITEMS.map((it, i) => (
          <div className="agenda-row" key={i}>
            <div className="time">{it.time}</div>
            <div className="bar">▌</div>
            <div className="name">{it.name}</div>
            <div className="meta">{it.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Agenda });
