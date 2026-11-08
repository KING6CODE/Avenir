import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Accueil } from './sections/Accueil';
import { Histoire } from './sections/Histoire';
import { Projets } from './sections/Projets';
import { IA } from './sections/IA';
import { Etudes } from './sections/Etudes';
import { Entreprendre } from './sections/Entreprendre';
import { Avenir } from './sections/Avenir';
import { Lettre } from './sections/Lettre';
import { SOURCES } from './data/sources';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${progress * 100}%` }} aria-hidden="true" />;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div className="nav__brand" style={{ marginBottom: 16 }}>
              <span className="nav__brand-mark">A</span>
              <span className="nav__brand-name">
                AVENIR
                <small>Alistair · Dossier familial</small>
              </span>
            </div>
            <p className="body-sm" style={{ maxWidth: '40ch' }}>
              Dossier familial interactif présentant le parcours, les réalisations, les études visées et le projet d'entrepreneuriat d'Alistair. Conçu pour ses parents, novembre 2026.
            </p>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Sections</div>
            <ul className="list-clean" style={{ gap: 6 }}>
              <li><a href="#histoire">Mon histoire</a></li>
              <li><a href="#projets">Ce que j'ai construit</a></li>
              <li><a href="#ia">L'intelligence artificielle</a></li>
              <li><a href="#etudes">Les études</a></li>
              <li><a href="#entreprendre">Entreprendre</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Sources</div>
            <p className="body-sm" style={{ marginBottom: 12 }}>{SOURCES.length} sources officielles consultées le 08/11/2026.</p>
            <p className="body-sm">
              Registre complet dans le fichier <span className="mono text-accent">SOURCES.md</span> à la racine du dépôt.
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 — Alistair · Dossier familial AVENIR</span>
          <span className="mono">Construit avec React · Vite · TypeScript</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Accueil />
        <Histoire />
        <Projets />
        <IA />
        <Etudes />
        <Entreprendre />
        <Avenir />
        <Lettre />
      </main>
      <Footer />
    </>
  );
}
