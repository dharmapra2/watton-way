export default function HeroHeader() {
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">

        {/* ── 40% Left: copy ── */}
        <div className="fade">
          <div className="eyebrow">
            Clean Energy&nbsp;•&nbsp;Agrivoltaics&nbsp;•&nbsp;Mobile EV Charging
          </div>
          <h1>India's Fast <span>EV Charging</span> at your Doorstep.
</h1>
          <p className="lead">
            WATTONWAY is India's first decentralised mobile EV charging network —
            procuring excess solar power from farmers and delivering it through
            mobile EV charging vans and swappable battery stations across rural
            and highway corridors.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#invest" aria-label="Invest in WATTONWAY EV charging startup">
              Invest in WATTONWAY
            </a>
            <a className="btn btn-secondary" href="#solution" aria-label="Explore WATTONWAY mobile EV charging model">
              Explore the Model
            </a>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <strong>85GW</strong>
              <span>India solar capacity</span>
            </div>
            <div className="metric">
              <strong>30%</strong>
              <span>EV target by 2030</span>
            </div>
            <div className="metric">
              <strong>&lt;2%</strong>
              <span>Rural EV charging coverage</span>
            </div>
          </div>
        </div>

        {/* ── 60% Right: animated scene ── */}
        <div className="hero-visual fade">
          <div className="visual-card">
            <div className="scene-root">

              {/* Sky, sun, clouds */}
              <div className="s-sky" />
              <div className="s-sun" />
              <div className="s-cloud s-cloud-1" />
              <div className="s-cloud s-cloud-2" />

              {/* Terrain */}
              <div className="s-hill-1" />
              <div className="s-hill-2" />
              <div className="s-ground" />

              {/* Road */}
              <div className="s-road-wrap">
                <div className="s-road-surface" />
                <div className="s-road-dashes" />
              </div>

              {/* ── FARM (left) ── */}
              <div className="s-farm">
                <div className="s-label-farm">① Farm</div>
                <div className="s-farm-land" />
                <div className="s-panels">
                  <div className="s-panel" />
                  <div className="s-panel" />
                  <div className="s-panel" />
                </div>
                <div className="s-energy-line">
                  <div className="s-edot" />
                  <div className="s-edot" />
                  <div className="s-edot" />
                </div>
                <div className="s-batt-station">
                  <div className="s-batt-station-label">Battery Hub</div>
                  <div className="s-batt-row">
                    <div className="s-batt" />
                    <div className="s-batt" />
                    <div className="s-batt" />
                  </div>
                  <div className="s-charge-ports">
                    <div className="s-charge-port" />
                    <div className="s-charge-port" />
                    <div className="s-charge-port" />
                  </div>
                </div>
              </div>

              {/* ── CITY (right) ── */}
              <div className="s-city">
                <div className="s-label-city">City / Village</div>
                <div className="s-building s-b1">
                  <div className="s-win s-win-a" /><div className="s-win s-win-b" />
                  <div className="s-win s-win-c" /><div className="s-win s-win-d" />
                </div>
                <div className="s-building s-b2">
                  <div className="s-win s-win-e" /><div className="s-win s-win-f" />
                  <div className="s-win s-win-g" /><div className="s-win s-win-h" />
                  <div className="s-win s-win-i" /><div className="s-win s-win-j" />
                </div>
                <div className="s-building s-b3" />
                <div className="s-building s-b4" />
              </div>

              {/* ── VAN ── */}
              <div className="s-van">
                <div className="s-van-body">
                  <div className="s-van-cabin" />
                  <div className="s-van-win" />
                  <div className="s-van-batt" />
                  <div className="s-van-light" />
                  <div className="s-van-wheel s-van-w1" />
                  <div className="s-van-wheel s-van-w2" />
                </div>
              </div>

              {/* ── Charging wire from hub to van ── */}
              <div className="s-hub-wire" />

              {/* ── Charging wires from van to vehicles ── */}
              <div className="s-van-wire" />
              <div className="s-van-wire-2" />

              {/* ── Booking popup ── */}
              <div className="s-booking">
                <div className="s-booking-title">📱 Book Charging</div>
                <div className="s-booking-bar"><div className="s-booking-fill" /></div>
                <div className="s-booking-bar"><div className="s-booking-fill" style={{ animationDelay: "-.5s" }} /></div>
                <div className="s-booking-btn">Confirm ✓</div>
              </div>

              {/* ── Second booking popup ── */}
              <div className="s-booking-2">
                <div className="s-booking-title">📱 Book Charging</div>
                <div className="s-booking-bar"><div className="s-booking-fill" /></div>
                <div className="s-booking-bar"><div className="s-booking-fill" style={{ animationDelay: "-.5s" }} /></div>
                <div className="s-booking-btn">Confirm ✓</div>
              </div>

              {/* ── EV scooter ── */}
              <div className="s-scooter">
                <div className="s-sc-body" />
                <div className="s-sc-wf" />
                <div className="s-sc-wr" />
                <div className="s-sc-rider">
                  <div className="s-sc-head" />
                  <div className="s-sc-torso" />
                </div>
              </div>

              {/* ── Second EV scooter ── */}
              <div className="s-scooter-2">
                <div className="s-sc-body" />
                <div className="s-sc-wf" />
                <div className="s-sc-wr" />
                <div className="s-sc-rider">
                  <div className="s-sc-head" />
                  <div className="s-sc-torso" />
                </div>
              </div>

              {/* ── Charge bolt ── */}
              <div className="s-bolt">⚡</div>
              <div className="s-bolt-2">⚡</div>

              {/* ── Payment tick ── */}
              <div className="s-pay">✓</div>
              <div className="s-pay-2">✓</div>

              {/* ── Stage label ── */}
              <div className="s-stage break-after-auto">
                Solar → Battery → Van → Book → Charge → Pay → Repeat
              </div>

            </div>
          </div>

          <div className="visual-caption">
            <strong>Live rural energy delivery scene</strong>
            <p>
              Solar farms → swappable batteries → mobile vans → EV charging,
              anywhere in India.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
