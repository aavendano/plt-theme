/* PlayLoveToys storefront — Collection (product listing) screen */
function CollectionScreen({ onProduct, onAdd }) {
  const { ProductCard, Checkbox, Field, Select } = window.PlayLoveToysDesignSystem_88998d;
  const products = window.PLT_PRODUCTS;

  return (
    <div>
      {/* Collection hero */}
      <section style={{ background: 'var(--plt-purple-soft)', padding: '34px 0' }}>
        <div className="b-container">
          <nav className="b-breadcrumb" aria-label="breadcrumbs" style={{ marginBottom: '8px' }}>
            <ul>
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li className="b-is-active"><a aria-current="page">Vibrators</a></li>
            </ul>
          </nav>
          <h1 style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 700, fontSize: '44px', color: 'var(--plt-purple-deep)', margin: '0 0 6px' }}>Vibrators</h1>
          <p style={{ color: 'var(--plt-text)', margin: 0, maxWidth: '560px' }}>From whisper-quiet bullets to iconic wands — our most-loved category, body-safe and rechargeable.</p>
        </div>
      </section>

      <section className="b-section">
        <div className="b-container">
          <div className="b-columns">
            {/* Filters */}
            <div className="b-column b-is-3">
              <div className="b-box">
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--plt-text-strong)', margin: '0 0 14px' }}>
                  <img src="../../assets/icons/icon-filter.svg" alt="" style={{ width: '18px' }} /> Filters
                </p>

                <p className="b-menu-label">Category</p>
                <div style={{ marginBottom: '16px' }}>
                  {['Vibrators (24)', 'For Him (18)', 'Couples (12)', 'Wellness (9)'].map((c, i) => (
                    <div key={c} style={{ marginBottom: '6px' }}><Checkbox defaultChecked={i === 0}>{c}</Checkbox></div>
                  ))}
                </div>

                <p className="b-menu-label">Price</p>
                <div className="b-tags" style={{ marginBottom: '16px' }}>
                  {['Under $30', '$30–$75', '$75–$150', '$150+'].map((p) => (
                    <span key={p} className="b-tag b-is-light" style={{ cursor: 'pointer' }}>{p}</span>
                  ))}
                </div>

                <p className="b-menu-label">Material</p>
                <div>
                  {['Silicone', 'ABS plastic', 'Glass', 'Steel'].map((m) => (
                    <div key={m} style={{ marginBottom: '6px' }}><Checkbox>{m}</Checkbox></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="b-column">
              <div className="b-level b-is-mobile" style={{ marginBottom: '18px' }}>
                <div className="b-level-left"><p style={{ color: 'var(--plt-text-muted)', fontSize: '14px' }}>{products.length} products</p></div>
                <div className="b-level-right" style={{ minWidth: '220px' }}>
                  <Select size="small" defaultValue="featured">
                    <option value="featured">Sort: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top rated</option>
                    <option>Newest</option>
                  </Select>
                </div>
              </div>

              <div className="b-columns b-is-multiline">
                {products.map((p) => (
                  <div className="b-column b-is-4" key={p.id}>
                    <ProductCard
                      vendor={p.vendor} title={p.title} rating={p.rating} reviewCount={p.reviews}
                      price={p.price} compareAt={p.compareAt} saveLabel={p.save}
                      badge={p.badge} badgeColor={p.badgeColor} imageBg={p.bg}
                      onAdd={() => onAdd(p)} onOpen={() => onProduct(p)}
                    />
                  </div>
                ))}
              </div>

              <nav className="b-pagination b-is-centered" style={{ marginTop: '28px' }}>
                <ul className="b-pagination-list">
                  <li><a className="b-pagination-link b-is-current">1</a></li>
                  <li><a className="b-pagination-link">2</a></li>
                  <li><a className="b-pagination-link">3</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.CollectionScreen = CollectionScreen;
