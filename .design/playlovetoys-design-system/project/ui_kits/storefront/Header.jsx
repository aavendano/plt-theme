/* PlayLoveToys storefront — Header (navbar + mega menu + search + cart) */
function Header({ cartCount, onNav, onCart, active }) {
  const [mega, setMega] = React.useState(false);
  const link = (key, label) => (
    <a
      className={'b-navbar-item' + (active === key ? ' b-is-active' : '')}
      onClick={() => onNav(key)}
      style={{ cursor: 'pointer', fontWeight: 600 }}
    >
      {label}
    </a>
  );
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30 }}>
      {/* announcement bar */}
      <div style={{ background: 'var(--plt-gradient)', color: '#fff', textAlign: 'center', fontSize: '13px', fontWeight: 600, padding: '7px 16px', letterSpacing: '.02em' }}>
        Free discreet shipping over $59 · Plain packaging, always
      </div>

      <nav className="b-navbar" role="navigation" style={{ background: '#fff', borderBottom: '1px solid var(--plt-line)' }}>
        <div className="b-navbar-brand" style={{ alignItems: 'center' }}>
          <a className="b-navbar-item" onClick={() => onNav('home')} style={{ cursor: 'pointer' }}>
            <img src="../../assets/logo/Logo-PlayLoveToys-3by2-800x534.png" alt="PlayLoveToys" style={{ maxHeight: '40px' }} />
          </a>
        </div>

        <div className="b-navbar-menu b-is-active" style={{ boxShadow: 'none' }}>
          <div className="b-navbar-start" style={{ alignItems: 'center', marginLeft: '1rem' }}>
            <div
              className="b-navbar-item"
              style={{ position: 'relative', cursor: 'pointer', fontWeight: 600 }}
              onMouseEnter={() => setMega(true)}
              onMouseLeave={() => setMega(false)}
            >
              <a className={'b-navbar-item' + (active === 'collection' ? ' b-is-active' : '')} onClick={() => onNav('collection')} style={{ padding: 0 }}>
                Shop ▾
              </a>
              {mega && <MegaMenu onPick={() => { setMega(false); onNav('collection'); }} />}
            </div>
            {link('collection', 'New')}
            {link('collection', 'Best Sellers')}
            <a className="b-navbar-item b-has-text-link" style={{ cursor: 'pointer', fontWeight: 700 }} onClick={() => onNav('collection')}>Sale</a>
          </div>

          <div className="b-navbar-end" style={{ alignItems: 'center' }}>
            <div className="b-navbar-item" style={{ minWidth: '230px' }}>
              <div className="b-control">
                <input className="b-input b-is-rounded b-is-small" placeholder="Search toys, brands…" />
              </div>
            </div>
            <a className="b-navbar-item" style={{ cursor: 'pointer' }} title="Account">
              <img src="../../assets/icons/icon-person.svg" alt="Account" style={{ width: '22px', height: '22px' }} />
            </a>
            <a className="b-navbar-item" style={{ cursor: 'pointer', position: 'relative' }} onClick={onCart} title="Cart">
              <img src="../../assets/icons/icon-cart.svg" alt="Cart" style={{ width: '24px', height: '24px' }} />
              {cartCount > 0 && (
                <span className="b-badge-pill-link" style={{ position: 'absolute', top: '6px', right: '2px', fontSize: '10px', padding: '1px 7px' }}>{cartCount}</span>
              )}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function MegaMenu({ onPick }) {
  const cols = [
    { h: 'Vibrators', items: ['Rabbit', 'Wand', 'Bullet', 'G-Spot'] },
    { h: 'For Him', items: ['Masturbators', 'Cock Rings', 'Sleeves', 'Prostate'] },
    { h: 'Couples', items: ['Games', 'Bondage', 'Kits', 'Remote Control'] },
    { h: 'Wellness', items: ['Lubricants', 'Toy Cleaner', 'Massage', 'Arousal'] },
  ];
  return (
    <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', borderRadius: 'var(--plt-radius-lg)', boxShadow: 'var(--plt-shadow-lg)', padding: '22px 26px', display: 'grid', gridTemplateColumns: 'repeat(4,160px)', gap: '22px', border: '1px solid var(--plt-line)' }}>
      {cols.map((c) => (
        <div key={c.h}>
          <p style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 600, color: 'var(--plt-purple)', margin: '0 0 8px', fontSize: '15px' }}>{c.h}</p>
          {c.items.map((it) => (
            <a key={it} onClick={onPick} style={{ display: 'block', padding: '4px 0', color: 'var(--plt-text)', fontSize: '14px', cursor: 'pointer' }}>{it}</a>
          ))}
        </div>
      ))}
    </div>
  );
}

window.Header = Header;
