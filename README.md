// Gift.jsx — gift preference block: Daniel is saving for a PC upgrade
function Gift() {
  return (
    <section className="section" id="gift" data-screen-label="05 Gift">
      <SectionHead num={5} label="СНАБЖЕНИЕ" title="ЗАПРОС НА АПГРЕЙД"/>

      <div className="gift-card">
        <div className="gift-corner c-tl"></div>
        <div className="gift-corner c-tr"></div>
        <div className="gift-corner c-bl"></div>
        <div className="gift-corner c-br"></div>

        <div className="gift-grid">
          <div className="gift-left">
            <div className="gift-cap">// MISSION_PERSONAL · АГЕНТ ДАНИЭЛЬ</div>
            <h3 className="gift-title">КОПЛЮ НА<br/>АПГРЕЙД<span className="dot">.</span><span className="ver">v2</span></h3>
            <p className="gift-body">
              Прокачиваю свой компьютер. Нужно докупить две детали — без них новая графика и игры не запускаются.
              Поэтому подарок <span className="hilite">деньгами</span> — лучший способ помочь миссии.
            </p>
          </div>

          <div className="gift-right">
            <div className="bom-cap">// СПЕЦИФИКАЦИЯ · BOM</div>
            <ul className="bom">
              <li>
                <span className="bom-mark">&gt;</span>
                <span className="bom-name">МАТЕРИНСКАЯ ПЛАТА</span>
                <span className="bom-status">REQ.</span>
              </li>
              <li>
                <span className="bom-mark">&gt;</span>
                <span className="bom-name">ВИДЕОКАРТА</span>
                <span className="bom-status">REQ.</span>
              </li>
            </ul>
            <div className="bom-meta">
              <span>STATUS:</span><span className="ok">ИДЁТ СБОР</span>
            </div>
            <div className="bom-meta">
              <span>FORMAT:</span><span className="hilite">ДЕНЕЖНЫЙ ПЕРЕВОД</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Gift });
