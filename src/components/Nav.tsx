import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'accueil', label: 'Accueil', num: '00' },
  { id: 'histoire', label: 'Mon histoire', num: '01' },
  { id: 'projets', label: 'Ce que j\'ai construit', num: '02' },
  { id: 'ia', label: 'L\'intelligence artificielle', num: '03' },
  { id: 'etudes', label: 'Les études', num: '04' },
  { id: 'entreprendre', label: 'Entreprendre', num: '05' },
  { id: 'avenir', label: 'Mon projet d\'avenir', num: '06' },
  { id: 'lettre', label: 'Lettre à mes parents', num: '07' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('accueil');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // detect active section
      const offset = window.innerHeight * 0.35;
      let current = 'accueil';
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= offset) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <button className="nav__brand" onClick={() => go('accueil')} aria-label="Retour à l'accueil">
          <span className="nav__brand-mark">A</span>
          <span className="nav__brand-name">
            AVENIR
            <small>Alistair · Dossier familial</small>
          </span>
        </button>

        <div className="nav__links">
          {LINKS.slice(1, 7).map((l) => (
            <button
              key={l.id}
              className={`nav__link ${active === l.id ? 'nav__link--active' : ''}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button className="nav__menu-btn" onClick={() => setOpen(true)} aria-label="Ouvrir le menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <button
              key={l.id}
              className="nav__mobile-link"
              onClick={() => go(l.id)}
            >
              <span>{l.label}</span>
              <small>{l.num}</small>
            </button>
          ))}
          <button
            className="nav__mobile-link"
            onClick={() => setOpen(false)}
            style={{ marginTop: 24, borderBottom: 'none', color: 'var(--text-on-dark-muted)' }}
            aria-label="Fermer le menu"
          >
            <span>Fermer</span>
            <small>✕</small>
          </button>
        </div>
      )}
    </>
  );
}
