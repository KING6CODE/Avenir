import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { SourceNote } from '../components/SourceNote';
import { ADA } from '../data/ada';

export function IA() {
  return (
    <section id="ia" className="section section--graphite">
      <div className="wrap">
        <SectionHeader
          index="03"
          eyebrow="L'intelligence artificielle"
          title={<>ADA. Mon propre modèle de langage.</>}
          lead={ADA.pitch}
        />

        {/* Le pitch en grand */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 'clamp(56px, 8vh, 96px)' }}>
            {[
              { v: '28 ×', l: 'moins de mémoire qu\'une architecture classique à 1 million de jetons' },
              { v: '19,7', l: 'perplexité sur le jeu d\'évaluation — contre 53 au départ' },
              { v: '5 / 12', l: 'fonctions réussies au mini-banc de code — mesuré, pas estimé' },
              { v: '100 %', l: 'local : entraîné et mesuré sur mon Mac, sans cloud' },
            ].map((s) => (
              <div key={s.l} className="card" style={{ padding: 28 }}>
                <div className="stat__value serif" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--accent)' }}>{s.v}</div>
                <div className="stat__label" style={{ marginTop: 10, fontSize: 13.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Problème + approche */}
        <div className="grid-2" style={{ gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Le problème</div>
              <h3 className="h2" style={{ marginBottom: 20, fontSize: 'clamp(24px, 2.8vw, 34px)' }}>{ADA.problem.title}</h3>
              <p className="body-lg muted" style={{ marginBottom: 16 }}>{ADA.problem.body}</p>
              <p className="body-lg muted">{ADA.problem.body2}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>L'approche</div>
              <h3 className="h2" style={{ marginBottom: 20, fontSize: 'clamp(24px, 2.8vw, 34px)' }}>{ADA.approach.title}</h3>
              <p className="body-lg muted" style={{ marginBottom: 16 }}>{ADA.approach.body}</p>
              <p className="body-lg muted">{ADA.approach.body2}</p>
            </div>
          </Reveal>
        </div>

        {/* === TABLEAU 1 : perplexité === */}
        <Reveal>
          <div style={{ marginTop: 'clamp(64px, 9vh, 110px)' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Résultats mesurés · 1</div>
            <h3 className="h3" style={{ marginBottom: 10 }}>{ADA.perplexity.title}</h3>
            <p className="body-sm" style={{ marginBottom: 24, maxWidth: '68ch' }}>{ADA.perplexity.explanation}</p>

            <div className="glass" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--line-dark-strong)' }}>
                      <th style={{ textAlign: 'left', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Jeu de test</th>
                      <th style={{ textAlign: 'right', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>ADA au départ</th>
                      <th style={{ textAlign: 'right', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>ADA aujourd'hui</th>
                      <th style={{ textAlign: 'right', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Ornith (référence)</th>
                      <th style={{ textAlign: 'right', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Accord avec Ornith</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ADA.perplexity.rows.map((r, i) => (
                      <tr key={r.game} style={{ borderBottom: i < ADA.perplexity.rows.length - 1 ? '1px solid var(--line-dark)' : 'none' }}>
                        <td style={{ padding: '14px 20px', fontWeight: 500, fontSize: 15 }}>{r.game}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'right', color: 'var(--text-on-dark-muted)', fontSize: 15 }}>{r.adaStart ?? '—'}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'right', fontWeight: 600, fontSize: 17, color: 'var(--accent)' }}>{r.adaNow}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'right', fontSize: 15 }}>{r.ornith}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'right', color: 'var(--text-on-dark-muted)', fontSize: 15 }}>{r.agreement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="body-sm" style={{ marginTop: 14, maxWidth: '72ch' }}>{ADA.perplexity.note}</p>
          </div>
        </Reveal>

        {/* === TABLEAU 2 : mémoire — l'avantage === */}
        <Reveal>
          <div style={{ marginTop: 'clamp(56px, 8vh, 88px)' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Résultats mesurés · 2</div>
            <h3 className="h3" style={{ marginBottom: 10 }}>{ADA.memory.title}</h3>
            <p className="body-sm" style={{ marginBottom: 24, maxWidth: '68ch' }}>{ADA.memory.explanation}</p>

            <div className="card" style={{ borderColor: 'var(--accent-line)', background: 'var(--accent-soft)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(24px, 4vw, 48px)', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(64px, 8vw, 110px)', lineHeight: 1, color: 'var(--accent)' }}>{ADA.memory.factor}</div>
                  <div className="stat__label" style={{ marginTop: 8 }}>{ADA.memory.factorLabel}</div>
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid var(--accent-line)' }}>
                          <th style={{ textAlign: 'left', padding: '10px 12px', fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Contexte</th>
                          <th style={{ textAlign: 'right', padding: '10px 12px', fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Ornith</th>
                          <th style={{ textAlign: 'right', padding: '10px 12px', fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>ADA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ADA.memory.rows.map((r, i) => (
                          <tr key={r.context} style={{ borderBottom: i < ADA.memory.rows.length - 1 ? '1px solid rgba(232,179,57,0.15)' : 'none' }}>
                            <td style={{ padding: '12px', fontSize: 14.5, fontWeight: 500 }}>{r.context}</td>
                            <td style={{ padding: '12px', textAlign: 'right', fontSize: 14.5, color: 'var(--text-on-dark-muted)' }}>{r.ornith}</td>
                            <td style={{ padding: '12px', textAlign: 'right', fontSize: 15, fontWeight: 600, color: 'var(--accent)' }}>{r.ada}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p className="body-sm" style={{ marginTop: 18, opacity: 0.85 }}>{ADA.memory.note}</p>
            </div>
          </div>
        </Reveal>

        {/* === Point faible assumé === */}
        <Reveal>
          <div style={{ marginTop: 'clamp(56px, 8vh, 88px)' }}>
            <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--text-on-dark-muted)' }}>Résultats mesurés · 3</div>
            <h3 className="h3" style={{ marginBottom: 10 }}>{ADA.longContext.title}</h3>
            <p className="body-sm" style={{ marginBottom: 24, maxWidth: '68ch' }}>{ADA.longContext.explanation}</p>

            <div className="glass" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--line-dark-strong)' }}>
                      <th style={{ textAlign: 'left', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Longueur du contexte</th>
                      <th style={{ textAlign: 'right', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Gain ADA</th>
                      <th style={{ textAlign: 'right', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Gain Ornith</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ADA.longContext.rows.map((r, i) => (
                      <tr key={r.length} style={{ borderBottom: i < ADA.longContext.rows.length - 1 ? '1px solid var(--line-dark)' : 'none' }}>
                        <td style={{ padding: '14px 20px', fontWeight: 500, fontSize: 15 }}>{r.length}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'right', fontSize: 16, color: 'var(--text-on-dark-muted)' }}>{r.ada}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'right', fontSize: 16, fontWeight: 600 }}>{r.ornith}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="body-sm" style={{ marginTop: 14, maxWidth: '72ch' }}>{ADA.longContext.note}</p>
          </div>
        </Reveal>

        {/* === Code bench === */}
        <Reveal>
          <div style={{ marginTop: 'clamp(56px, 8vh, 88px)' }}>
            <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--text-on-dark-muted)' }}>Résultats mesurés · 4</div>
            <h3 className="h3" style={{ marginBottom: 10 }}>{ADA.code.title}</h3>
            <p className="body-sm" style={{ marginBottom: 24, maxWidth: '68ch' }}>{ADA.code.explanation}</p>

            <div className="grid-2" style={{ gap: 16, maxWidth: 760 }}>
              <div className="card" style={{ padding: 'clamp(24px, 3vw, 36px)' }}>
                <div className="stat__value serif" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(48px, 5vw, 72px)' }}>{ADA.code.adaScore}<span style={{ fontSize: '0.45em', color: 'var(--text-on-dark-muted)' }}>/{ADA.code.total}</span></div>
                <div className="stat__label">fonctions réussies par ADA</div>
                <div style={{ marginTop: 16, height: 8, borderRadius: 999, background: 'var(--line-dark)', overflow: 'hidden' }}>
                  <div style={{ width: `${(ADA.code.adaScore / ADA.code.total) * 100}%`, height: '100%', background: 'var(--accent)', borderRadius: 999 }} />
                </div>
              </div>
              <div className="card" style={{ padding: 'clamp(24px, 3vw, 36px)' }}>
                <div className="stat__value serif" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(48px, 5vw, 72px)' }}>{ADA.code.ornithScore}<span style={{ fontSize: '0.45em', color: 'var(--text-on-dark-muted)' }}>/{ADA.code.total}</span></div>
                <div className="stat__label">fonctions réussies par Ornith (référence)</div>
                <div style={{ marginTop: 16, height: 8, borderRadius: 999, background: 'var(--line-dark)', overflow: 'hidden' }}>
                  <div style={{ width: `${(ADA.code.ornithScore / ADA.code.total) * 100}%`, height: '100%', background: 'var(--text-on-dark-muted)', borderRadius: 999 }} />
                </div>
              </div>
            </div>
            <p className="body-sm" style={{ marginTop: 14, maxWidth: '72ch' }}>{ADA.code.note}</p>
          </div>
        </Reveal>

        {/* === Prévisions === */}
        <Reveal>
          <div style={{ marginTop: 'clamp(56px, 8vh, 88px)' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Où ça peut aller</div>
            <h3 className="h3" style={{ marginBottom: 10 }}>{ADA.forecast.title}</h3>
            <p className="body-sm" style={{ marginBottom: 24, maxWidth: '68ch' }}>{ADA.forecast.explanation}</p>

            <div className="glass" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--line-dark-strong)' }}>
                      <th style={{ textAlign: 'left', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Scénario</th>
                      <th style={{ textAlign: 'right', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Perplexité EVAL (fourchette)</th>
                      <th style={{ textAlign: 'right', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>Central</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ADA.forecast.rows.map((r, i) => (
                      <tr key={r.scenario} style={{ borderBottom: i < ADA.forecast.rows.length - 1 ? '1px solid var(--line-dark)' : 'none' }}>
                        <td style={{ padding: '14px 20px', fontWeight: 500, fontSize: 15 }}>{r.scenario}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'right', fontSize: 15, color: 'var(--text-on-dark-muted)' }}>{r.eval}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'right', fontWeight: 600, fontSize: 15, color: 'var(--accent)' }}>{r.central}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="body-sm" style={{ marginTop: 14, maxWidth: '72ch' }}>{ADA.forecast.note}</p>
          </div>
        </Reveal>

        {/* === Prochaines étapes === */}
        <Reveal>
          <div style={{ marginTop: 'clamp(56px, 8vh, 88px)' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Le plan</div>
            <h3 className="h3" style={{ marginBottom: 24 }}>Les prochaines étapes.</h3>
            <div className="grid-2" style={{ gap: 14 }}>
              {ADA.nextSteps.map((s, i) => (
                <div key={s} className="card" style={{ padding: 22, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span className="mono" style={{ color: 'var(--accent)', fontSize: 13, paddingTop: 2, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="body" style={{ fontSize: 15 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* === Honnêteté === */}
        <Reveal>
          <div className="glass" style={{ marginTop: 'clamp(56px, 8vh, 88px)', padding: 'clamp(28px, 4vw, 44px)', borderColor: 'var(--accent-line)', background: 'var(--accent-soft)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--accent)', color: 'var(--ink-900)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>
              </div>
              <div>
                <h4 className="h4" style={{ marginBottom: 10 }}>Ce que ce projet prouve — et ne prouve pas</h4>
                <p className="body" style={{ color: 'var(--text-on-dark)' }}>{ADA.honestNote}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <SourceNote ids={[]} />
        <div className="source-note">
          <span aria-hidden="true">↳</span>
          <span>
            Source : rapport « ADA 1.3 : où on en est, et où ça peut aller », instantané du 3 novembre 2026, mesuré en local.
            <a href="/media/ai/ada13-resultats.pdf" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Lire le rapport complet (PDF) ↗</a>
          </span>
        </div>
      </div>
    </section>
  );
}
