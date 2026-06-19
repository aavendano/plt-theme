/* PlayLoveToys storefront — Product detail screen */
function ProductScreen({ product, onAdd, onShop, onProduct }) {
  const { ProductCard, StarRating, PriceTag, Field, Select, Tag } = window.PlayLoveToysDesignSystem_88998d;
  const p = product || window.PLT_PRODUCTS[0];
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('desc');
  const related = window.PLT_PRODUCTS.filter((x) => x.id !== p.id).slice(0, 4);

  return (
    <section className="b-section">
      <div className="b-container">
        <nav className="b-breadcrumb" aria-label="breadcrumbs" style={{ marginBottom: '18px' }}>
          <ul>
            <li><a onClick={onShop} style={{ cursor: 'pointer' }}>Home</a></li>
            <li><a onClick={onShop} style={{ cursor: 'pointer' }}>{p.cat}</a></li>
            <li className="b-is-active"><a aria-current="page">{p.title}</a></li>
          </ul>
        </nav>

        <div className="b-columns">
          {/* Gallery */}
          <div className="b-column b-is-6">
            <div className="b-has-image-overlay" style={{ borderRadius: 'var(--plt-radius-xl)', overflow: 'hidden' }}>
              <div style={{ aspectRatio: '1/1', background: p.bg }} />
              {p.badge && <span className={`b-badge-${p.badgeColor} b-tag-top-left`} style={{ margin: '14px' }}>{p.badge}</span>}
            </div>
            <div className="b-columns b-is-mobile" style={{ marginTop: '10px' }}>
              {[p.bg, 'var(--plt-purple-soft)', 'var(--plt-teal-soft)', 'var(--plt-pink-soft)'].map((b, i) => (
                <div className="b-column b-is-3" key={i}>
                  <div style={{ aspectRatio: '1/1', background: b, borderRadius: 'var(--plt-radius-md)', border: i === 0 ? '2px solid var(--plt-pink)' : '1px solid var(--plt-line)', cursor: 'pointer' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="b-column b-is-6">
            <p style={{ textTransform: 'uppercase', letterSpacing: '.14em', fontSize: '12px', color: 'var(--plt-text-muted)', fontWeight: 700, margin: '0 0 6px' }}>{p.vendor}</p>
            <h1 style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 600, fontSize: '40px', color: 'var(--plt-text-strong)', lineHeight: 1.05, margin: '0 0 12px' }}>{p.title}</h1>
            <div style={{ marginBottom: '16px' }}><StarRating value={p.rating} count={p.reviews} size={17} /></div>
            <div style={{ marginBottom: '22px' }}><PriceTag price={p.price} compareAt={p.compareAt} saveLabel={p.save} /></div>

            <div style={{ marginBottom: '18px', maxWidth: '440px' }}>
              <Field label="Color">
                <Select fullWidth defaultValue="Plum">
                  <option>Plum</option><option>Black</option><option>Coral</option>
                </Select>
              </Field>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'stretch', marginBottom: '14px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--plt-line-strong)', borderRadius: 'var(--plt-radius)', overflow: 'hidden' }}>
                <button className="b-button b-is-ghost" onClick={() => setQty((q) => Math.max(1, q - 1))} style={{ borderRadius: 0 }}>−</button>
                <span style={{ minWidth: '40px', textAlign: 'center', fontWeight: 700 }}>{qty}</span>
                <button className="b-button b-is-ghost" onClick={() => setQty((q) => q + 1)} style={{ borderRadius: 0 }}>+</button>
              </div>
              <button className="b-button b-is-link b-is-large b-is-fullwidth" onClick={() => onAdd(p, qty)} style={{ flex: 1 }}>Add to cart · {p.price}</button>
            </div>
            <button className="b-button b-is-primary b-is-outlined b-is-fullwidth" style={{ marginBottom: '22px' }}>♡ Save to wishlist</button>

            <div className="b-columns b-is-mobile b-has-text-centered" style={{ borderTop: '1px solid var(--plt-line)', borderBottom: '1px solid var(--plt-line)', margin: 0 }}>
              {['🚚 Free over $59', '📦 Plain packaging', '🔋 USB rechargeable'].map((t) => (
                <div className="b-column" key={t} style={{ fontSize: '13px', fontWeight: 600, color: 'var(--plt-text)', padding: '14px 6px' }}>{t}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ marginTop: '40px', maxWidth: '760px' }}>
          <div className="b-tabs">
            <ul>
              {[['desc', 'Description'], ['specs', 'Specs'], ['care', 'Care']].map(([k, l]) => (
                <li key={k} className={tab === k ? 'b-is-active' : ''}><a onClick={() => setTab(k)} style={{ cursor: 'pointer' }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="b-content" style={{ paddingTop: '6px' }}>
            {tab === 'desc' && <p>A whisper-quiet, body-safe favorite designed for solo or partnered play. Ten rumbly modes, fully waterproof, and rechargeable in 90 minutes. Made from premium phthalate-free silicone with a velvet-soft finish.</p>}
            {tab === 'specs' && (
              <ul>
                <li>Material: medical-grade silicone</li>
                <li>Modes: 10 vibration patterns</li>
                <li>Waterproof: IPX7</li>
                <li>Battery: 2 hrs runtime · USB-C</li>
              </ul>
            )}
            {tab === 'care' && <p>Wash before and after use with warm water and toy cleaner. Use only water-based lubricants. Store in the included satin pouch, away from direct sunlight.</p>}
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: '44px' }}>
          <h2 style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 600, fontSize: '28px', color: 'var(--plt-text-strong)', margin: '0 0 20px' }}>You might also like</h2>
          <div className="b-columns b-is-multiline">
            {related.map((r) => (
              <div className="b-column b-is-3" key={r.id}>
                <ProductCard vendor={r.vendor} title={r.title} rating={r.rating} reviewCount={r.reviews} price={r.price} compareAt={r.compareAt} saveLabel={r.save} badge={r.badge} badgeColor={r.badgeColor} imageBg={r.bg} onAdd={() => onAdd(r)} onOpen={() => onProduct && onProduct(r)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.ProductScreen = ProductScreen;
