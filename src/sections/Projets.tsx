import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { VideoPending } from '../components/VideoPending';
import { PROJECTS } from '../data/projects';

const STATUS_LABEL: Record<string, string> = {
  'publié': 'Publié',
  'en cours': 'En cours',
  'prototype': 'Prototype',
  'clôturé': 'Clôturé',
};

export function Projets() {
  const [active, setActive] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(PROJECTS.map((p) => p.category.split(' · ')[0])))];
  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category.startsWith(active));

  return (
    <section id="projets" className="section section--dark-2">
      <div className="wrap">
        <SectionHeader
          index="02"
          eyebrow="Ce que j'ai construit"
          title={<>Des projets, pas des intentions.</>}
          lead="Voici les réalisations concrètes qui documentent ma progression. Pour chaque projet : mon rôle, les compétences mobilisées et les résultats disponibles. Aucun chiffre n'est inventé. Les éléments visuels sont à intégrer progressivement."
        />

        {/* Filtres */}
        <Reveal>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tag ${active === cat ? 'tag--accent' : ''}`}
                style={{ cursor: 'pointer', textTransform: 'none', letterSpacing: '0.02em', fontFamily: 'var(--font-sans)', fontSize: 13, padding: '8px 14px' }}
                onClick={() => setActive(cat)}
              >
                {cat === 'all' ? 'Tous les projets' : cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid-2">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 80}>
              <article className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 4 }}>
                  <div>
                    <div className="tag tag--dot" style={{ marginBottom: 12 }}>{STATUS_LABEL[p.status]}</div>
                    <h3 className="h3">{p.name}</h3>
                    <p className="mono" style={{ fontSize: 12, color: 'var(--text-on-dark-muted)', marginTop: 6, letterSpacing: '0.04em' }}>{p.category} · {p.year}</p>
                  </div>
                </div>

                {p.media && (
                  <MediaPlaceholder label={p.media.placeholder} desc={p.media.desc} ratio={p.media.ratio || '16 / 10'} />
                )}

                {p.id === 'pc-family' && (
                  <VideoPending
                    title="Vidéo musicale PC Family"
                    note="Créée avec ma sœur. Lien à intégrer dès récupération — aucun lien inventé."
                  />
                )}

                <p className="body" style={{ color: 'var(--text-on-dark)' }}>{p.description}</p>

                <dl style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: 14 }}>
                    <dt className="mono" style={{ color: 'var(--text-on-dark-muted)', minWidth: 90, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', paddingTop: 2 }}>Rôle</dt>
                    <dd>{p.role}</dd>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 14 }}>
                    <dt className="mono" style={{ color: 'var(--text-on-dark-muted)', minWidth: 90, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', paddingTop: 2 }}>Compétences</dt>
                    <dd style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {p.skills.map((s) => (
                        <span key={s} className="tag" style={{ textTransform: 'none', letterSpacing: '0.02em', fontFamily: 'var(--font-sans)', fontSize: 12 }}>{s}</span>
                      ))}
                    </dd>
                  </div>
                  {p.results && (
                    <div style={{ display: 'flex', gap: 12, fontSize: 14 }}>
                      <dt className="mono" style={{ color: 'var(--text-on-dark-muted)', minWidth: 90, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', paddingTop: 2 }}>Résultats</dt>
                      <dd style={{ color: 'var(--text-on-dark-muted)' }}>{p.results}</dd>
                    </div>
                  )}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass" style={{ marginTop: 'clamp(56px, 8vh, 96px)', padding: 'clamp(28px, 4vw, 40px)' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>À compléter</div>
            <p className="body muted" style={{ maxWidth: '70ch' }}>
              Les emplacements visuels ci-dessus attendent les captures réelles de chaque projet. Liste détaillée dans le fichier <span className="mono text-accent">MEDIA-A-FOURNIR.md</span> à la racine du dépôt. Les fichiers personnels ne doivent pas être poussés sur le dépôt public sans validation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
