/* PlayLoveToys storefront — Footer */
function Footer() {
  const cols = [
    { h: 'Shop', items: ['Vibrators', 'For Him', 'Couples', 'Wellness', 'Sale'] },
    { h: 'Help', items: ['Shipping & returns', 'Discreet packaging', 'Track order', 'Contact us'] },
    { h: 'About', items: ['Our story', 'Body-safe promise', 'Sustainability', 'Affiliates'] },
  ];
  return (
    <footer style={{ background: 'var(--plt-charcoal)', color: 'rgba(255,255,255,.82)' }}>
      <div className="b-container" style={{ padding: '52px 0 28px' }}>
        <div className="b-columns">
          <div className="b-column b-is-4">
            <img src="../../assets/logo/Logo-PlayLoveToys-3by2-800x534.png" alt="PlayLoveToys" style={{ height: '46px', filter: 'brightness(0) invert(1)', marginBottom: '14px' }} />
            <p style={{ fontSize: '14px', maxWidth: '300px', lineHeight: 1.6 }}>Body-safe pleasure toys for grown-ups who get it. Discreet, curated, refreshingly un-awkward.</p>
            <div className="b-tags" style={{ marginTop: '14px' }}>
              <span className="b-tag b-is-dark">18+</span>
              <span className="b-tag b-is-dark">Discreet</span>
              <span className="b-tag b-is-dark">Body-safe</span>
            </div>
          </div>
          {cols.map((c) => (
            <div className="b-column" key={c.h}>
              <p style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>{c.h}</p>
              {c.items.map((it) => (
                <a key={it} style={{ display: 'block', color: 'rgba(255,255,255,.78)', fontSize: '14px', padding: '4px 0', cursor: 'pointer' }}>{it}</a>
              ))}
            </div>
          ))}
          <div className="b-column b-is-3">
            <p style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>Get 15% off</p>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>Early drops & members-only deals.</p>
            <div className="b-field b-has-addons">
              <div className="b-control b-is-expanded"><input className="b-input b-is-small" placeholder="you@email.com" /></div>
              <div className="b-control"><button className="b-button b-is-link b-is-small">Join</button></div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.14)', marginTop: '36px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '13px', opacity: 0.7 }}>
          <span>© 2026 PlayLoveToys. All rights reserved.</span>
          <span>Privacy · Terms · Your privacy choices</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
