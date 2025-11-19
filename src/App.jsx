import { useEffect } from 'react'
import './index.css'
import '../css/styles.css'

function App() {
  useEffect(() => {
    // simple scroll reveal animation
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.animate([{opacity:0, transform:'translateY(10px)'},{opacity:1, transform:'translateY(0)'}], {duration:500, fill:'forwards'})
        }
      })
    }, {threshold: .12})
    document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el))
  }, [])

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="brand" aria-label="SneakX Home">
            <div className="logo"></div>
            <span>SneakX</span>
          </a>

          <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input id="globalSearch" type="text" placeholder="Search shoes, brands, colors..." />
          </div>

          <div className="nav-actions">
            <button className="icon-btn" id="themeToggle" title="Toggle theme"><i className="fa-solid fa-moon"></i></button>
            <a className="icon-btn" href="#wishlist" title="Wishlist"><i className="fa-regular fa-heart"></i></a>
            <a className="icon-btn" href="#cart" title="Cart"><i className="fa-solid fa-bag-shopping"></i></a>
          </div>
        </div>
      </header>

      {/* HOME CONTENT */}
      <div id="homeWrap">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-inner">
            <div data-reveal>
              <div className="chips" style={{marginBottom:12}}>
                <span className="chip">Premium</span>
                <span className="chip">Free Shipping</span>
                <span className="chip">New Season</span>
              </div>
              <h1>Step into the future of performance</h1>
              <p>High-tech sneakers engineered for speed, comfort, and control. Designed for the bold. Built for every move.</p>
              <div className="hero-cta">
                <a href="#shop" className="btn btn-primary">Shop Now</a>
                <a href="#collections" className="btn btn-ghost">Browse Collections</a>
              </div>
              <div className="hero-badges">
                <span className="badge">24h Dispatch</span>
                <span className="badge">Easy Returns</span>
                <span className="badge">Secure Checkout</span>
              </div>
            </div>

            <div className="hero-media" data-reveal>
              <img className="shoe" alt="hero shoe" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" />
            </div>
          </div>
        </section>

        {/* Collections */}
        <section id="collections" className="section">
          <div className="container">
            <div className="section-title"><h2>Featured Collections</h2><a className="btn" href="#shop">Explore all</a></div>
            <div className="collections">
              {['Men','Women','Kids','Sports','Trending'].map((c, i)=> (
                <a key={i} className="collection" href="#shop">
                  <img alt={c} src={[
                    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1519744346366-585805b86f77?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop'][i]} />
                  <span className="label">{c}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase carousel */}
        <section className="section">
          <div className="container" data-reveal>
            <div className="section-title"><h2>New Arrivals</h2><div className="chips"><span className="chip">50% Off</span><span className="chip">Limited</span></div></div>
            <div className="carousel">
              <div className="carousel-track" id="newArrivals">
              </div>
            </div>
          </div>
        </section>

        {/* Promo banners */}
        <section className="section">
          <div className="container promos" data-reveal>
            <a className="promo" href="#shop">
              <img alt="promo" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1500&auto=format&fit=crop"/>
              <div className="overlay"></div>
              <div className="content">
                <h3>50% off on New Arrivals</h3>
                <p className="muted">Today only • Use code SNEAK50</p>
              </div>
            </a>
            <a className="promo" href="#shop">
              <img alt="promo2" src="https://images.unsplash.com/photo-1520975922203-b27810ddebb2?q=80&w=1200&auto=format&fit=crop"/>
              <div className="overlay"></div>
              <div className="content">
                <h3>Members get early access</h3>
                <p className="muted">Join the club</p>
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* Routed View Container */}
      <main id="appView" className="section">
        <div className="container" id="viewContainer"></div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand" style={{marginBottom:10}}>
              <div className="logo"></div>
              <span>SneakX</span>
            </div>
            <p style={{color:'var(--muted)'}}>Elevating performance footwear with precision design and next‑gen comfort.</p>
            <div className="social">
              <a aria-label="twitter" href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a aria-label="instagram" href="#"><i className="fa-brands fa-instagram"></i></a>
              <a aria-label="youtube" href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a><br/>
            <a href="#contact">Contact</a><br/>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#faq">FAQ</a><br/>
            <a href="#shipping">Shipping</a><br/>
            <a href="#returns">Returns</a>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p className="muted">Get product drops and exclusive offers.</p>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Subscribed!')}}>
              <div style={{display:'flex', gap:8}}>
                <input placeholder="Email address" style={{flex:1, padding:12, borderRadius:12, border:'1px solid rgba(255,255,255,0.08)', background:'rgba(255,255,255,0.06)', color:'var(--text)'}} />
                <button className="btn btn-primary" type="submit">Join</button>
              </div>
            </form>
          </div>
        </div>
      </footer>

      <button id="toTop" className="icon-btn back-to-top" aria-label="Back to top"><i className="fa-solid fa-arrow-up"></i></button>

      {/* Inline page scripts for the demo app */}
      <script dangerouslySetInnerHTML={{__html:`
      // Sample catalog
      const CATALOG = [
        {id:'1', name:'Nike Air Zoom Pro', brand:'Nike', price:149, color:'Black', category:'Men', rating:4.6, img:'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop', colors:['Black','White','Red'], sizes:['7','8','9','10','11']},
        {id:'2', name:'Adidas Ultraboost X', brand:'Adidas', price:179, color:'White', category:'Women', rating:4.8, img:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop', colors:['White','Black'], sizes:['6','7','8','9']},
        {id:'3', name:'Puma Velocity Nitro', brand:'Puma', price:129, color:'Red', category:'Men', rating:4.4, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop', colors:['Red','Black'], sizes:['7','8','9','10']},
        {id:'4', name:'Nike Pegasus Trail', brand:'Nike', price:159, color:'Blue', category:'Women', rating:4.7, img:'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1000&auto=format&fit=crop', colors:['Blue','Black'], sizes:['6','7','8','9']},
        {id:'5', name:'Adidas NMD R1', brand:'Adidas', price:139, color:'Black', category:'Men', rating:4.5, img:'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1000&auto=format&fit=crop', colors:['Black','White'], sizes:['7','8','9','10','11']},
        {id:'6', name:'Puma RS-X Reinvent', brand:'Puma', price:119, color:'White', category:'Kids', rating:4.2, img:'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1000&auto=format&fit=crop', colors:['White','Red'], sizes:['3','4','5']}
      ];

      // Utilities
      const $ = (s, root=document) => root.querySelector(s);
      const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
      const save = (k,v)=> localStorage.setItem(k, JSON.stringify(v));
      const load = (k,d=[])=> JSON.parse(localStorage.getItem(k)||JSON.stringify(d));

      // Theme toggle
      const themeBtn = document.getElementById('themeToggle');
      const applyTheme = () => {
        const t = localStorage.getItem('theme') || 'dark';
        document.documentElement.classList.toggle('light', t==='light');
        themeBtn.innerHTML = t==='light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'
      }
      themeBtn?.addEventListener('click', ()=>{
        const t = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', t); applyTheme();
      });
      applyTheme();

      // New arrivals populate
      const track = document.getElementById('newArrivals');
      const makeCard = (p) => {
        const li = document.createElement('div'); li.className='product-card';
        li.innerHTML = `
          <div class="product-thumb"><img alt="${p.name}" src="${p.img}"/></div>
          <div class="card-title">${p.name}</div>
          <div class="card-meta"><span class="price">$${p.price}</span><span class="stars">${'★'.repeat(Math.round(p.rating))}</span></div>
          <div class="card-actions">
            <button class="btn btn-primary add-cart" data-id="${p.id}"><i class="fa-solid fa-bag-shopping"></i>&nbsp;Add</button>
            <a class="btn" href="#product?id=${p.id}">View</a>
            <button class="icon-btn wish" title="Wishlist" data-id="${p.id}"><i class="fa-regular fa-heart"></i></button>
          </div>`
        return li;
      }
      if(track){
        CATALOG.forEach(p=> track.appendChild(makeCard(p)));
        // Auto slide scroll
        let autoScroll = setInterval(()=>{ track.scrollBy({left:260, behavior:'smooth'}); if(track.scrollLeft + track.clientWidth >= track.scrollWidth-10){ track.scrollTo({left:0, behavior:'smooth'});} }, 2500);
        track.addEventListener('mouseenter', ()=> clearInterval(autoScroll));
        track.addEventListener('mouseleave', ()=> autoScroll = setInterval(()=>{ track.scrollBy({left:260, behavior:'smooth'}); if(track.scrollLeft + track.clientWidth >= track.scrollWidth-10){ track.scrollTo({left:0, behavior:'smooth'});} }, 2500));
      }

      // Cart + Wishlist
      let cart = load('cart');
      let wish = load('wish');
      const addToCart = (id, qty=1, options={})=>{ const p = CATALOG.find(x=>x.id==id); if(!p) return; const key = id + '|' + (options.size||'') + '|' + (options.color||''); const ex = cart.find(x=>x.key===key); if(ex){ex.qty+=qty;} else {cart.push({key, ...p, ...options, qty});} save('cart', cart); };
      const removeFromCart = (key)=>{ cart = cart.filter(x=>x.key!==key); save('cart', cart); };
      const updateQty = (key, q)=>{ const it = cart.find(x=>x.key===key); if(!it) return; it.qty = Math.max(1, q); save('cart', cart); };
      const toggleWish = (id)=>{ wish = wish.includes(id) ? wish.filter(x=>x!==id) : [...wish, id]; save('wish', wish); };

      // Global search filter (homepage carousel only)
      const search = document.getElementById('globalSearch');
      search?.addEventListener('input', (e)=>{
        const q = e.target.value.toLowerCase();
        if(location.hash.startsWith('#shop')){ render(); return; }
        $$('#newArrivals .product-card').forEach(card=>{
          const t = card.querySelector('.card-title').textContent.toLowerCase();
          card.style.display = t.includes(q) ? '' : 'none';
        })
      })

      // Back to top
      const toTop = document.getElementById('toTop');
      window.addEventListener('scroll', ()=>{ toTop.classList.toggle('show', window.scrollY>400) });
      toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

      // Routing and views
      const V = $('#viewContainer');
      const showHome = (show) => { const hw = $('#homeWrap'); if(hw) hw.style.display = show ? '' : 'none'; }

      const filtersTpl = () => `
        <div class="filters">
          <select id="fCat" class="select">
            <option value="">Category</option>
            <option>Men</option><option>Women</option><option>Kids</option>
          </select>
          <select id="fBrand" class="select">
            <option value="">Brand</option>
            <option>Nike</option><option>Adidas</option><option>Puma</option>
          </select>
          <select id="fColor" class="select">
            <option value="">Color</option>
            <option>Black</option><option>White</option><option>Red</option><option>Blue</option>
          </select>
          <select id="fSort" class="select">
            <option value="">Sort</option>
            <option value="lth">Price: Low to High</option>
            <option value="htl">Price: High to Low</option>
          </select>
          <input id="fSearch" class="select" placeholder="Search" style="flex:1" />
        </div>`;

      const shopView = () => {
        showHome(false);
        const q = (search?.value||'').toLowerCase();
        V.innerHTML = `
          <div class="section-title"><h2>Shop</h2><div class="chips"><a class="chip" href="#wishlist">Wishlist</a><a class="chip" href="#cart">Cart</a></div></div>
          ${filtersTpl()}
          <div class="grid" id="shopGrid"></div>`;
        const grid = $('#shopGrid');
        let items = [...CATALOG];
        const apply = () => {
          let list = [...CATALOG];
          const cat = $('#fCat').value; const brand=$('#fBrand').value; const color=$('#fColor').value; const sort=$('#fSort').value; const s=$('#fSearch').value.toLowerCase() || q;
          if(cat) list = list.filter(i=>i.category===cat);
          if(brand) list = list.filter(i=>i.brand===brand);
          if(color) list = list.filter(i=>i.color===color || i.colors?.includes(color));
          if(s) list = list.filter(i=> (i.name+i.brand+i.color).toLowerCase().includes(s));
          if(sort==='lth') list.sort((a,b)=>a.price-b.price);
          if(sort==='htl') list.sort((a,b)=>b.price-a.price);
          items = list; renderCards();
        }
        const renderCards = () => {
          grid.innerHTML = '';
          items.forEach(p=>{
            const el = document.createElement('div'); el.className='product-card';
            el.innerHTML = `
              <div class="product-thumb"><img alt="${p.name}" src="${p.img}"/></div>
              <div class="card-title">${p.name}</div>
              <div class="card-meta"><span class="price">$${p.price}</span><span class="stars">${'★'.repeat(Math.round(p.rating))}</span></div>
              <div class="card-actions">
                <button class="btn btn-primary" data-add="${p.id}">Add to Cart</button>
                <a class="btn" href="#product?id=${p.id}">View Details</a>
                <button class="icon-btn" data-wish="${p.id}" title="Wishlist"><i class="fa-regular fa-heart"></i></button>
              </div>`
            grid.appendChild(el);
          })
        }
        V.addEventListener('click', (e)=>{
          const add = e.target.closest('[data-add]'); const w = e.target.closest('[data-wish]');
          if(add){ addToCart(add.dataset.add); alert('Added to cart'); }
          if(w){ toggleWish(w.dataset.wish); w.classList.toggle('active'); }
        })
        V.addEventListener('input', (e)=>{
          if(['fCat','fBrand','fColor','fSort','fSearch'].includes(e.target.id)) apply();
        })
        apply();
      };

      const productView = () => {
        showHome(false);
        const id = new URLSearchParams(location.hash.split('?')[1]).get('id');
        const p = CATALOG.find(x=>x.id===id) || CATALOG[0];
        V.innerHTML = `
          <div class="section-title"><h2>${p.name}</h2><a class="btn" href="#shop">Back to shop</a></div>
          <div class="details">
            <div class="gallery">
              <img id="mainImg" alt="${p.name}" src="${p.img}" />
              <div class="thumb-row" id="thumbs"></div>
            </div>
            <div>
              <div class="card-meta" style="margin-bottom:12px"><span class="price" style="font-size:22px">$${p.price}</span><span class="stars">${'★'.repeat(Math.round(p.rating))}</span></div>
              <p style="color:var(--muted); margin-bottom:14px">Engineered cushioning, breathable mesh upper, and reinforced outsole for superior traction. Built for road, trail, and everything between.</p>
              <div class="hr"></div>
              <div style="margin-bottom:10px">Sizes</div>
              <div class="options" id="sizes">${(p.sizes||['7','8','9']).map(s=>`<span class="option" data-size="${s}">${s}</span>`).join('')}</div>
              <div style="margin:12px 0 10px">Colors</div>
              <div class="options" id="colors">${(p.colors||[p.color]).map(c=>`<span class="option" data-color="${c}">${c}</span>`).join('')}</div>
              <div class="card-actions" style="margin-top:16px">
                <button id="addDetail" class="btn btn-primary"><i class="fa-solid fa-bag-shopping"></i>&nbsp;Add to Cart</button>
                <button id="wishDetail" class="btn"><i class="fa-regular fa-heart"></i>&nbsp;Wishlist</button>
              </div>
              <div class="chips" style="margin-top:12px"><span class="chip">Free shipping</span><span class="chip">30-day returns</span></div>
            </div>
          </div>
          <div class="related">
            <div class="section-title"><h3>Related Products</h3></div>
            <div class="carousel"><div class="carousel-track" id="related"></div></div>
          </div>`;
        const thumbs = $('#thumbs');
        const imgs = [p.img, p.img + '&sat=120', p.img + '&h=900'];
        imgs.forEach((src,i)=>{ const im = document.createElement('img'); im.src = src; if(i===0) im.classList.add('active'); im.addEventListener('click', ()=>{ $('#mainImg').src = src; $$('#thumbs img').forEach(t=>t.classList.remove('active')); im.classList.add('active'); }); thumbs.appendChild(im); });
        let sel = {size: (p.sizes||[])[0], color: (p.colors||[])[0]};
        $('#sizes')?.addEventListener('click', e=>{ const o=e.target.closest('[data-size]'); if(o){ sel.size=o.dataset.size; $$('#sizes .option').forEach(x=>x.classList.toggle('active', x===o)); }});
        $('#colors')?.addEventListener('click', e=>{ const o=e.target.closest('[data-color]'); if(o){ sel.color=o.dataset.color; $$('#colors .option').forEach(x=>x.classList.toggle('active', x===o)); }});
        $('#addDetail').addEventListener('click', ()=>{ addToCart(p.id, 1, sel); alert('Added to cart'); });
        $('#wishDetail').addEventListener('click', ()=>{ toggleWish(p.id); alert('Updated wishlist'); });
        const rel = $('#related');
        CATALOG.filter(x=>x.brand===p.brand && x.id!==p.id).concat(CATALOG.filter(x=>x.id!==p.id)).slice(0,6).forEach(r=> rel.appendChild((()=>{const el=document.createElement('div'); el.className='product-card'; el.innerHTML=`<div class="product-thumb"><img src="${r.img}"/></div><div class="card-title">${r.name}</div><div class="card-meta"><span class="price">$${r.price}</span><a class="btn" href="#product?id=${r.id}">View</a></div>`; return el;})()));
      };

      const cartView = () => {
        showHome(false);
        V.innerHTML = `
          <div class="section-title"><h2>Your Cart</h2><a class="btn" href="#shop">Continue shopping</a></div>
          <div class="cart-list" id="cartList"></div>
          <div class="summary">
            <div style="display:flex; justify-content:space-between"><span>Subtotal</span><strong id="subtotal">$0</strong></div>
            <div class="hr"></div>
            <a class="btn btn-primary" href="#checkout">Proceed to Checkout</a>
          </div>`;
        const list = $('#cartList');
        const render = () => {
          list.innerHTML='';
          let total=0; cart.forEach(it=>{ total += it.price*it.qty; const row=document.createElement('div'); row.className='cart-item'; row.innerHTML=`
            <img alt="${it.name}" src="${it.img}" style="border-radius:12px"/>
            <div>
              <div class="card-title">${it.name}</div>
              <div class="muted">${it.brand} • ${it.color||''} ${it.size?('• size '+it.size):''}</div>
              <div class="qty" style="margin-top:8px">
                <button class="icon-btn" data-dec="${it.key}">-</button>
                <span>${it.qty}</span>
                <button class="icon-btn" data-inc="${it.key}">+</button>
                <button class="btn" style="margin-left:8px" data-rem="${it.key}">Remove</button>
              </div>
            </div>
            <strong>$${(it.price*it.qty).toFixed(2)}</strong>`; list.appendChild(row); });
          $('#subtotal').textContent = '$'+total.toFixed(2);
        }
        V.addEventListener('click', (e)=>{
          const inc=e.target.closest('[data-inc]'); const dec=e.target.closest('[data-dec]'); const rem=e.target.closest('[data-rem]');
          if(inc){ const it = cart.find(x=>x.key===inc.dataset.inc); updateQty(it.key, it.qty+1); render(); }
          if(dec){ const it = cart.find(x=>x.key===dec.dataset.dec); updateQty(it.key, Math.max(1,it.qty-1)); render(); }
          if(rem){ removeFromCart(rem.dataset.rem); render(); }
        });
        render();
      };

      const checkoutView = () => {
        showHome(false);
        const items = cart.reduce((n,i)=>n+i.qty,0); const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
        V.innerHTML = `
          <div class="section-title"><h2>Checkout</h2><a class="btn" href="#cart">Back to Cart</a></div>
          <div class="details">
            <form id="checkoutForm">
              <div class="chips" style="margin-bottom:12px"><span class="chip">Secure • SSL</span><span class="chip">No fees</span></div>
              <div style="display:grid; gap:10px">
                <input required class="select" placeholder="Full Name"/>
                <input required type="email" class="select" placeholder="Email"/>
                <input required class="select" placeholder="Address"/>
                <select class="select" required><option>Credit Card</option><option>PayPal</option><option>Cash on Delivery</option></select>
                <button class="btn btn-primary" type="submit">Place Order • $${total.toFixed(2)}</button>
              </div>
            </form>
            <div class="summary">
              <div><strong>Order Summary</strong></div>
              <div class="hr"></div>
              <div>Items: ${items}</div>
              <div>Total: <strong>$${total.toFixed(2)}</strong></div>
            </div>
          </div>`;
        $('#checkoutForm').addEventListener('submit', (e)=>{ e.preventDefault();
          V.innerHTML = `<div style="text-align:center; padding:40px">
            <div class="brand" style="justify-content:center; margin-bottom:14px"><div class="logo"></div><span>SneakX</span></div>
            <h2>Order Confirmed</h2>
            <p class="muted">Your sneakers are on the way. A confirmation has been sent to your email.</p>
            <a class="btn btn-primary" href="#">Back to Home</a>
          </div>`; cart=[]; save('cart', cart);
        });
      };

      const wishlistView = () => {
        showHome(false);
        V.innerHTML = `<div class="section-title"><h2>Wishlist</h2><a class="btn" href="#shop">Continue shopping</a></div><div class="grid" id="wishGrid"></div>`;
        const g = $('#wishGrid');
        const items = CATALOG.filter(p=>wish.includes(p.id));
        if(items.length===0){ g.innerHTML = '<p class="muted">Your wishlist is empty.</p>'; return; }
        items.forEach(p=>{
          const el = document.createElement('div'); el.className='product-card'; el.innerHTML = `
            <div class="product-thumb"><img src="${p.img}"/></div>
            <div class="card-title">${p.name}</div>
            <div class="card-meta"><span class="price">$${p.price}</span><span class="stars">${'★'.repeat(Math.round(p.rating))}</span></div>
            <div class="card-actions">
              <button class="btn btn-primary" data-add="${p.id}">Add to Cart</button>
              <a class="btn" href="#product?id=${p.id}">View</a>
              <button class="btn" data-rm="${p.id}">Remove</button>
            </div>`; g.appendChild(el);
        })
        V.addEventListener('click', (e)=>{
          const add=e.target.closest('[data-add]'); const rm=e.target.closest('[data-rm]');
          if(add){ addToCart(add.dataset.add); alert('Added to cart'); }
          if(rm){ wish = wish.filter(x=>x!==rm.dataset.rm); save('wish', wish); wishlistView(); }
        })
      };

      const aboutView = () => {
        showHome(false);
        V.innerHTML = `
          <div class="section-title"><h2>About Us</h2><a class="btn" href="#">Home</a></div>
          <div class="details">
            <div class="gallery"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"/></div>
            <div>
              <h3>Performance. Craft. Innovation.</h3>
              <p class="muted">We blend cutting‑edge materials with athlete‑tested engineering to create footwear that elevates every step. Our mission is simple: make you faster, lighter, and more confident — on any surface.</p>
              <div class="chips" style="margin-top:12px"><span class="chip">Founded 2024</span><span class="chip">Designed in EU</span><span class="chip">Global shipping</span></div>
            </div>
          </div>`;
      };

      const contactView = () => {
        showHome(false);
        V.innerHTML = `
          <div class="section-title"><h2>Contact Us</h2><a class="btn" href="#">Home</a></div>
          <div class="details">
            <form id="contactForm">
              <div style="display:grid; gap:10px">
                <input required class="select" placeholder="Your Name"/>
                <input required type="email" class="select" placeholder="Email"/>
                <textarea required class="select" placeholder="Message" rows="5"></textarea>
                <button class="btn btn-primary" type="submit">Send Message</button>
              </div>
            </form>
            <div class="summary"><strong>Support</strong><div class="hr"></div><p class="muted">We usually reply within 1 business day.</p></div>
          </div>`;
        $('#contactForm').addEventListener('submit', (e)=>{ e.preventDefault(); alert('Message sent!'); location.hash='#'; })
      };

      const privacyView = () => {
        showHome(false);
        V.innerHTML = `<div class="section-title"><h2>Privacy Policy</h2><a class="btn" href="#">Home</a></div><p class="muted">We respect your privacy. This demo does not collect personal data. Any information you enter stays on your device (localStorage) and is not transmitted.</p>`;
      };

      function render(){
        const h = location.hash || '#';
        if(h==='#' || h==='#home'){ showHome(true); V.innerHTML=''; return; }
        if(h.startsWith('#shop')) return shopView();
        if(h.startsWith('#product')) return productView();
        if(h.startsWith('#cart')) return cartView();
        if(h.startsWith('#checkout')) return checkoutView();
        if(h.startsWith('#wishlist')) return wishlistView();
        if(h.startsWith('#about')) return aboutView();
        if(h.startsWith('#contact')) return contactView();
        if(h.startsWith('#privacy')) return privacyView();
        // fallback
        showHome(true); V.innerHTML='';
      }

      window.addEventListener('hashchange', render);
      render();
      `}} />
    </>
  )
}

export default App
