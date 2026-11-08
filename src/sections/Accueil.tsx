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
          <p className="lead" style={{ marginTop: 36, maxWidth: '56ch', color: 'var(--text-on-dark)' }}>
            Je m'appelle <strong>Alistair</strong>. J'ai 16 ans, je suis en première. Depuis mes 10 ans, je construis : une chaîne de <strong>1 210 abonnés</strong> avec ma sœur, des sites pour de vrais clients, des applications installées <strong>216 fois</strong>, et aujourd'hui <strong>mon propre modèle d'intelligence artificielle</strong>, entraîné sur mon Mac.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="lead muted" style={{ marginTop: 16, maxWidth: '56ch' }}>
            Ce dossier existe pour vous, maman et papa. Il présente ce que j'ai construit, les études que je vise, et pourquoi un parcours entrepreneurial sérieux ne signifie pas renoncer aux études.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div style={{ marginTop: 48, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn--primary" onClick={() => document.getElementById('histoire')?.scrollIntoView({ behavior: 'smooth' })}>
              Lire mon histoire
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
            <div style={{ marginTop: 28, display: 'flex', gap: 'clamp(24px, 4vw, 48px)', flexWrap: 'wrap', paddingTop: 28, borderTop: '1px solid var(--line-dark)' }}>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>6 ans</span>
                <span className="stat__label">que je construis, depuis Scratch</span>
              </div>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>10</span>
                <span className="stat__label">projets présentés, avec preuves</span>
              </div>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>3</span>
                <span className="stat__label">écoles comparées honnêtement</span>
              </div>
              <div className="stat">
                <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)' }}>1</span>
                <span className="stat__label">modèle d'IA entraîné sur mon Mac</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
