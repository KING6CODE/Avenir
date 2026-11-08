// Emplacement élégant pour une vidéo à retrouver
// Spécifiquement pour la vidéo musicale PC Family, dont l'URL n'est pas encore connue.
// Aucun lien n'est inventé.

export function VideoPending({ title, note }: { title: string; note: string }) {
  return (
    <div
      className="video-pending"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: 'var(--r-md)',
        background: 'linear-gradient(135deg, var(--ink-700) 0%, var(--ink-800) 100%)',
        border: '1px solid var(--accent-line)',
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {/* grain */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          background:
            'radial-gradient(circle at 30% 40%, rgba(232,179,57,0.08), transparent 50%), radial-gradient(circle at 70% 60%, rgba(232,179,57,0.05), transparent 50%)',
        }}
      />
      <div style={{ position: 'relative', textAlign: 'center', padding: 24, zIndex: 1 }}>
        <div
          style={{
            width: 64,
            height: 64,
            margin: '0 auto 18px',
            borderRadius: '50%',
            border: '1px solid var(--accent-line)',
            background: 'var(--accent-soft)',
            display: 'grid',
            placeItems: 'center',
            color: 'var(--accent)',
          }}
          aria-hidden="true"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div
          className="mono"
          style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}
        >
          Vidéo à retrouver
        </div>
        <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--text-on-dark)', marginBottom: 6 }}>{title}</div>
        <div style={{ fontSize: 13.5, color: 'var(--text-on-dark-muted)', maxWidth: 360, margin: '0 auto' }}>{note}</div>
      </div>
    </div>
  );
}
