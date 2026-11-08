import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { VideoPending } from '../components/VideoPending';
import { TIMELINE } from '../data/timeline';

export function Histoire() {
  return (
    <section id="histoire" className="section section--light">
      <div className="wrap">
        <SectionHeader
          index="01"
          eyebrow="Mon histoire"
          title={<>Une frise, et non une liste de souvenirs.</>}
          lead="Chaque étape de mon parcours est reliée à une compétence réelle. Ce n'est pas une chronologie décorative : c'est la démonstration progressive de ce que j'ai construit, et de ce que chaque expérience m'a appris."
          variant="light"
        />

        <div className="timeline">
          {TIMELINE.map((step, i) => (
            <Reveal key={step.id} delay={i * 40}>
              <div className="timeline__item">
                <span className="timeline__dot" />
                <span className="timeline__age">{step.age} · {step.period}</span>
                <h3 className="timeline__title">{step.title}</h3>
                <p className="lead" style={{ marginBottom: 18, color: 'var(--text-on-light)', maxWidth: '60ch' }}>{step.lead}</p>
                <p className="timeline__body">{step.body}</p>

                {step.media && (
                  <div style={{ marginTop: 28, maxWidth: 640 }}>
                    <MediaPlaceholder
                      label={step.media.placeholder}
                      desc={step.media.desc}
                      ratio={step.media.ratio || '16 / 10'}
                      variant="light"
                    />
                  </div>
                )}

                {step.id === 'pc-family' && (
                  <div style={{ marginTop: 16, maxWidth: 640 }}>
                    <VideoPending
                      title="Vidéo musicale PC Family"
                      note="Créée avec ma sœur. Lien à intégrer dès récupération — aucun lien inventé."
                    />
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
              Chaque souvenir est relié à une compétence. Ce n'est pas une collection d'anecdotes : c'est la démonstration qu'à chaque étape, j'ai transformé une expérience en capacité réelle. C'est cette même logique que je veux appliquer à mes études supérieures.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
