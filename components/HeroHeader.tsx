export default function HeroHeader() {
  return (
    <header className="hero" id="top" aria-label="WATTONWAY — Mobile EV Charging & Clean Energy Investment India">
      <div className="container hero-grid">
        {/* Left: copy */}
        <div className="fade">
          <div className="eyebrow">
            Clean Energy&nbsp;•&nbsp;Agrivoltaics&nbsp;•&nbsp;Mobile EV Charging India
          </div>
          <h1>
            India's Mobile <span>EV Charging</span> Network, Powered by Farmers.
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

        {/* Right: animated scene */}
        <div className="hero-visual fade">
          <div className="visual-card">
            <div className="animated-scene">
              <div className="scene-sky">
                <div className="sun" />
                <div className="cloud cloud-1" />
                <div className="cloud cloud-2" />
              </div>

              <div className="scene-hills hill-back" />
              <div className="scene-hills hill-mid" />
              <div className="scene-ground" />

              <div className="solar solar-1">
                <span /><span /><span />
              </div>
              <div className="solar solar-2">
                <span /><span /><span />
              </div>
              <div className="solar solar-3">
                <span /><span /><span />
              </div>

              <div className="field field-1" />
              <div className="field field-2" />
              <div className="field field-3" />

              <div className="charge-station">
                <div className="station-head" />
                <div className="station-wire" />
                <div className="station-pulse pulse-1" />
                <div className="station-pulse pulse-2" />
              </div>

              <div className="van-path" />
              <div className="van-wrap">
                <div className="van-body">
                  <div className="van-cabin" />
                  <div className="van-window" />
                  <div className="van-battery" />
                  <div className="van-wheel van-wheel-1" />
                  <div className="van-wheel van-wheel-2" />
                  <div className="van-light" />
                </div>
              </div>

              <div className="energy-orb orb-1" />
              <div className="energy-orb orb-2" />
              <div className="energy-orb orb-3" />
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
