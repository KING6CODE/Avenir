import { Reveal } from '../components/Reveal';

export function Lettre() {
  return (
    <section id="lettre" className="section section--dark" style={{ position: 'relative' }}>
      <div className="hero-grain" aria-hidden="true" />
      <div className="wrap wrap-narrow">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="mono" style={{ color: 'var(--text-on-dark-faint)' }}>07</span>
            <span style={{ opacity: 0.4 }}>·</span>
            Lettre à mes parents
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="serif italic" style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--text-on-dark-muted)', marginBottom: 48 }}>
            Papa, Maman,
          </p>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 4vh, 40px)' }}>
          <Reveal>
            <p className="h3" style={{ fontWeight: 400, fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.4, letterSpacing: '-0.01em' }}>
              Je sais que ce dossier peut surprendre. Vous ne vous attendiez pas à ce que votre fils de 16 ans vous présente un document aussi construit. C'est précisément pour cela que je l'ai fait.
            </p>
          </Reveal>

          <Reveal>
            <p className="body-lg" style={{ fontSize: 19, lineHeight: 1.7 }}>
              Vous m'avez appris la valeur des études. Vous m'avez transmis le respect du travail, de la rigueur, de l'effort soutenu. Rien de ce que vous lirez ici ne renie cet héritage. Au contraire : ce dossier existe parce que je prends au sérieux ce que vous m'avez appris.
            </p>
          </Reveal>

          <Reveal>
            <p className="body-lg" style={{ fontSize: 19, lineHeight: 1.7 }}>
              Je ne vous demande pas de m'autoriser à abandonner les études. Je ne le veux pas. Je vous demande de comprendre que <strong className="text-accent">le choix d'une formation n'est pas neutre</strong>. Certaines formations me permettront de continuer à construire en parallèle. D'autres me demanderont de mettre mes projets entre parenthèses pendant cinq ans. Ce n'est pas la même chose.
            </p>
          </Reveal>

          <Reveal>
            <p className="body-lg" style={{ fontSize: 19, lineHeight: 1.7 }}>
              Ce que j'ai construit depuis mes 10 ans — les chaînes, les sites, l'application, les projets d'IA — n'est pas un hobby. C'est un apprentissage continu. Chaque projet m'a appris quelque chose que aucun cours ne m'aurait appris au même âge. Et chaque échec m'a appris davantage que chaque succès.
            </p>
          </Reveal>

          <Reveal>
            <p className="body-lg" style={{ fontSize: 19, lineHeight: 1.7 }}>
              Je sais aussi que vous vous inquiétez. De ma fatigue, de mon équilibre, de mon avenir. Vous avez raison de vous inquiéter : un adolescent qui veut tout faire en même temps s'expose à tout rater. C'est pour cela que je veux choisir une formation qui <strong>cadre</strong> mon ambition, plutôt qu'une formation qui l'<strong>étouffe</strong>.
            </p>
          </Reveal>

          <Reveal>
            <p className="body-lg" style={{ fontSize: 19, lineHeight: 1.7 }}>
              Les écoles que je présente dans ce dossier ne sont pas des raccourcis. Albert School délivre un grade de master. Epitech délivre un diplôme visé par l'État. 42 délivre des titres RNCP reconnus. Aucune n'est une voie de garage. Toutes ouvrent des droits, des débouchés, des perspectives. Le débat n'est pas entre études et entrepreneuriat — il est sur <strong className="text-accent">la formation qui me permettra de faire les deux sérieusement</strong>.
            </p>
          </Reveal>

          <Reveal>
            <p className="body-lg" style={{ fontSize: 19, lineHeight: 1.7 }}>
              Je ne vous demande pas une réponse immédiate. Je vous demande de lire ce dossier, de vérifier les sources, de me poser vos questions. Je vous demande aussi de me faire confiance — pas sur mes affirmations, mais sur ma méthode. J'ai appris, en construisant ce dossier, que la rigueur et la transparence valent mieux que la promesse.
            </p>
          </Reveal>

          <Reveal>
            <p className="body-lg" style={{ fontSize: 19, lineHeight: 1.7 }}>
              Et je veux que vous soyez fiers. Pas parce que j'aurais réussi quelque chose d'exceptionnel à 16 ans — mais parce que j'aurais appris, avec ce que vous m'avez transmis, à prendre mes décisions sérieusement. C'est cela, l'objectif.
            </p>
          </Reveal>

          <Reveal>
            <p className="serif italic" style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', marginTop: 24, color: 'var(--text-on-dark)' }}>
              Je ne veux pas choisir entre étudier et entreprendre. Je veux choisir une formation qui me permette de développer les deux.
            </p>
          </Reveal>

          <Reveal>
            <p className="body-lg" style={{ fontSize: 19, lineHeight: 1.7, marginTop: 8 }}>
              Merci de m'avoir lu jusqu'ici.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 16, paddingTop: 32, borderTop: '1px solid var(--line-dark)' }}>
              <p className="serif" style={{ fontSize: 22 }}>Alistair</p>
              <p className="mono" style={{ fontSize: 12, color: 'var(--text-on-dark-faint)', letterSpacing: '0.08em', marginTop: 6, textTransform: 'uppercase' }}>Novembre 2026 · Dossier familial AVENIR</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
