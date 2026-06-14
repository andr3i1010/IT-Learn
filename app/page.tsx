export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');

        .hero-root {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          background-color: #020617;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.12;
          pointer-events: none;
        }
        .blob-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #6366f1, transparent 70%);
          top: -80px;
          right: 10%;
        }
        .blob-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #8b5cf6, transparent 70%);
          bottom: -60px;
          left: 5%;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }

        .fade-up { opacity: 0; animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
        .fade-in { opacity: 0; animation: fadeIn 0.8s ease forwards; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.3s; }
        .d4 { animation-delay: 0.42s; }
        .d5 { animation-delay: 0.55s; }
        .d6 { animation-delay: 0.2s; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 48px 80px;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 100px 24px 60px;
            text-align: center;
          }
          .illus-col { display: none; }
          .sponsor-text { text-align: center; }
        }

        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: #f8fafc;
          margin: 0 0 4px;
        }

        .heading-highlight {
          display: inline;
          background: linear-gradient(135deg, #4f52e8 0%, #7c3aed 100%);
          color: #fff;
          padding: 12px 12px;
          border-radius: 12px;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
          line-height: 1.55;
        }

        .hero-sub {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.65;
          margin: 20px 0 36px;
          max-width: 440px;
        }

        .btn-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #6366f1, #7c3aed);
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          border-radius: 999px;
          padding: 13px 28px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(99,102,241,0.4);
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(99,102,241,0.55);
          opacity: 0.93;
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          color: #e2e8f0;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1.5px solid rgba(226,232,240,0.2);
          border-radius: 999px;
          padding: 12px 28px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .btn-ghost:hover {
          background: rgba(226,232,240,0.07);
          border-color: rgba(226,232,240,0.38);
          transform: translateY(-2px);
        }

        .sponsor-text {
          margin-top: 40px;
          font-size: 0.75rem;
          color: #475569;
          line-height: 1.6;
          max-width: 420px;
        }
        .sponsor-text span {
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.04em;
        }

        /* Illustration SVG */
        .illus-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .illus-wrap {
          animation: floatY 5s ease-in-out infinite;
          width: 100%;
          max-width: 480px;
        }
      `}</style>

      <div className="hero-root">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <div className="hero-grid">
          {/* Left column */}
          <div>
            <h1 className="hero-heading fade-up d1">Discover the</h1>
            <h1 className="hero-heading fade-up d2" style={{ marginBottom: 0 }}>
              <span className="heading-highlight">World of Coding</span>
            </h1>

            <p className="hero-sub fade-up d3">
              Coding made easy by students for students.
            </p>

            <div className="btn-row fade-up d4">
              <a href="#" className="btn-primary">Get started</a>
              <a href="#" className="btn-ghost">Try without account</a>
            </div>

            <div className="sponsor-text fade-up d5">
              <span>SPONSORED BY:</span> No Sponsors yet, if you want to sponsor feel free to contact us at contact.itlearn@gmail.com
            </div>
          </div>

          {/* Right column — illustration */}
          <div className="illus-col fade-in d6">
            <div className="illus-wrap">
              <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Desk */}
                <rect x="120" y="290" width="310" height="14" rx="7" fill="#1e293b"/>
                <rect x="160" y="304" width="14" height="70" rx="4" fill="#1e293b"/>
                <rect x="376" y="304" width="14" height="70" rx="4" fill="#1e293b"/>

                {/* Monitor stand */}
                <rect x="233" y="258" width="16" height="34" rx="4" fill="#334155"/>
                <rect x="210" y="288" width="62" height="8" rx="4" fill="#334155"/>

                {/* Monitor */}
                <rect x="155" y="148" width="222" height="115" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="3"/>
                <rect x="165" y="158" width="202" height="95" rx="8" fill="#1e293b"/>
                {/* Screen content */}
                <rect x="175" y="168" width="80" height="6" rx="3" fill="#6366f1" opacity="0.8"/>
                <rect x="175" y="180" width="120" height="5" rx="2.5" fill="#334155"/>
                <rect x="175" y="191" width="100" height="5" rx="2.5" fill="#334155"/>
                <rect x="175" y="202" width="60" height="5" rx="2.5" fill="#8b5cf6" opacity="0.7"/>
                <rect x="175" y="215" width="140" height="5" rx="2.5" fill="#334155"/>
                <rect x="175" y="226" width="90" height="5" rx="2.5" fill="#334155"/>
                {/* Cursor blink */}
                <rect x="270" y="226" width="2" height="10" rx="1" fill="#6366f1" opacity="0.9"/>

                {/* Coffee cup */}
                <rect x="378" y="268" width="28" height="22" rx="5" fill="#334155"/>
                <path d="M406 276 Q418 276 418 284 Q418 292 406 292" stroke="#334155" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <rect x="381" y="264" width="22" height="5" rx="2" fill="#475569"/>
                {/* Steam */}
                <path d="M387 260 Q389 254 387 248" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
                <path d="M393 258 Q395 252 393 246" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>

                {/* Chair back */}
                <rect x="305" y="210" width="60" height="90" rx="14" fill="#1e3a5f" opacity="0.9"/>
                {/* Chair seat */}
                <rect x="295" y="295" width="80" height="22" rx="10" fill="#1e3a5f" opacity="0.9"/>
                {/* Chair legs */}
                <line x1="300" y1="315" x2="285" y2="370" stroke="#334155" strokeWidth="6" strokeLinecap="round"/>
                <line x1="370" y1="315" x2="385" y2="370" stroke="#334155" strokeWidth="6" strokeLinecap="round"/>
                <line x1="295" y1="340" x2="380" y2="340" stroke="#334155" strokeWidth="5" strokeLinecap="round"/>

                {/* Person body */}
                <ellipse cx="320" cy="295" rx="32" ry="20" fill="#2d6a4f" opacity="0.9"/>
                {/* Torso / shirt */}
                <path d="M295 290 Q320 310 345 290 L348 330 Q320 345 292 330 Z" fill="#2d6a4f"/>
                {/* Jacket / hoodie */}
                <path d="M290 295 Q280 300 278 330 L292 332 Q295 310 295 290 Z" fill="#1a4a3a"/>
                <path d="M350 295 Q360 300 362 330 L348 332 Q345 310 345 290 Z" fill="#1a4a3a"/>

                {/* Neck */}
                <rect x="313" y="255" width="14" height="22" rx="6" fill="#f59e7a"/>

                {/* Head */}
                <ellipse cx="320" cy="245" rx="28" ry="30" fill="#f59e7a"/>
                {/* Hair */}
                <path d="M294 238 Q296 210 320 208 Q344 210 346 238 Q340 220 320 218 Q300 220 294 238 Z" fill="#1a0a00"/>

                {/* Headphones */}
                <path d="M293 235 Q293 208 320 208 Q347 208 347 235" stroke="#374151" strokeWidth="5" fill="none" strokeLinecap="round"/>
                <rect x="287" y="233" width="10" height="16" rx="5" fill="#374151"/>
                <rect x="343" y="233" width="10" height="16" rx="5" fill="#374151"/>

                {/* Ear */}
                <ellipse cx="293" cy="248" rx="5" ry="7" fill="#e8845a"/>

                {/* Arm reaching to keyboard */}
                <path d="M295 305 Q270 310 255 295" stroke="#f59e7a" strokeWidth="10" strokeLinecap="round" fill="none"/>
                {/* Hand */}
                <ellipse cx="252" cy="293" rx="10" ry="7" fill="#f59e7a"/>

                {/* Keyboard */}
                <rect x="175" y="282" width="130" height="10" rx="4" fill="#1e293b"/>
                <rect x="178" y="284" width="124" height="6" rx="3" fill="#0f172a"/>
                {/* Keys rows */}
                {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
                  <rect key={i} x={181 + i * 10} y={285} width="7" height="4" rx="1.5" fill="#334155"/>
                ))}

                {/* Red jacket on chair */}
                <path d="M348 240 Q370 250 372 290 Q365 295 355 290 Q350 270 348 240 Z" fill="#dc2626" opacity="0.85"/>
                <path d="M368 290 Q378 292 380 310 Q368 312 360 308 Z" fill="#b91c1c" opacity="0.85"/>

                {/* Shoes */}
                <ellipse cx="302" cy="368" rx="20" ry="8" fill="#fbbf24"/>
                <ellipse cx="360" cy="368" rx="20" ry="8" fill="#fbbf24"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
