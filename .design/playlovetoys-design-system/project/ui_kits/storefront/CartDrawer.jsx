/* PlayLoveToys storefront — Cart drawer (slide-over) */
function CartDrawer({ open, items, onClose, onRemove }) {
  const subtotal = items.reduce((s, it) => s + it.priceNum * it.qty, 0);
  const FREE = 59;
  const pct = Math.min(100, Math.round((subtotal / FREE) * 100));
  const remaining = Math.max(0, FREE - subtotal);

  return (
    <div className={'b-drawer' + (open ? ' b-is-active' : '')} style={{ position: 'fixed', inset: 0, zIndex: 50, pointerEvents: open ? 'auto' : 'none' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(46,43,53,.5)', opacity: open ? 1 : 0, transition: 'opacity .24s' }} />
      <aside style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: '400px', maxWidth: '92vw', background: '#fff', boxShadow: 'var(--plt-shadow-lg)', transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .28s cubic-bezier(.22,1,.36,1)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--plt-line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--plt-font-display)', fontWeight: 600, fontSize: '20px', color: 'var(--plt-text-strong)' }}>Your bag ({items.length})</span>
          <button className="b-delete b-is-medium" onClick={onClose} aria-label="close" />
        </div>

        {/* free shipping meter */}
        <div style={{ padding: '14px 20px', background: 'var(--plt-paper)', borderBottom: '1px solid var(--plt-line)' }}>
          <p style={{ fontSize: '13px', margin: '0 0 8px', color: 'var(--plt-text)' }}>
            {remaining > 0 ? <>Add <b style={{ color: 'var(--plt-pink)' }}>${remaining.toFixed(2)}</b> for free discreet shipping</> : <b style={{ color: 'var(--plt-success)' }}>You unlocked free shipping! 🎉</b>}
          </p>
          <progress className="b-progress b-is-link b-is-small" value={pct} max="100" style={{ margin: 0 }}>{pct}%</progress>
        </div>

        {/* items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px' }}>
          {items.length === 0 && <p style={{ color: 'var(--plt-text-muted)', textAlign: 'center', marginTop: '40px' }}>Your bag is empty.</p>}
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', padding: '14px 0', borderBottom: '1px solid var(--plt-line)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: 'var(--plt-radius-md)', background: it.bg, flex: 'none' }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: '14px', color: 'var(--plt-text-strong)', margin: 0 }}>{it.title}</p>
                <p style={{ fontSize: '12px', color: 'var(--plt-text-muted)', margin: '2px 0 6px' }}>{it.vendor} · Qty {it.qty}</p>
                <span className="price-item" style={{ fontSize: '1rem' }}>{it.price}</span>
              </div>
              <button className="b-delete" onClick={() => onRemove(i)} aria-label="remove" />
            </div>
          ))}
        </div>

        {/* footer */}
        <div style={{ padding: '18px 20px', borderTop: '1px solid var(--plt-line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontWeight: 600 }}>Subtotal</span>
            <span className="price-item" style={{ fontSize: '1.25rem' }}>${subtotal.toFixed(2)}</span>
          </div>
          <button className="b-button b-is-link b-is-large b-is-fullwidth b-is-rounded" disabled={items.length === 0}>Checkout</button>
          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--plt-text-muted)', margin: '10px 0 0' }}>Taxes & shipping calculated at checkout</p>
        </div>
      </aside>
    </div>
  );
}
window.CartDrawer = CartDrawer;
