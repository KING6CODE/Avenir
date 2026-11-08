import { Reveal } from '../components/Reveal';

export function Accueil() {
  return (
    <section id="accueil" className="section section--dark" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="hero-grain" aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="mono" style={{ color: 'var(--text-on-dark-faint)' }}>00</span>
            <span style={{ opacity: 0.4 }}>·</span>
            Dossier familial — Novembre 2026
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display" style={{ maxWidth: '14ch' }}>
            Construire mon avenir,
            <br />
            plutôt que simplement
            <br />
            <span className="serif italic text-accent">le choisir.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="lead" style={{ marginTop: 36, maxWidth: '54ch', color: 'var(--text-on-dark)' }}>
            Je m'appelle <strong>Alistair</strong>. J'ai 16 ans, je suis en première. Je code depuis mes 10 ans, j'ai publié des chaînes, livré des sites, conçu une application, et je travaille aujourd'hui sur des projets d'intelligence artificielle.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="lead muted" style={{ marginTop: 16, maxWidth: '54ch' }}>
            Ce dossier existe pour vous, mes parents. Il présente ce que j'ai construit, les études que je vise, et pourquoi un parcours entrepreneurial sérieux ne signifie pas renoncer aux études.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div style={{ marginTop: 48, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn--primary" onClick={() => document.getElementById('histoire')?.scrollIntoView({ behavior: 'smooth' })}>
              Lire le dossier
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </button>
            <button className="btn btn--ghost" onClick={() => document.getElementById('etudes')?.scrollIntoView({ behavior: 'smooth' })}>
              Aller aux études
            </button>
          </div>
        </Reveal>

        {/* Bandeau de thèse */}
        <Reveal delay={560}>
          <div className="glass" style={{ marginTop: 'clamp(64px, 10vh, 120px)', padding: 'clamp(28px, 4vw, 44px)' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>La thèse de ce dossier</div>
            <p className="h3" style={{ fontWeight: 400, fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.35, letterSpacing: '-0.01em' }}>
              « Je ne veux pas choisir entre étudier et entreprendre. Je veux choisir une formation qui me permette de développer les deux — en construisant progressivement des compétences, des projets et un réseau professionnel. »
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 28, borderTop: '1px solid var(--line-dark)' }}>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>8</span>
                <span className="stat__label">étapes du parcours</span>
              </div>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>10</span>
                <span className="stat__label">projets présentés</span>
              </div>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>3</span>
                <span className="stat__label">écoles comparées</span>
              </div>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>5</span>
                <span className="stat__label">incubateurs documentés</span>
              </div>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>3</span>
                <span className="stat__label">fondateurs réels</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
