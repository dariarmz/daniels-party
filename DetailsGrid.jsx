// App.jsx — composes the full invitation page

function TopBar() {
  return (
    <header className="topbar">
      <div className="left">
        <img src="../../assets/logo-wordmark.svg" alt="ДАНИЭЛЬ.08"/>
      </div>
      <div className="right">
        <Hud color="acid">ОТВЕТ_ОЖИДАЕМ</Hud>
      </div>
    </header>
  );
}

function InviteSite() {
  const [rsvp, setRsvp] = React.useState(null);
  const rsvpAnchor = React.useRef(null);

  function scrollToRSVP() {
    const el = document.getElementById("rsvp");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="invite-stage">
      <div className="invite-content">
        <TopBar/>
        <Hero onRSVPClick={scrollToRSVP}/>
        <AsciiRule char="▒" count={120}/>
        <Countdown target="2026-05-21T13:00:00+04:00"/>
        <DetailsGrid/>
        <Agenda/>
        <AsciiRule char="▒" count={120}/>
        <Gift/>
        <AsciiRule char="▒" count={120}/>
        <RSVPForm submitted={!!rsvp} name={rsvp?.agentName} onSubmit={setRsvp}/>
        <Footer/>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<InviteSite/>);

Object.assign(window, { InviteSite, TopBar });
