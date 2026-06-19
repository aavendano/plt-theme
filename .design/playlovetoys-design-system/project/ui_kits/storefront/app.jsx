/* PlayLoveToys storefront — interactive shell */
function App() {
  const [screen, setScreen] = React.useState('home');
  const [product, setProduct] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  const priceNum = (s) => parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0;
  const add = (p, qty = 1) => {
    setCart((c) => [...c, { ...p, qty, priceNum: priceNum(p.price) }]);
    setCartOpen(true);
  };
  const remove = (i) => setCart((c) => c.filter((_, idx) => idx !== i));
  const nav = (s) => { window.scrollTo(0, 0); setScreen(s); };
  const openProduct = (p) => { setProduct(p); nav('product'); };

  return (
    <>
      <Header cartCount={cart.length} active={screen} onNav={nav} onCart={() => setCartOpen(true)} />
      {screen === 'home' && <HomeScreen onShop={() => nav('collection')} onProduct={openProduct} onAdd={add} />}
      {screen === 'collection' && <CollectionScreen onProduct={openProduct} onAdd={add} />}
      {screen === 'product' && <ProductScreen product={product} onAdd={add} onShop={() => nav('collection')} onProduct={openProduct} />}
      <Footer />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={remove} />
    </>
  );
}
window.App = App;
