import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { PROJECTS } from '../data/projects';

const STATUS_LABEL: Record<string, string> = {
  'publié': 'Publié',
  'en cours': 'En cours',
  'prototype': 'Prototype',
  'clôturé': 'Clôturé',
};

export function Projets() {
  const [active, setActive] = useState<string>('all');

  const categories = ['all', 'Chaîne YouTube', 'Service', 'Produit', 'Recherche', 'Acquisition', 'Jeu mobile', 'Application'];
  const filtered = active === 'all'
    ? PROJECTS
    : active === 'Chaîne YouTube'
      ? PROJECTS.filter((p) => p.category.startsWith('Chaîne'))
      : PROJECTS.filter((p) => p.category.startsWith(active));

  return (
    <section id="projets" className="section section--dark-2">
      <div className="wrap">
        <SectionHeader
          index="02"
          eyebrow="Ce que j'ai construit"
          title={<>Des preuves, pas des promesses.</>}
          lead="Chaque projet ci-dessous existe, est publié ou a été livré. Les chiffres viennent de mes tableaux de bord — Google Play Console, Google Ads, AdSense. Rien n'est arrondi vers le haut, rien n'est inventé."
        />

        {/* Filtres */}
        <Reveal>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vh, 72px)' }}>
          {filtered.map((p) => (
            <Reveal key={p.id}>
              <article className="card" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
                  <div>
                    <div className="tag tag--dot" style={{ marginBottom: 14 }}>{STATUS_LABEL[p.status]}</div>
                    <h3 className="h2" style={{ fontSize: 'clamp(24px, 3vw, 34px)' }}>{p.name}</h3>
                    <p className="mono" style={{ fontSize: 12, color: 'var(--text-on-dark-muted)', marginTop: 8, letterSpacing: '0.04em' }}>{p.category} · {p.year}</p>
                  </div>
                  {p.link && (
                    <a href={p.link.url} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ fontSize: 14, padding: '10px 18px' }}>
                      {p.link.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
                    </a>
                  )}
                </div>

                {/* Image principale — grande */}
                {p.media.src.endsWith('.pdf') ? (
                  <a href={p.media.src} target="_blank" rel="noopener noreferrer" className="glass" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: 'clamp(24px, 3vw, 36px)', textDecoration: 'none' }}>
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', display: 'grid', placeItems: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6M9 15h6"/></svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 4 }}>Rapport ADA 1.3 — résultats mesurés</div>
                      <div className="body-sm" style={{ color: 'var(--text-on-dark-muted)' }}>PDF · 3 novembre 2026 · Perplexités, mémoire, tests de rappel, comparaison avec Ornith. Cliquer pour lire le document complet.</div>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 'auto', flexShrink: 0, color: 'var(--text-on-dark-muted)' }}><path d="M7 17 17 7M7 7h10v10"/></svg>
                  </a>
                ) : (
                  <figure
                    className="media-figure media-figure--hero"
                    style={{ ['--ratio' as string]: p.media.ratio || '16 / 9' }}
                  >
                    <img src={p.media.src} alt={p.media.alt} loading="lazy" />
                    <figcaption>
                      <span className="media-figure__caption">{p.media.caption}</span>
                    </figcaption>
                  </figure>
                )}

                {/* Image secondaire */}
                {p.media2 && p.media2.src.endsWith('.pdf') === false && (
                  <figure
                    className="media-figure"
                    style={{ ['--ratio' as string]: p.media2.ratio || '16 / 10', maxWidth: 860 }}
                  >
                    <img src={p.media2.src} alt={p.media2.alt} loading="lazy" />
                    <figcaption>
                      <span className="media-figure__caption">{p.media2.caption}</span>
                    </figcaption>
                  </figure>
                )}

                {p.id === 'pc-family' && (
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 12 }}>La vidéo musicale</div>
                    <div className="video-embed" style={{ maxWidth: 860 }}>
                      <iframe
                        src="https://www.youtube.com/embed/D7k1HHcxBJI"
                        title="PC Family — la vidéo musicale créée avec ma sœur"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <p className="body-lg" style={{ color: 'var(--text-on-dark)', maxWidth: '70ch' }}>{p.description}</p>
                  {p.description2 && <p className="body muted" style={{ maxWidth: '70ch' }}>{p.description2}</p>}
                </div>

                {p.stats && (
                  <div className="stats-row" style={{ padding: '20px 0', borderTop: '1px solid var(--line-dark)', borderBottom: '1px solid var(--line-dark)' }}>
                    {p.stats.map((s) => (
                      <div className="stat" key={s.label}>
                        <span className="stat__value serif">{s.value}</span>
                        <span className="stat__label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <dl style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', gap: 14, fontSize: 14.5 }}>
                    <dt className="mono" style={{ color: 'var(--text-on-dark-muted)', minWidth: 110, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', paddingTop: 3 }}>Mon rôle</dt>
                    <dd style={{ fontWeight: 500 }}>{p.role}</dd>
                  </div>
                  <div style={{ display: 'flex', gap: 14, fontSize: 14.5 }}>
                    <dt className="mono" style={{ color: 'var(--text-on-dark-muted)', minWidth: 110, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', paddingTop: 3 }}>Compétences</dt>
                    <dd style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {p.skills.map((s) => (
                        <span key={s} className="tag" style={{ textTransform: 'none', letterSpacing: '0.02em', fontFamily: 'var(--font-sans)', fontSize: 12 }}>{s}</span>
                      ))}
                    </dd>
                  </div>
                  {p.results && (
                    <div style={{ display: 'flex', gap: 14, fontSize: 14.5 }}>
                      <dt className="mono" style={{ color: 'var(--text-on-dark-muted)', minWidth: 110, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', paddingTop: 3 }}>Résultats</dt>
                      <dd>
                        <ul className="list-clean" style={{ gap: 6 }}>
                          {p.results.map((r) => <li key={r}>{r}</li>)}
                        </ul>
                      </dd>
                    </div>
                  )}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
