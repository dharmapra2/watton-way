export default function Navbar() {
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div className="fade">
          <div className="eyebrow">
            Clean Energy • Agrivoltaics • Mobile EV Charging
          </div>
          <h1>
            Powering the <span>Future</span>, Everywhere.
          </h1>
          <p className="lead">
            WATTONWAY is a decentralised clean energy network that procures
            excess solar power from farmers and delivers it through mobile EV
            charging systems powered by swappable battery technology.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#invest">
              Invest in WATTONWAY
            </a>
            <a className="btn btn-secondary" href="#solution">
              Explore the Model
            </a>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <strong>85GW</strong>
              <span>India solar capacity highlighted in the deck</span>
            </div>
            <div className="metric">
              <strong>30%</strong>
              <span>EV penetration target by 2030</span>
            </div>
            <div className="metric">
              <strong>&lt;2%</strong>
              <span>Rural charging coverage opportunity</span>
            </div>
          </div>
        </div>

        <div className="hero-visual fade">
          <div className="visual-card animated-scene">
            <div className="scene-sky">
              <div className="sun"></div>
              <div className="cloud cloud-1"></div>
              <div className="cloud cloud-2"></div>
            </div>
            <div className="scene-hills hill-back"></div>
            <div className="scene-hills hill-mid"></div>
            <div className="scene-ground"></div>

            <div className="solar solar-1">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="solar solar-2">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="solar solar-3">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="field field-1"></div>
            <div className="field field-2"></div>
            <div className="field field-3"></div>

            <div className="charge-station">
              <div className="station-head"></div>
              <div className="station-wire"></div>
              <div className="station-pulse pulse-1"></div>
              <div className="station-pulse pulse-2"></div>
            </div>

            <div className="van-path"></div>
            <div className="van-wrap">
              <div className="van-body">
                <div className="van-cabin"></div>
                <div className="van-window"></div>
                <div className="van-battery"></div>
                <div className="van-wheel van-wheel-1"></div>
                <div className="van-wheel van-wheel-2"></div>
                <div className="van-light"></div>
              </div>
            </div>

            <div className="energy-orb orb-1"></div>
            <div className="energy-orb orb-2"></div>
            <div className="energy-orb orb-3"></div>
          </div>
          <div className="visual-caption">
            <strong>Animated rural energy delivery scene</strong>
            <p>
              The hero now shows moving farm land, solar panels, flowing energy,
              and a charging van so users immediately understand the WATTONWAY
              model.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
