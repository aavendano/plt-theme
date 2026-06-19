/* PlayLoveToys storefront — Home screen */
function HomeScreen({ onShop, onProduct, onAdd }) {
  const { ProductCard } = window.PlayLoveToysDesignSystem_88998d;
  const featured = window.PLT_PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section style={{ background: 'var(--plt-gradient)', color: '#fff', padding: '72px 0' }}>
        <div className="b-container">
          <div className="b-columns b-is-vcentered">
            <div className="b-column b-is-7">
              <span className="b-tag b-is-link" style={{ marginBottom: '18px' }}>New season drop</span>
              <h1 style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 700, fontSize: '64px', lineHeight: 1.02, margin: '0 0 18px', letterSpacing: '-0.01em' }}>
                Play more.<br />Love louder.
              </h1>
              <p style={{ fontSize: '19px', maxWidth: '440px', opacity: 0.92, margin: '0 0 28px' }}>
                Body-safe pleasure toys for grown-ups who get it. Curated, discreet, and refreshingly un-awkward.
              </p>
              <div className="b-buttons">
                <button className="b-button b-is-link b-is-large b-is-rounded" onClick={onShop}>Shop the drop</button>
                <button className="b-button b-is-large b-is-rounded b-is-inverted b-is-outlined" onClick={onShop} style={{ color: '#fff', borderColor: 'rgba(255,255,255,.6)' }}>Best sellers</button>
              </div>
            </div>
            <div className="b-column b-is-5">
              <div style={{ aspectRatio: '4/3', borderRadius: 'var(--plt-radius-xl)', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="../../assets/logo/Logo-PlayLoveToys-3by2-800x534.png" alt="" style={{ width: '70%', filter: 'brightness(0) invert(1)', opacity: 0.95 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ background: 'var(--plt-charcoal)', color: '#fff' }}>
        <div className="b-container">
          <div className="b-columns b-is-mobile b-has-text-centered" style={{ padding: '14px 0' }}>
            {['Discreet plain packaging', '100% body-safe materials', 'Free shipping over $59', '30-day happiness guarantee'].map((t) => (
              <div className="b-column" key={t} style={{ fontSize: '13.5px', fontWeight: 600, opacity: 0.9 }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="b-section">
        <div className="b-container">
          <h2 style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 600, fontSize: '32px', color: 'var(--plt-text-strong)', margin: '0 0 22px' }}>Shop by category</h2>
          <div className="b-columns b-is-multiline">
            {window.PLT_CATEGORIES.map((c) => (
              <div className="b-column b-is-3" key={c.name}>
                <a onClick={onShop} style={{ display: 'block', cursor: 'pointer', borderRadius: 'var(--plt-radius-lg)', overflow: 'hidden', border: '1px solid var(--plt-line)' }}>
                  <div style={{ height: '150px', background: c.bg }} />
                  <div style={{ padding: '14px 16px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700, color: 'var(--plt-text-strong)', fontSize: '17px' }}>{c.name}</span>
                    <span style={{ color: c.accent, fontWeight: 700 }}>→</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SHELF */}
      <section className="b-section" style={{ background: 'var(--plt-paper)', paddingTop: '2rem' }}>
        <div className="b-container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '22px' }}>
            <h2 style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 600, fontSize: '32px', color: 'var(--plt-text-strong)', margin: 0 }}>Best sellers</h2>
            <a onClick={onShop} className="b-has-text-link" style={{ cursor: 'pointer', fontWeight: 700 }}>View all →</a>
          </div>
          <div className="b-columns b-is-multiline">
            {featured.map((p) => (
              <div className="b-column b-is-3" key={p.id}>
                <ProductCard
                  vendor={p.vendor} title={p.title} rating={p.rating} reviewCount={p.reviews}
                  price={p.price} compareAt={p.compareAt} saveLabel={p.save}
                  badge={p.badge} badgeColor={p.badgeColor} imageBg={p.bg}
                  onAdd={() => onAdd(p)} onOpen={() => onProduct(p)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE BANNER */}
      <section className="b-section">
        <div className="b-container">
          <div style={{ background: 'var(--plt-gradient-warm)', borderRadius: 'var(--plt-radius-xl)', padding: '46px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 700, fontSize: '30px', margin: '0 0 6px' }}>First order? Take 15% off.</h3>
              <p style={{ margin: 0, opacity: 0.92, fontSize: '16px' }}>Join the club for early drops and members-only deals.</p>
            </div>
            <button className="b-button b-is-large b-is-rounded" style={{ background: '#fff', color: 'var(--plt-pink-deep)', fontWeight: 700 }} onClick={onShop}>Get my code</button>
          </div>
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
