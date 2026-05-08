// DetailsGrid.jsx — three HUD cards: where, when, dress code
function DetailsGrid() {
  return (
    <section className="section" data-screen-label="03 Details">
      <SectionHead num={3} label="ДЕТАЛИ ОПЕРАЦИИ" title="ГДЕ · КОГДА · КАК"/>
      <div className="details-grid">

        <HudCard className="detail">
          <div className="cap"><LucideIcon name="mappin"/> [ КООРДИНАТЫ ]</div>
          <h3>ZAGA GAME<br/>ул. Кирова, 142</h3>
          <p>ТЦ «АЛЫЕ ПАРУСА» · вход с ул. Удмуртской.</p>
        </HudCard>

        <HudCard className="detail">
          <div className="cap"><LucideIcon name="clock"/> [ ВРЕМЯ ]</div>
          <h3>21.05.26<br/>13 : 00</h3>
          <p>Начало брифинга ровно в 13:00. Опоздавших декриптуем на месте.</p>
        </HudCard>

        <HudCard className="detail">
          <div className="cap"><LucideIcon name="shirt"/> [ ДРЕСС-КОД ]</div>
          <h3>НЕОН +<br/>КАПЮШОН</h3>
          <p>Кибер-очки, светящиеся браслеты, всё блестящее.</p>
        </HudCard>

      </div>
    </section>
  );
}

Object.assign(window, { DetailsGrid });
