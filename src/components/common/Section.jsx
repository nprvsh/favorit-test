export default function Section({ id, title, subtitle, aside, children }) {
  return (
    <section aria-labelledby={id}>
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-2">
        <div>
          <h2 id={id} className="section-title mb-0">
            {title}
          </h2>
          {subtitle && (
            <div className="small text-secondary mt-1" aria-live="polite">
              {subtitle}
            </div>
          )}
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}
