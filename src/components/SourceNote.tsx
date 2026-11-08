import { source } from '../data/sources';

// Note de source — small footnote under sourced claims
export function SourceNote({ ids }: { ids: string[] }) {
  const items = ids.map((id) => source(id)).filter(Boolean);
  if (items.length === 0) return null;
  return (
    <div className="source-note">
      <span aria-hidden="true">↳</span>
      <span>
        Source{items.length > 1 ? 's' : ''} :{' '}
        {items.map((s, i) => (
          <span key={s!.id}>
            <a href={s!.url} target="_blank" rel="noopener noreferrer">{s!.publisher}</a>
            {i < items.length - 1 ? ' · ' : ''}
          </span>
        ))}
        <span style={{ marginLeft: 8, opacity: 0.7 }}>— consulté le 08/11/2026</span>
      </span>
    </div>
  );
}
