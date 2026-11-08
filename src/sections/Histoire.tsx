import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { TIMELINE } from '../data/timeline';

export function Histoire() {
  return (
    <section id="histoire" className="section section--light">
      <div className="wrap">
        <SectionHeader
          index="01"
          eyebrow="Mon histoire"
          title={<>Chaque souvenir m'a construit.</>}
          lead="Ce n'est pas une liste de projets : c'est l'histoire de comment chaque expérience — un poisson sur Scratch, une musique avec ma sœur, un site pour un client — m'a appris quelque chose de précis. Lisez-la comme la démonstration d'une progression."
          variant="light"
        />

        <div className="timeline">
          {TIMELINE.map((step, i) => (
            <Reveal key={step.id} delay={i * 40}>
              <div className="timeline__item">
                <span className="timeline__dot" />
                <span className="timeline__age">{step.age} · {step.period}</span>
                <h3 className="timeline__title">{step.title}</h3>
                <p className="lead" style={{ marginBottom: 18, color: 'var(--text-on-light)', maxWidth: '62ch' }}>{step.lead}</p>
                <p className="timeline__body">{step.body}</p>
                {step.body2 && (
                  <p className="timeline__body" style={{ marginTop: 14 }}>{step.body2}</p>
                )}

                {step.stats && (
                  <div className="timeline__stats">
                    {step.stats.map((s) => (
                      <div key={s.label}>
                        <span className="timeline__stat-value">{s.value}</span>
                        <span className="timeline__stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {step.media && (
                  <figure
                    className={`media-figure ${step.media.big ? 'media-figure--hero' : ''}`}
                    style={{
                      marginTop: 28,
                      maxWidth: step.media.ratio === '4 / 5' ? 560 : step.media.big ? 'none' : 720,
                      ['--ratio' as string]: step.media.ratio || '16 / 10',
                    }}
                  >
                    <img src={step.media.src} alt={step.media.alt} loading="lazy" />
                    <figcaption>
                      <span className="media-figure__caption">{step.media.caption}</span>
                    </figcaption>
                  </figure>
                )}

                {step.id === 'pc-family' && (
                  <div style={{ marginTop: 20, maxWidth: 860 }}>
                    <div className="eyebrow" style={{ marginBottom: 12 }}>La vidéo musicale</div>
                    <div className="video-embed">
                      <iframe
                        src="https://www.youtube.com/embed/D7k1HHcxBJI"
                        title="PC Family — la vidéo musicale créée avec ma sœur"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p className="body-sm" style={{ marginTop: 10 }}>
                      La musique créée avec ma sœur, au début de tout. <a href="https://www.youtube.com/watch?v=D7k1HHcxBJI" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent-line)' }}>Voir sur YouTube ↗</a>
                    </p>
                  </div>
                )}

                <div className="timeline__skill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Compétence démontrée — {step.skill}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass" style={{ marginTop: 'clamp(56px, 8vh, 96px)', padding: 'clamp(28px, 4vw, 40px)' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>À retenir</div>
            <p className="h4" style={{ fontWeight: 400, lineHeight: 1.5, maxWidth: '64ch' }}>
              Chaque souvenir est relié à une compétence. Rien de tout cela n'était programmé : c'est la somme de ces expériences — et de vos encouragements — qui m'amène aujourd'hui à vouloir choisir mes études avec sérieux. La suite de ce dossier montre ce que j'en ai construit.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
