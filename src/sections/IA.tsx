import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { SourceNote } from '../components/SourceNote';

export function IA() {
  return (
    <section id="ia" className="section section--graphite">
      <div className="wrap">
        <SectionHeader
          index="03"
          eyebrow="L'intelligence artificielle"
          title={<>Une piste sérieuse, présentée avec rigueur.</>}
          lead="Je travaille sur des méthodes de traitement de longs contextes. Cette section explique le problème, l'approche, les résultats mesurés — et ce qu'il reste à valider. Aucune performance non vérifiée n'est présentée comme une supériorité démontrée."
        />

        {/* Le problème */}
        <div className="grid-2" style={{ gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Le problème</div>
              <h3 className="h2" style={{ marginBottom: 20 }}>Les modèles d'IA ont une limite : la fenêtre de contexte.</h3>
              <p className="body-lg muted" style={{ marginBottom: 16 }}>
                Un grand modèle de langagement traite un volume d'information limité à la fois. Cette limite est appelée la « fenêtre de contexte ». Quand on souhaite faire lire à un modèle des documents longs — un livre, un dossier technique, un corpus d'archives — on se heurte à cette contrainte.
              </p>
              <p className="body-lg muted">
                Le défi : permettre à un modèle de traiter des volumes importants de données sans perdre en cohérence, en précision, ni en rapidité.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>L'approche</div>
              <h3 className="h2" style={{ marginBottom: 20 }}>Une piste de traitement de longs contextes.</h3>
              <p className="body-lg muted" style={{ marginBottom: 16 }}>
                Je travaille sur une approche qui vise à traiter des volumes importants de données plus efficacement. L'objectif n'est pas de concurrencer les grands modèles industriels, mais d'explorer une méthode reproductible et mesurable.
              </p>
              <p className="body-lg muted">
                Tant que cette piste n'a pas été validée par des benchmarks reproductibles, elle reste un travail en cours — et c'est ainsi qu'elle doit être présentée.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Encadré de rigueur */}
        <Reveal>
          <div className="glass" style={{ marginTop: 'clamp(48px, 7vh, 80px)', padding: 'clamp(28px, 4vw, 44px)', borderColor: 'var(--accent-line)', background: 'var(--accent-soft)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--accent)', color: 'var(--ink-900)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>
              </div>
              <div>
                <h4 className="h4" style={{ marginBottom: 10 }}>Ce qui est affirmé, et ce qui ne l'est pas</h4>
                <p className="body" style={{ color: 'var(--text-on-dark)' }}>
                  Je peux affirmer : je travaille sur ce sujet, j'ai des résultats intermédiaires, et je continue de développer cette piste.
                  <br />
                  Je ne peux pas affirmer : qu'il s'agit d'une supériorité démontrée sur les autres IA, ni que la performance annoncée est validée. Cette étape exige des benchmarks reproductibles, conduits avec un protocole public, comparés à des références existantes.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Méthode en 4 temps */}
        <Reveal>
          <h3 className="h3" style={{ marginTop: 'clamp(64px, 9vh, 110px)', marginBottom: 32 }}>La démarche, en quatre temps.</h3>
        </Reveal>

        <div className="grid-4" style={{ gap: 16 }}>
          {[
            { n: '01', t: 'Le problème technique', d: 'Caractériser précisément la limite de contexte que l\'on cherche à dépasser. Sans problème bien posé, pas de mesure fiable.' },
            { n: '02', t: 'L\'approche développée', d: 'Décrire la méthode, les choix techniques, les hypothèses. Documenter pour que d\'autres puissent reproduire.' },
            { n: '03', t: 'Les résultats mesurés', d: 'Mesurer avec un protocole clair : quels volumes, quels temps, quelle cohérence. Comparer à des références publiques.' },
            { n: '04', t: 'Les prochaines étapes', d: 'Itérer. Corriger. Publier les résultats reproductibles. Puis, seulement, tirer des conclusions.' },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="card" style={{ padding: 24, height: '100%' }}>
                <div className="mono text-accent" style={{ fontSize: 12, letterSpacing: '0.1em', marginBottom: 14 }}>{s.n}</div>
                <h4 className="h4" style={{ fontSize: 17, marginBottom: 10 }}>{s.t}</h4>
                <p className="body-sm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Démonstration */}
        <Reveal>
          <div style={{ marginTop: 'clamp(56px, 8vh, 96px)' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Démonstration</div>
            <h3 className="h3" style={{ marginBottom: 24 }}>Une capture vaut mieux qu'une promesse.</h3>
            <MediaPlaceholder
              label="Projet IA — démonstration technique"
              desc="Architecture, captures des tests de lecture de longs documents, vidéo de démonstration. À fournir. Tant que les benchmarks reproductibles ne sont pas publiés, cette section reste présentée comme un travail en cours."
              ratio="16 / 9"
            />
          </div>
        </Reveal>

        {/* Ce que ça prouve, ce que ça ne prouve pas */}
        <Reveal>
          <div className="grid-2" style={{ marginTop: 'clamp(56px, 8vh, 96px)', gap: 20 }}>
            <div className="card" style={{ borderColor: 'var(--accent-line)' }}>
              <div className="eyebrow" style={{ marginBottom: 14, color: 'var(--accent)' }}>Ce que ça prouve</div>
              <ul className="list-clean">
                <li>Capacité à travailler sur un problème technique réel et difficile</li>
                <li>Autonomie dans la recherche et le développement</li>
                <li>Conscience de la nécessité de mesurer et de comparer</li>
                <li>Rigueur : refuser de présenter comme démontrée ce qui ne l'est pas encore</li>
              </ul>
            </div>
            <div className="card">
              <div className="eyebrow" style={{ marginBottom: 14 }}>Ce que ça ne prouve pas</div>
              <ul className="list-clean">
                <li>Une supériorité démontrée sur les autres IA</li>
                <li>Une performance validée par benchmarks reproductibles</li>
                <li>Un produit commercialisable en l'état</li>
                <li>Un modèle économique établi</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <SourceNote ids={['ecole42']} />
      </div>
    </section>
  );
}
