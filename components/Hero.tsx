export default function Hero() {
  return (
    <main>
      <section id="problem">
        <div className="container">
          <div className="section-top fade">
            <div>
              <div className="section-kicker">The Problem</div>
              <h2 className="section-title">
                Energy is being wasted. EVs cannot charge. The grid is not
                enough.
              </h2>
            </div>
            <p className="section-copy">
              The deck positions WATTONWAY around three connected
              inefficiencies: wasted surplus solar, poor rural charging access,
              and the slow, capital-heavy nature of fixed charging
              infrastructure.
            </p>
          </div>
          <div className="problem-grid">
            <article className="card soft fade">
              <div className="icon">☀️</div>
              <h3>Wasted Solar</h3>
              <p>
                Millions of farmers generate excess solar energy daily without
                an efficient mechanism to sell, store, or utilise that power.
              </p>
            </article>
            <article className="card soft fade">
              <div className="icon">🛣️</div>
              <h3>No Rural Infrastructure</h3>
              <p>
                Highway and rural corridors remain underserved by EV charging,
                creating a major accessibility gap outside urban centres.
              </p>
            </article>
            <article className="card soft fade">
              <div className="icon">🏗️</div>
              <h3>Fixed Stations Are Expensive</h3>
              <p>
                Traditional charging stations require heavy upfront capex, grid
                dependency, civil works, and long deployment timelines.
              </p>
            </article>
            <article className="card soft fade">
              <div className="icon">📦</div>
              <h3>No Last-Mile Energy</h3>
              <p>
                There is no scalable mobile clean-energy delivery layer that can
                meet EV users where demand appears in real time.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="market">
        <div className="container market-grid">
          <div className="fade">
            <div className="section-kicker">Market Context</div>
            <h2 className="section-title">
              India’s energy and mobility convergence creates a once-in-a-decade
              opening.
            </h2>
            <p className="section-copy">
              The investor story is anchored in fast EV growth, rising solar
              capacity, a large rural charging whitespace, and untapped
              agrivoltaic potential.
            </p>
            <div className="market-panel mt-5.5">
              <small>Why now</small>
              <h3>
                Policy tailwinds + infrastructure gaps + renewable surplus
              </h3>
              <p>
                WATTONWAY is framed as an infrastructure layer for India’s
                clean-energy future, designed for rural and semi-urban markets
                where fixed alternatives scale slowly and leave underserved
                demand behind.
              </p>
            </div>
          </div>
          <div className="market-stats fade">
            <div className="stat-box">
              <strong>30%</strong>
              <span>EV target</span>
              <em>India’s EV penetration goal by 2030.</em>
            </div>
            <div className="stat-box">
              <strong>85GW</strong>
              <span>Solar capacity</span>
              <em>Installed solar power referenced in the presentation.</em>
            </div>
            <div className="stat-box">
              <strong>&lt;2%</strong>
              <span>Rural coverage</span>
              <em>
                Current charging coverage in non-urban India highlighted as a
                major gap.
              </em>
            </div>
            <div className="stat-box">
              <strong>0 to 1</strong>
              <span>Agrivoltaics opportunity</span>
              <em>
                Dual-use solar farmland remains largely unmonetised beyond grid
                export.
              </em>
            </div>
          </div>
        </div>
      </section>

      <section id="solution">
        <div className="container">
          <div className="section-top fade">
            <div>
              <div className="section-kicker">The WATTONWAY Model</div>
              <h2 className="section-title">
                Collect. Store. Deliver. Charge.
              </h2>
            </div>
            <p className="section-copy">
              The operating model closes the loop between stranded solar energy
              and underserved EV demand through a decentralised mobile delivery
              network.
            </p>
          </div>
          <div className="flow">
            <div className="flow-step fade">
              <div className="step-no">1</div>
              <h3>Collect</h3>
              <p>
                Procure excess solar from farmers using swappable battery
                systems connected to solar nodes.
              </p>
            </div>
            <div className="flow-step fade">
              <div className="step-no">2</div>
              <h3>Store</h3>
              <p>
                Charge modular packs and maintain mobile vans with usable
                onboard energy capacity for repeated deployment.
              </p>
            </div>
            <div className="flow-step fade">
              <div className="step-no">3</div>
              <h3>Deliver</h3>
              <p>
                Route GPS-guided vans to high-demand corridors, peri-urban
                zones, highways, events, and other emerging hotspots.
              </p>
            </div>
            <div className="flow-step fade">
              <div className="step-no">4</div>
              <h3>Charge</h3>
              <p>
                Provide on-demand fast charging and battery support for
                2-wheelers, 3-wheelers, and 4-wheelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology">
        <div className="container">
          <div className="section-top fade">
            <div>
              <div className="section-kicker">Product & Technology</div>
              <h2 className="section-title">
                Purpose-built hardware. Intelligent software. Seamlessly
                integrated.
              </h2>
            </div>
            <p className="section-copy">
              The PDF describes a stack that blends battery-swapping hardware,
              mobile charging vans, fast-charge outputs, GPS software, and IoT
              monitoring.
            </p>
          </div>
          <div className="tech-grid">
            <article className="card fade">
              <div className="icon">🔄</div>
              <h3>Swappable Battery System</h3>
              <p>
                Modular battery packs designed to be charged at farm solar nodes
                and hot-swapped quickly to maximise uptime.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">🚐</div>
              <h3>200 kWh Mobile Vans</h3>
              <p>
                Custom-configured mobile units carrying substantial usable
                capacity to serve multiple vehicles per deployment cycle.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">⚡</div>
              <h3>High-Speed Charging Ports</h3>
              <p>
                Multi-standard outputs supporting simultaneous charging use
                cases across two-, three-, and four-wheeler segments.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">📍</div>
              <h3>GPS-Enabled Smart App</h3>
              <p>
                Real-time van location, slot booking, battery availability, and
                payments in one mobile-first user experience.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">📡</div>
              <h3>IoT Battery Monitoring</h3>
              <p>
                Sensor-based state-of-health tracking, cycle optimisation, and
                predictive maintenance across the battery fleet.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">📊</div>
              <h3>Fleet Intelligence Layer</h3>
              <p>
                Operational data, location demand patterns, and route
                utilisation together create a defensible optimisation engine.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="advantage">
        <div className="container">
          <div className="section-top fade">
            <div>
              <div className="section-kicker">Competitive Edge</div>
              <h2 className="section-title">No grid. No cables. No limits.</h2>
            </div>
            <p className="section-copy">
              The pitch emphasises zero fixed infrastructure, farmer income
              generation, lower cost energy procurement, rapid regional
              scalability, and first-mover advantage.
            </p>
          </div>
          <div className="edge-grid">
            <div className="card dark fade">
              <h3>Why WATTONWAY wins</h3>
              <p>
                Deploys in days rather than months, creates recurring income for
                farmers, scales van-by-van into new districts, and follows
                demand instead of waiting for demand to come to a fixed site.
              </p>
              <div className="grid gap-3.5 mt-4.5">
                <div>
                  <strong
                    style={{
                      color: "#fff",
                    }}
                  >
                    Zero fixed infrastructure
                  </strong>
                  <p>
                    No land acquisition, no heavy civil works, and no dependence
                    on permanent grid buildouts.
                  </p>
                </div>
                <div>
                  <strong
                    style={{
                      color: "#fff",
                    }}
                  >
                    Demand-responsive deployment
                  </strong>
                  <p>
                    Energy can be directed to highways, town clusters, event
                    spikes, and under-served rural corridors.
                  </p>
                </div>
                <div>
                  <strong
                    style={{
                      color: "#fff",
                    }}
                  >
                    Farmer-linked energy supply
                  </strong>
                  <p>
                    Farmer participation becomes part of the moat through
                    recurring supply relationships.
                  </p>
                </div>
              </div>
            </div>
            <div className="compare fade">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>WATTONWAY</th>
                    <th>Fixed Stations</th>
                    <th>Grid Mobile Units</th>
                    <th>Battery Swaps (Urban)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Infrastructure Required</td>
                    <td className="yes">None</td>
                    <td className="no">Heavy</td>
                    <td className="mid">Partial</td>
                    <td className="mid">Fixed hubs</td>
                  </tr>
                  <tr>
                    <td>Deployment Speed</td>
                    <td className="yes">Days</td>
                    <td className="no">Months</td>
                    <td className="mid">Weeks</td>
                    <td className="no">Months</td>
                  </tr>
                  <tr>
                    <td>Rural / Highway Coverage</td>
                    <td className="yes">Full</td>
                    <td className="no">Limited</td>
                    <td className="mid">Partial</td>
                    <td className="no">Urban only</td>
                  </tr>
                  <tr>
                    <td>Farmer Revenue Integration</td>
                    <td className="yes">Yes</td>
                    <td className="no">No</td>
                    <td className="no">No</td>
                    <td className="no">No</td>
                  </tr>
                  <tr>
                    <td>Scalability</td>
                    <td className="yes">High</td>
                    <td className="no">Low</td>
                    <td className="mid">Medium</td>
                    <td className="mid">Medium</td>
                  </tr>
                  <tr>
                    <td>Cost of Energy (est.)</td>
                    <td className="yes">Low</td>
                    <td className="mid">Medium</td>
                    <td className="mid">Medium</td>
                    <td className="no">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="revenue">
        <div className="container">
          <div className="revenue-shell fade">
            <div className="section-top mb-2">
              <div>
                <div
                  className="section-kicker"
                  style={{
                    color: "#92b393",
                  }}
                >
                  Revenue Engine
                </div>
                <h2
                  className="section-title"
                  style={{
                    color: "#fff",
                  }}
                >
                  Multiple income streams. One integrated platform.
                </h2>
              </div>
              <p
                className="section-copy"
                style={{
                  color: "#b4c0b6",
                }}
              >
                The deck lays out five interconnected revenue lines designed to
                compound as the fleet and farmer network expands.
              </p>
            </div>
            <div className="revenue-grid">
              <div className="revenue-orbit">
                <div className="core">WATTONWAY</div>
                <div className="orbit-item o1">
                  <strong>EV charging revenue</strong>
                  <span>
                    On-demand charging income from mobile deployments.
                  </span>
                </div>
                <div className="orbit-item o2">
                  <strong>Battery swapping services</strong>
                  <span>
                    Modular energy access for compatible vehicle and fleet use
                    cases.
                  </span>
                </div>
                <div className="orbit-item o3">
                  <strong>Fleet partnerships</strong>
                  <span>
                    B2B charging agreements for commercial and high-utilisation
                    operators.
                  </span>
                </div>
                <div className="orbit-item o4">
                  <strong>Subscription plans</strong>
                  <span>
                    Recurring packages for users, fleets, or regular-route
                    operators.
                  </span>
                </div>
                <div className="orbit-item o5">
                  <strong>Energy trading</strong>
                  <span>
                    Longer-term monetisation as the decentralised network
                    matures.
                  </span>
                </div>
              </div>
              <div
                className="card"
                style={{
                  backgroundColor: "#f8fbf7",
                }}
              >
                <div className="icon">💡</div>
                <h3>Why this model is attractive</h3>
                <p>
                  Diversified revenue lowers dependence on a single monetisation
                  path. As mobile charging activity grows, software,
                  subscriptions, fleet contracts, and the energy layer reinforce
                  the business model.
                </p>
                <div className="mt-4.5 grid gap-3">
                  <div className="card soft p-4">
                    <strong>Asset-light scaling</strong>
                    <p className="mt-1.5">
                      Each van becomes a new revenue unit without a full
                      infrastructure rebuild.
                    </p>
                  </div>
                  <div className="card soft p-4">
                    <strong>Recurring cash flow</strong>
                    <p className="mt-1.5">
                      Subscriptions and fleet contracts add predictability to
                      usage-based revenue.
                    </p>
                  </div>
                  <div className="card soft p-4">
                    <strong>Network effects</strong>
                    <p className="mt-1.5">
                      More farmers, more vans, and more location data increase
                      efficiency over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="traction">
        <div className="container">
          <div className="section-top fade">
            <div>
              <div className="section-kicker">Traction & Validation</div>
              <h2 className="section-title">
                Early signals. Strong conviction.
              </h2>
            </div>
            <p className="section-copy">
              The presentation describes WATTONWAY as operationally ready at an
              early stage, with validation across supply, demand, and logistics.
            </p>
          </div>
          <div className="traction-grid">
            <article className="card fade">
              <div className="icon">🌾</div>
              <h3>Farmer network pilot in planning</h3>
              <p>
                Discussions are underway with farmer collectives in solar-rich
                districts for structured charging agreements.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">🛵</div>
              <h3>Strong user demand identified</h3>
              <p>
                Market surveys show high intent among two- and three-wheeler
                users in peri-urban and highway corridors.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">🗺️</div>
              <h3>50+ priority locations mapped</h3>
              <p>
                GIS-based analysis has identified high-demand sites for initial
                van deployment and operational focus.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">📈</div>
              <h3>Operational model finalised</h3>
              <p>
                Unit economics, battery cycles, van utilisation, and charging
                pricing have been stress-tested in the pitch model.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div className="container">
          <div className="section-top fade">
            <div>
              <div className="section-kicker">Growth Roadmap</div>
              <h2 className="section-title">
                From pilot to national network in four phases.
              </h2>
            </div>
            <p className="section-copy">
              The roadmap in the PDF lays out a staged expansion from 1–2 vans
              to a 500+ van decentralised energy network.
            </p>
          </div>
          <div className="roadmap">
            <article className="phase fade">
              <span className="tag">Months 1–6</span>
              <h3>Phase 1 — Pilot launch</h3>
              <p>
                Deploy 1–2 mobile charging vans, onboard 5–10 farmer solar
                nodes, and validate demand and unit economics in one district.
              </p>
            </article>
            <article className="phase fade">
              <span className="tag">Months 7–18</span>
              <h3>Phase 2 — Regional expansion</h3>
              <p>
                Scale to 10–20 vans across 3–5 districts, grow procurement, and
                launch subscription and fleet partnership programmes.
              </p>
            </article>
            <article className="phase fade">
              <span className="tag">Months 19–36</span>
              <h3>Phase 3 — Multi-city deployment</h3>
              <p>
                Enter major corridors and Tier-2 cities, add IoT fleet
                management, and pursue infrastructure partnerships and grants.
              </p>
            </article>
            <article className="phase fade">
              <span className="tag">Year 4+</span>
              <h3>Phase 4 — National network</h3>
              <p>
                Operate a decentralised energy network across India with 500+
                vans and future energy-trading expansion potential.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="market-size">
        <div className="container market-size">
          <div className="headline-board fade">
            <div className="section-kicker" style={{ color: "#9bb89a" }}>
              Market Size
            </div>
            <div className="big">$7B+</div>
            <h3>
              A multi-billion dollar intersection of clean energy and mobility
            </h3>
            <p>
              The presentation frames the opportunity around a projected India
              EV charging market, a large new EV base by 2030, a 500GW renewable
              target, and a broader global clean-energy distribution
              opportunity.
            </p>
          </div>
          <div className="fade">
            <div className="card soft">
              <strong
                className="block"
                style={{
                  fontSize: "42px",
                  color: "#234228",
                }}
              >
                80M+
              </strong>
              <span className="block mt-2 font-extrabold">New EVs by 2030</span>
              <p className="mt-2">
                Projected new registrations demanding charging access.
              </p>
            </div>
            <div className="market-mini">
              <div className="card soft">
                <strong
                  style={{
                    fontSize: "34px",
                    color: "#234228",
                    display: "block",
                  }}
                >
                  500GW
                </strong>
                <span className="block mt-2 font-extrabold">
                  Renewable target
                </span>
              </div>
              <div className="card soft">
                <strong
                  style={{
                    fontSize: "34px",
                    color: "#234228",
                    display: "block",
                  }}
                >
                  $2T
                </strong>
                <span className="block mt-2 font-extrabold">
                  Global opportunity
                </span>
              </div>
              <div className="card soft">
                <strong
                  style={{
                    fontSize: "34px",
                    color: "#234228",
                    display: "block",
                  }}
                >
                  40–60%
                </strong>
                <span className="block mt-2 font-extrabold">
                  Potential corridor share
                </span>
              </div>
            </div>
            <div className="card mt-4.5">
              <h3>Why the window is open now</h3>
              <p>
                Supportive EV policy, structurally underserved rural and
                semi-urban markets, and first-mover capture in infrastructure
                corridors make timing a key part of the story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <div className="section-top fade">
            <div>
              <div className="section-kicker">The Team</div>
              <h2 className="section-title">
                Vision-driven. Execution-ready. Deeply committed.
              </h2>
            </div>
            <p className="section-copy">
              The deck presents three core leadership pillars across company
              vision, technology, and operations/partnerships.
            </p>
          </div>
          <div className="team-grid">
            <article className="card fade">
              <div className="icon">👨‍💼</div>
              <h3>Founder & CEO</h3>
              <p>
                Leads the mission with domain understanding across clean energy,
                rural markets, and mobility technology.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">🧠</div>
              <h3>Head of Technology</h3>
              <p>
                Owns the hardware-software platform spanning IoT systems,
                battery management, and the user-facing app layer.
              </p>
            </article>
            <article className="card fade">
              <div className="icon">🤝</div>
              <h3>Head of Operations & Partnerships</h3>
              <p>
                Focuses on farmer onboarding, logistics, fleet operations, and
                commercial partnership development.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="invest">
        <div className="container funding-wrap fade">
          <div className="funding-grid">
            <div>
              <div className="section-kicker" style={{ color: "#9bb89a" }}>
                Funding Round
              </div>
              <h2
                className="section-title"
                style={{
                  color: "#fff",
                }}
              >
                Join at the ground floor of India’s decentralised energy
                transition.
              </h2>
              <div className="raise">₹133 Cr</div>
              <p
                style={{
                  color: "#b8c4bb",
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                Seed / Pre-Series A round to fund pilot deployment, technology
                build-out, and early market validation.
              </p>
              <div className="badges">
                <span className="badge">Seed stage</span>
                <span className="badge">Equity round</span>
                <span className="badge">Investor access</span>
                <span className="badge">Pilot expansion</span>
              </div>
            </div>
            <div className="use-list">
              <div className="use-item">
                <div className="use-head">
                  <strong>Product Development</strong>
                  <span>30%</span>
                </div>
                <div className="bar">
                  <div className="fill w-[30%]"></div>
                </div>
              </div>
              <div className="use-item">
                <div className="use-head">
                  <strong>Pilot Deployment</strong>
                  <span>25%</span>
                </div>
                <div className="bar">
                  <div className="fill w-1/4"></div>
                </div>
              </div>
              <div className="use-item">
                <div className="use-head">
                  <strong>Technology & App</strong>
                  <span>25%</span>
                </div>
                <div className="bar">
                  <div className="fill w-1/4"></div>
                </div>
              </div>
              <div className="use-item">
                <div className="use-head">
                  <strong>Operations & Expansion</strong>
                  <span>20%</span>
                </div>
                <div className="bar">
                  <div className="fill w-1/5"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel" id="contact">
            <div className="section-kicker">Investor Contact</div>
            <h2
              style={{
                fontSize: "36px",
                lineHeight: "1.05",
                fontWeight: "900",
                marginTop: "8px",
              }}
            >
              Request the investor deck, meeting, or partnership discussion.
            </h2>
            <p
              style={{
                marginTop: "10px",
                color: "#627064",
                lineHeight: "1.8",
              }}
            >
              This section is designed for normal website visitors and
              investors. It gives them a clear path to reach out for the pitch
              deck, commercial partnership discussions, or an investment call.
            </p>
            <form
              action="mailto:contact@wattonway.in"
              method="post"
              encType="text/plain"
            >
              <div className="contact-grid">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Work email"
                  required
                />
                <input
                  className="input"
                  type="text"
                  name="company"
                  placeholder="Company / Fund"
                />
                <input
                  className="input"
                  type="text"
                  name="interest"
                  placeholder="Interest: Investor / Fleet / Partner"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your interest, cheque size, market focus, or partnership requirements"
                ></textarea>
              </div>
              <div className="submit-row">
                <p className="note">
                  Direct email: <strong>contact@wattonway.in</strong>
                  <br />
                  Suggested CTA for launch: “Invest in WATTONWAY” or “Book an
                  investor conversation”.
                </p>
                <button className="btn btn-primary" type="submit">
                  Contact Us to Invest
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
