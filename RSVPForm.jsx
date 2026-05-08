// Hero.jsx — viewport-tall hero with mega "08" anchor and primary CTA
function Hero({ onRSVPClick }) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-left">
        <div className="boot-in"><Hud color="cyan">ВХОДЯЩИЙ СИГНАЛ // ID_DANIEL_08</Hud></div>
        <h1 className="boot-in">
          КИБЕР<span className="slash">_</span>ДЕНЬ<br/>
          РОЖДЕНИЯ <span className="slash">//</span><br/>
          <span className="marek">ДАНИЭЛЬ.exe</span>
        </h1>
        <p className="hero-sub boot-in">
          [ ВХОД РАЗРЕШЁН ] // 21.05.2026 // 13:00 // ОДЕНЬ КАПЮШОН И КИБЕР-ОЧКИ
        </p>
        <div className="hero-cta-row boot-in">
          <button className="btn btn-primary" onClick={onRSVPClick}>
            &gt; ПОДТВЕРДИТЬ ПРИБЫТИЕ
            <LucideIcon name="arrow"/>
          </button>
          <a className="btn btn-secondary" href="#agenda">
            &gt; ЗАПОЛНИТЬ ДАННЫЕ
          </a>
        </div>
      </div>

      <div className="mega-wrap">
        <div className="mega-meta tl">// LVL.08</div>
        <div className="mega-meta tr">PROTOCOL_<br/>BIRTHDAY</div>
        <div className="mega-meta bl">ID_DANIEL_08</div>
        <div className="mega-meta br">21.05.26<br/>13:00</div>
        <div className="mega" aria-label="08">
          <span aria-hidden="true">08</span>
          <span className="mega-r" aria-hidden="true">08</span>
          <span className="mega-b" aria-hidden="true">08</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
