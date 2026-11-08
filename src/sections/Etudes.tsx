import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { SourceNote } from '../components/SourceNote';
import { SCHOOLS, COMPARISON } from '../data/schools';

export function Etudes() {
  return (
    <section id="etudes" className="section section--light">
      <div className="wrap">
        <SectionHeader
          index="04"
          eyebrow="Les études"
          title={<>Trois écoles, comparées honnêtement.</>}
          lead="Epitech, Albert School et l'École 42 ne se ressemblent pas. Chacune a sa logique, son diplôme, sa pédagogie et ses limites. Voici une comparaison documentée, pour comprendre laquelle correspond le mieux à mon projet."
          variant="light"
        />

        {/* Avertissement de méthode */}
        <Reveal>
          <div className="glass" style={{ marginBottom: 'clamp(48px, 7vh, 80px)', padding: 'clamp(24px, 3vw, 36px)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--ink-900)', color: 'var(--accent)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              </div>
              <div>
                <h4 className="h4" style={{ fontSize: 17, marginBottom: 8 }}>Une distinction importante</h4>
                <p className="body-sm" style={{ color: 'var(--text-on-light-muted)' }}>
                  Un titre RNCP de niveau 7 n'est pas automatiquement un diplôme d'ingénieur. Un grade de master n'est pas non plus un titre d'ingénieur. Cette section ne présente aucune certification comme un diplôme d'ingénieur si ce n'est pas le cas. C'est une question de rigueur — et c'est aussi ce qui rend ce dossier crédible.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Fiches écoles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vh, 64px)' }}>
          {SCHOOLS.map((school, idx) => (
            <Reveal key={school.id}>
              <article className="school-card" style={{ background: '#fff' }}>
                <div className="school-card__head">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                    <div>
                      <div className="mono" style={{ fontSize: 12, color: 'var(--text-on-light-faint)', letterSpacing: '0.1em' }}>ÉCOLE {String(idx + 1).padStart(2, '0')}</div>
                      <h3 className="h2" style={{ marginTop: 8 }}>{school.name}</h3>
                      <p className="serif italic" style={{ fontSize: 20, color: 'var(--text-on-light-muted)', marginTop: 4 }}>{school.tagline}</p>
                    </div>
                    <a href={school.website} target="_blank" rel="noopener noreferrer" className="btn btn--light" style={{ fontSize: 14, padding: '10px 18px' }}>
                      Site officiel
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
                    </a>
                  </div>

                  <div style={{ marginTop: 24 }}>
                    <MediaPlaceholder
                      label={school.visual.label}
                      desc={school.visual.desc}
                      ratio="21 / 6"
                      variant="light"
                      src={school.visual.src}
                      alt={school.visual.alt}
                      caption={school.visual.caption}
                      sourceLabel={school.visual.sourceLabel}
                    />
                  </div>
                </div>

                <div className="school-card__body">
                  <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4px 32px' }}>
                    <div className="school-card__row"><dt>Durée</dt><dd>{school.duration}</dd></div>
                    <div className="school-card__row"><dt>Diplôme</dt><dd>{school.diploma}</dd></div>
                    <div className="school-card__row"><dt>Reconnaissance</dt><dd>{school.recognition}</dd></div>
                    <div className="school-card__row"><dt>Pédagogie</dt><dd>{school.pedagogy}</dd></div>
                    <div className="school-card__row"><dt>Admission</dt><dd>{school.admission}</dd></div>
                    <div className="school-card__row"><dt>Coût</dt><dd>{school.tuition}</dd></div>
                    <div className="school-card__row"><dt>Entrepreneuriat</dt><dd>{school.entrepreneurship}</dd></div>
                    <div className="school-card__row"><dt>Débouchés</dt><dd>{school.outcomes}</dd></div>
                  </dl>

                  <div className="grid-2" style={{ gap: 20, marginTop: 8 }}>
                    <div>
                      <div className="eyebrow" style={{ marginBottom: 12 }}>Atouts</div>
                      <ul className="list-clean">
                        {school.strengths.map((s) => <li key={s}>{s}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--text-on-light-muted)' }}>Limites</div>
                      <ul className="list-clean">
                        {school.limits.map((s) => <li key={s}>{s}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div style={{ paddingTop: 20, borderTop: '1px solid var(--line-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-on-light-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Profil idéal</div>
                      <p className="body" style={{ fontWeight: 500 }}>{school.bestFor}</p>
                    </div>
                    {school.parcoursup && (
                      <a href={school.parcoursup} target="_blank" rel="noopener noreferrer" className="btn btn--light" style={{ fontSize: 14, padding: '10px 18px' }}>
                        Candidater
                      </a>
                    )}
                  </div>

                  <SourceNote ids={school.sourceIds} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Tableau comparatif */}
        <Reveal>
          <div style={{ marginTop: 'clamp(64px, 9vh, 110px)' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Tableau comparatif</div>
            <h3 className="h3" style={{ marginBottom: 24 }}>D'un seul regard.</h3>
            <div className="glass" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--line-light-strong)' }}>
                      <th style={{ textAlign: 'left', padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-light-faint)' }}>Critère</th>
                      <th style={{ textAlign: 'left', padding: '18px 20px', fontWeight: 600, fontSize: 15 }}>Epitech</th>
                      <th style={{ textAlign: 'left', padding: '18px 20px', fontWeight: 600, fontSize: 15 }}>Albert School</th>
                      <th style={{ textAlign: 'left', padding: '18px 20px', fontWeight: 600, fontSize: 15 }}>École 42</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.label} style={{ borderBottom: i < COMPARISON.length - 1 ? '1px solid var(--line-light)' : 'none' }}>
                        <td style={{ padding: '14px 20px', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--text-on-light-muted)', textTransform: 'uppercase' }}>{row.label}</td>
                        <td style={{ padding: '14px 20px', fontSize: 14.5 }}>{row.epitech}</td>
                        <td style={{ padding: '14px 20px', fontSize: 14.5 }}>{row.albert}</td>
                        <td style={{ padding: '14px 20px', fontSize: 14.5 }}>{row.quaranteDeux}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mon raisonnement */}
        <Reveal>
          <div style={{ marginTop: 'clamp(64px, 9vh, 110px)' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Mon raisonnement</div>
            <h3 className="h2" style={{ maxWidth: '20ch', marginBottom: 24 }}>Pourquoi Albert School correspond le mieux à mon objectif.</h3>
            <div className="grid-2" style={{ gap: 32, alignItems: 'start' }}>
              <div>
                <p className="body-lg" style={{ marginBottom: 16 }}>
                  Mon objectif n'est pas seulement de savoir coder. Il est de <strong>transformer une technologie en produit</strong>, de trouver des clients, de mesurer ce qui fonctionne et de construire une entreprise.
                </p>
                <p className="body-lg muted">
                  Albert School est la seule des trois à mêler délibérément <strong>data, IA et business</strong>, avec un grade de licence pour le Bachelor et un grade de master pour le MSc — reconnu par arrêté ministériel, en partenariat avec Mines Paris – PSL. L'alternance au MSc permet de financer une partie des études tout en accumulant de l'expérience réelle.
                </p>
              </div>
              <div>
                <p className="body-lg muted" style={{ marginBottom: 16 }}>
                  Epitech reste une excellente option si je veux privilégier la profondeur technique. 42 est une option gratuite et exigeante, à condition d'être capable d'une très grande autonomie — et de compléter moi-même la dimension business.
                </p>
                <p className="body-lg muted">
                  Mon raisonnement n'est pas définitif : c'est un ordre de préférence, construit sur ce que je sais de moi aujourd'hui. Les sections suivantes expliquent comment je veux utiliser ces études pour entreprendre.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
