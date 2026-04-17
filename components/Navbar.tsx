"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrap">
      <div className="container">
        <nav>
          <a className="brand" href="#top">
            <img
              src="/wattonway-logo-traced.svg"
              alt="WATTONWAY"
              className="brand-logo"
              width={180}
              height={45}
            />
          </a>

          <div className="nav-links">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#technology">Technology</a>
            <a href="#advantage">Advantage</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#invest">Invest</a>
          </div>

          <a className="nav-cta" href="#contact">
            Contact Investors
          </a>

          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              style={
                open
                  ? { transform: "rotate(45deg) translate(5px, 5px)" }
                  : undefined
              }
            />
            <span style={open ? { opacity: 0 } : undefined} />
            <span
              style={
                open
                  ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                  : undefined
              }
            />
          </button>
        </nav>
      </div>

      <div className={`nav-drawer${open ? " open" : ""}`}>
        <a href="#problem" onClick={() => setOpen(false)}>Problem</a>
        <a href="#solution" onClick={() => setOpen(false)}>Solution</a>
        <a href="#technology" onClick={() => setOpen(false)}>Technology</a>
        <a href="#advantage" onClick={() => setOpen(false)}>Advantage</a>
        <a href="#roadmap" onClick={() => setOpen(false)}>Roadmap</a>
        <a href="#invest" onClick={() => setOpen(false)}>Invest</a>
        <a href="#contact" onClick={() => setOpen(false)} style={{ color: "var(--green)", fontWeight: 800 }}>
          Contact Investors
        </a>
      </div>
    </div>
  );
}
