import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { SourceNote } from '../components/SourceNote';
import { INCUBATORS } from '../data/incubators';
import { FOUNDERS } from '../data/entrepreneurs';

export function Entreprendre() {
  return (
    <section id="entreprendre" className="section section--dark">
      <div className="wrap">
        <SectionHeader
          index="05"
          eyebrow="Entreprendre"
          title={<>Un écosystème réel existe. Voici les portes d'entrée.</>}
          lead="L'entrepreneuriat n'est pas une aventure solitaire. En France, des structures publiques et privées accompagnent les créateurs. Voici les principales, documentées, avec leurs chiffres et leurs conditions d'accès."
        />

        {/* Distinction de méthode */}
        <Reveal>
          <div className="glass" style={{ marginBottom: 'clamp(48px, 7vh, 80px)', padding: 'clamp(24px, 3vw, 36px)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent)', color: 'var(--ink-900)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <div>
                <h4 className="h4" style={{ fontSize: 17, marginBottom: 8 }}>Une distinction importante</h4>
                <p className="body-sm">
                  Un fondateur diplômé d'une école n'est pas nécessairement un fondateur incubé par cette école. Les portraits ci-dessous présentent des anciens élèves ayant réussi — pas des entreprises incubées. Aucun lien n'est inventé entre une personne et un dispositif.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Les incubateurs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 5vh, 56px)' }}>
          {INCUBATORS.map((inc, idx) => (
            <Reveal key={inc.id}>
              <article className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap', marginBottom: 24 }}>
                  <div>
                    <div className="mono" style={{ fontSize: 12, color: 'var(--text-on-dark-faint)', letterSpacing: '0.1em' }}>DISPOSITIF {String(idx + 1).padStart(2, '0')}</div>
                    <h3 className="h3" style={{ marginTop: 8 }}>{inc.name}</h3>
                    <p className="mono" style={{ fontSize: 12, color: 'var(--text-on-dark-muted)', marginTop: 6, letterSpacing: '0.04em' }}>{inc.location} · {inc.type}</p>
                  </div>
                </div>

                {inc.visual && (
                  <div style={{ marginBottom: 28 }}>
                    <MediaPlaceholder
                      label={inc.name}
                      ratio="21 / 9"
                      src={inc.visual.src}
                      alt={inc.visual.alt}
                      caption={inc.visual.caption}
                      sourceLabel={inc.visual.sourceLabel}
                    />
                  </div>
                )}

                <div className="grid-2" style={{ gap: 'clamp(24px, 4vw, 48px)', alignItems: 'start' }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 10 }}>Ce que c'est</div>
                    <p className="body" style={{ marginBottom: 20 }}>{inc.what}</p>

                    <div className="eyebrow" style={{ marginBottom: 10 }}>Comment on y entre</div>
                    <p className="body muted">{inc.howToEnter}</p>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 14 }}>Ce que ça apporte</div>
                    <ul className="list-clean">
                      {inc.whatItBrings.map((w) => <li key={w}>{w}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="grid-4" style={{ marginTop: 32, gap: 16 }}>
                  {inc.stats.map((s) => (
                    <div key={s.label} className="stat">
                      <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.5vw, 42px)' }}>{s.value}</span>
                      <span className="stat__label">{s.label}</span>
                    </div>
                  ))}
                </div>

                <SourceNote ids={inc.sourceIds} />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Les fondateurs */}
        <Reveal>
          <div style={{ marginTop: 'clamp(72px, 10vh, 120px)' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Des fondateurs réels</div>
            <h3 className="h2" style={{ maxWidth: '24ch', marginBottom: 16 }}>Des noms, des entreprises, des levées.</h3>
            <p className="lead muted" style={{ maxWidth: '60ch' }}>
              Trois entrepreneurs français passés par HEC Paris. Tous ont transformé une formation en création d'entreprise. Leur parcours ne garantit rien — mais il montre que la voie existe, et qu'elle est documentée.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 'clamp(40px, 6vh, 64px)' }}>
          {FOUNDERS.map((f, idx) => (
            <Reveal key={f.id} delay={idx * 80}>
              <article className="founder">
                <div className="founder__media">
                  <MediaPlaceholder
                    label={f.media.placeholder}
                    desc={f.media.desc}
                    ratio="4 / 5"
                    src={f.media.src}
                    alt={f.media.alt}
                    caption={f.media.caption}
                    sourceLabel={f.media.sourceLabel}
                  />
                </div>
                <div className="founder__body">
                  <div>
                    <div className="mono" style={{ fontSize: 12, color: 'var(--text-on-dark-faint)', letterSpacing: '0.1em' }}>FONDATEUR {String(idx + 1).padStart(2, '0')}</div>
                    <h4 className="founder__name" style={{ marginTop: 8 }}>{f.name}</h4>
                    <p className="founder__company">{f.company}</p>
                  </div>
                  <p className="body-sm" style={{ color: 'var(--text-on-dark)' }}>{f.companyDesc}</p>
                  <p className="body-sm muted">{f.role}</p>

                  {f.quote && (
                    <blockquote className="founder__quote">{f.quote}</blockquote>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 16, borderTop: '1px solid var(--line-dark)' }}>
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-on-dark-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Formation</div>
                      <p className="body-sm">{f.education}</p>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-on-dark-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Parcours</div>
                      <p className="body-sm muted">{f.track}</p>
                    </div>
                    {f.funding && (
                      <div>
                        <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Levée de fonds</div>
                        <p className="body-sm" style={{ color: 'var(--accent)' }}>{f.funding}</p>
                      </div>
                    )}
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-on-dark-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Fait marquant</div>
                      <p className="body-sm muted">{f.keyFact}</p>
                    </div>
                  </div>

                  <SourceNote ids={f.sourceIds} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Rappel HEC */}
        <Reveal>
          <div className="glass" style={{ marginTop: 'clamp(64px, 9vh, 110px)', padding: 'clamp(28px, 4vw, 44px)' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Le lien avec mes études</div>
            <p className="h4" style={{ fontWeight: 400, lineHeight: 1.5, maxWidth: '64ch' }}>
              Ces trois fondateurs sont passés par HEC Paris. HEC n'est pas la formation technique que je vise — mais ses programmes entrepreneuriaux (Startup Launchpad, Incubateur) sont accessibles à des étudiants venus d'autres écoles. <strong className="text-accent">42 Paris est explicitement citée parmi les établissements partenaires du HEC Startup Launchpad</strong>, sous conditions d'éligibilité et de sélection. C'est une passerelle documentée, pas une promesse automatique.
            </p>
            <SourceNote ids={['hec-launchpad', 'hec-incubateur']} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
