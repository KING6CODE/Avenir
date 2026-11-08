// Composant média unifié :
// - si `src` est fourni → affiche une vraie <img>
// - sinon → affiche un placeholder clairement identifié "à fournir"

export function MediaPlaceholder({
  label,
  desc,
  ratio = '16 / 10',
  variant = 'dark',
  src,
  alt,
  caption,
  sourceLabel,
}: {
  label: string;
  desc?: string;
  ratio?: string;
  variant?: 'dark' | 'light';
  src?: string;
  alt?: string;
  caption?: string;
  sourceLabel?: string;
}) {
  // Cas 1 : une vraie image est fournie
  if (src) {
    return (
      <figure
        className={`media-figure media-figure--${variant}`}
        style={{ ['--ratio' as string]: ratio }}
      >
        <img src={src} alt={alt || label} loading="lazy" />
        {(caption || sourceLabel) && (
          <figcaption>
            {caption && <span className="media-figure__caption">{caption}</span>}
            {sourceLabel && <span className="media-figure__source">{sourceLabel}</span>}
          </figcaption>
        )}
      </figure>
    );
  }

  // Cas 2 : emplacement à fournir
  return (
    <div
      className={`media-placeholder ${variant === 'light' ? 'media-placeholder--light' : ''}`}
      style={{ ['--ratio' as string]: ratio }}
      role="img"
      aria-label={label}
    >
      <div className="media-placeholder__inner">
        <div className="media-placeholder__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <div className="media-placeholder__label">{label}</div>
        {desc && <div className="media-placeholder__desc">{desc}</div>}
      </div>
    </div>
  );
}
