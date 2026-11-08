import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

// En-tête de section — eyebrow, titre, lead
export function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  align = 'left',
  variant = 'dark',
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  variant?: 'dark' | 'light';
}) {
  return (
    <div
      className={`section-header section-header--${align}`}
      style={{ marginBottom: 'clamp(48px, 7vh, 88px)' }}
    >
      <Reveal>
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          {index && <span className="mono" style={{ color: variant === 'dark' ? 'var(--text-on-dark-faint)' : 'var(--text-on-light-faint)' }}>{index}</span>}
          {index && <span style={{ opacity: 0.4 }}>·</span>}
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="h1" style={{ maxWidth: align === 'center' ? '20ch' : '16ch', marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className="lead muted" style={{ marginTop: 24, maxWidth: align === 'center' ? '60ch' : '52ch', marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
