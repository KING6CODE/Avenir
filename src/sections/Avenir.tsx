import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { SourceNote } from '../components/SourceNote';

const PHASES = [
  {
    n: '01',
    period: 'Bac — 2027',
    title: 'Obtenir le bac avec un dossier solide.',
    body: 'Le bac reste la condition d\'entrée dans toutes les formations que je vise. Mon objectif : le réussir avec un niveau qui ne ferme aucune porte, notamment en mathématiques et en spécialités utiles.',
    points: ['Réussir les épreuves du bac', 'Construire un dossier Parcoursup cohérent', 'Continuer mes projets en parallèle'],
  },
  {
    n: '02',
    period: 'Études supérieures — 2027 à 2030',
    title: 'Choisir une formation qui combine technique et business.',
    body: 'Mon ordre de préférence actuel : Albert School (Bachelor puis MSc), puis Epitech, puis 42. Ce choix n\'est pas définitif : il dépendra des admissions, des conditions financières et de ce que j\'aurai appris d\'ici là.',
    points: ['Bachelor en business, data et IA', 'Poursuite en MSc grade de master', 'Alternance pour financer et apprendre en situation réelle'],
  },
  {
    n: '03',
    period: 'Pendant les études — dès la première année',
    title: 'Continuer à construire, pas seulement à étudier.',
    body: 'Je veux utiliser mes années d\'études pour développer des projets, mesurer des résultats, rencontrer des entrepreneurs. Le Statut National Étudiant-Entrepreneur (SNEE) est une porte d\'entrée concrète, dès l\'inscription dans le supérieur.',
    points: ['Demande du SNEE dès l\'éligibilité', 'Poursuite des projets IA et produits', 'Premières expériences en incubateur étudiant (Pépite)'],
  },
  {
    n: '04',
    period: 'Expérience professionnelle — intégrée aux études',
    title: 'Stages, alternance, premières missions réelles.',
    body: 'L\'alternance et les stages ne sont pas des pauses : ce sont des accélérateurs. L\'Onisep indique qu\'une part significative des premiers emplois d\'ingénieurs s\'obtient par le stage de fin d\'études ou l\'apprentissage, souvent dans l\'entreprise qui a formé le diplômé.',
    points: ['Alternance en lien avec mon projet', 'Stages dans des startups ou des tech', 'Construction d\'un réseau professionnel réel'],
  },
  {
    n: '05',
    period: 'Incubation — quand le projet est mûr',
    title: 'Candidater à un incubateur, le moment venu.',
    body: 'L\'incubation n\'est pas une étape automatique : elle se mérite par un dossier solide. X-UP, Agoranov, le HEC Incubateur ou les programmes de Station F seront des cibles quand mon projet aura atteint la maturité requise. Aucun de ces dispositifs ne s\'obtient par simple inscription.',
    points: ['Candidature à un Pépite en premier lieu', 'Puis, si le projet le justifie, à un incubateur deeptech', 'Préparation du dossier et du mentorat en amont'],
  },
  {
    n: '06',
    period: 'Après les études — à partir de 2032',
    title: 'Créer, ou rejoindre une entreprise tech.',
    body: 'À la fin de mes études, je veux sortir avec trois choses : un diplôme reconnu, des années d\'expérience réelle, et un projet entrepreneurial avancé. La création d\'entreprise n\'est pas garantie — c\'est une possibilité que je prépare, pas une certitude que je revendique.',
    points: ['Diplôme de niveau master (grade de master ou équivalent)', 'Expérience professionnelle cumulée', 'Décision : créer, ou rejoindre une équipe tech'],
  },
];

export function Avenir() {
  return (
    <section id="avenir" className="section section--light-2">
      <div className="wrap">
        <SectionHeader
          index="06"
          eyebrow="Mon projet d'avenir"
          title={<>Un parcours cohérent, pas un pari.</>}
          lead="Voici la trajectoire que je veux construire. Elle n'affirme pas que le succès est garanti — elle explique comment je veux utiliser mes études pour maximiser mes chances, sans négliger le diplôme ni l'expérience."
          variant="light"
        />

        {/* Schéma global */}
        <Reveal>
          <div className="glass" style={{ padding: 'clamp(28px, 4vw, 44px)', marginBottom: 'clamp(56px, 8vh, 96px)' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>La logique d'ensemble</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {[
                { t: 'Formation technique', d: 'Apprendre à construire une technologie', icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
                { t: 'Projet entrepreneurial', d: 'Transformer une compétence en valeur réelle', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' },
                { t: 'Écosystème', d: 'Être accompagné, rencontrer les bonnes personnes', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
                { t: 'Entreprise ou carrière tech', d: 'Créer, ou rejoindre une équipe', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
              ].map((s, i) => (
                <div key={s.t} style={{ padding: 20, borderRight: i < 3 ? '1px solid var(--line-light)' : 'none' }}>
                  <div style={{ width: 32, height: 32, color: 'var(--accent)', marginBottom: 14 }}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon} /></svg>
                  </div>
                  <h4 className="h4" style={{ fontSize: 16, marginBottom: 6 }}>{s.t}</h4>
                  <p className="body-sm" style={{ color: 'var(--text-on-light-muted)' }}>{s.d}</p>
                  {i < 3 && (
                    <div style={{ marginTop: 14, color: 'var(--text-on-light-faint)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Phases */}
        <div className="timeline">
          {PHASES.map((p) => (
            <Reveal key={p.n}>
              <div className="timeline__item timeline__item--active">
                <span className="timeline__dot" />
                <span className="timeline__age">Phase {p.n} · {p.period}</span>
                <h3 className="timeline__title">{p.title}</h3>
                <p className="timeline__body" style={{ color: 'var(--text-on-light-muted)', maxWidth: '60ch' }}>{p.body}</p>
                <ul className="list-clean" style={{ marginTop: 20, maxWidth: '60ch' }}>
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Sécurité financière */}
        <Reveal>
          <div style={{ marginTop: 'clamp(64px, 9vh, 110px)' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>La sécurité financière</div>
            <h3 className="h2" style={{ maxWidth: '22ch', marginBottom: 24 }}>Un diplôme reconnu, et des débouchés réels.</h3>
            <div className="grid-3" style={{ gap: 20 }}>
              <div className="card" style={{ background: '#fff' }}>
                <div className="stat">
                  <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-on-light)' }}>39 129 €</span>
                  <span className="stat__label">salaire brut moyen hors primes des jeunes ingénieurs diplômés (CGE 2025)</span>
                </div>
              </div>
              <div className="card" style={{ background: '#fff' }}>
                <div className="stat">
                  <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-on-light)' }}>41 103 €</span>
                  <span className="stat__label">salaire brut moyen hors primes des jeunes managers diplômés (CGE 2025)</span>
                </div>
              </div>
              <div className="card" style={{ background: '#fff' }}>
                <div className="stat">
                  <span className="stat__value serif" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-on-light)' }}>&gt; 89 %</span>
                  <span className="stat__label">taux net d\'emploi des jeunes ingénieurs à 12-18 mois (CGE 2025)</span>
                </div>
              </div>
            </div>
            <p className="body-sm" style={{ marginTop: 20, maxWidth: '70ch' }}>
              Ces chiffres concernent les diplômés des écoles membres de la Conférence des Grandes Écoles. Ils ne s'appliquent pas automatiquement à Epitech, Albert School ou 42 — mais ils montrent que le choix d'une formation supérieure reconnue reste un filet de sécurité réel.
            </p>
            <SourceNote ids={['cge-2025', 'onisep-insertion']} />
          </div>
        </Reveal>

        {/* Ce qui n'est pas garanti */}
        <Reveal>
          <div className="glass" style={{ marginTop: 'clamp(56px, 8vh, 96px)', padding: 'clamp(28px, 4vw, 40px)', background: 'var(--ink-900)', color: 'var(--text-on-dark)', borderColor: 'var(--line-dark)' }}>
            <div className="eyebrow" style={{ marginBottom: 16, color: 'var(--accent)' }}>Ce que je ne promets pas</div>
            <div className="grid-2" style={{ gap: 28 }}>
              <div>
                <h4 className="h4" style={{ fontSize: 18, marginBottom: 10 }}>Le succès entrepreneurial</h4>
                <p className="body-sm">Aucune formation, aucun incubateur, aucun réseau ne garantit la réussite d'une entreprise. Ce que je peux construire : des compétences, une expérience, un réseau. La réussite viendra — ou ne viendra pas — du travail et du marché.</p>
              </div>
              <div>
                <h4 className="h4" style={{ fontSize: 18, marginBottom: 10 }}>Une trajectoire linéaire</h4>
                <p className="body-sm">Ce plan est une direction, pas un calendrier. Des ajustements seront nécessaires. Ce que je vous promets, c'est la transparence sur les décisions, et le refus de présenter comme acquise ce qui ne l'est pas.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
