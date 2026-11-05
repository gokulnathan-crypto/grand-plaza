const { useMemo, useState } = React;

const stores = [
  { name: 'Maison & Co.', category: 'Fashion', floor: 'Level 1 · 108', description: 'Everyday essentials and timeless pieces, thoughtfully chosen.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80' },
  { name: 'Cedar & Stone', category: 'Dining', floor: 'Level 2 · 214', description: 'Seasonal plates, warm hospitality, and a menu worth sharing.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80' },
  { name: 'The Daily Press', category: 'Lifestyle', floor: 'Level 1 · 126', description: 'Find your next favourite read, gift, or everyday joy.', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80' },
  { name: 'Forma Living', category: 'Home', floor: 'Level 2 · 208', description: 'Considered details and comfortable pieces for your home.', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=80' },
  { name: 'Northline', category: 'Fashion', floor: 'Level 1 · 112', description: 'Modern outerwear and accessories for every kind of day.', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80' },
  { name: 'Little Orchard', category: 'Dining', floor: 'Level 2 · 220', description: 'Coffee, freshly baked treats, and a sunny corner to unwind.', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80' },
  { name: 'Studio Glow', category: 'Lifestyle', floor: 'Level 1 · 120', description: 'A neighbourhood spot for skincare and a little self-care.', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80' },
  { name: 'Oak & Olive', category: 'Home', floor: 'Level 2 · 206', description: 'Handpicked homewares, ceramics, and thoughtful gifts.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80' },
];

function StoreCard({ store }) {
  return <article className="store-card">
    <img src={store.image} alt={store.name} loading="lazy" />
    <div className="store-info">
      <div className="store-meta">{store.category} · {store.floor}</div>
      <h3>{store.name}</h3>
      <p>{store.description}</p>
      <a className="store-link" href="#visit">Discover store&nbsp; →</a>
    </div>
  </article>;
}

function App() {
  const [category, setCategory] = useState('All');
  const [saved, setSaved] = useState(0);
  const categories = ['All', 'Fashion', 'Dining', 'Lifestyle', 'Home'];
  const filteredStores = useMemo(
    () => category === 'All' ? stores : stores.filter(store => store.category === category),
    [category]
  );

  return <>
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Grand Plaza home">grand<em>plaza</em></a>
      <div className="nav-links"><a href="#stores">Explore</a><a href="#visit">Plan your visit</a><a href="#events">What’s on</a></div>
      <button className="saved" onClick={() => setSaved(saved + 1)} aria-label="Save a favourite">♡&nbsp; Saved{saved ? ` ${saved}` : ''}</button>
    </nav>

    <main id="top">
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">A little more to discover</div>
          <h1>Your city,<br />under one roof.</h1>
          <p>Good finds, great food, and the kind of afternoons that turn into something special. Come make a day of it.</p>
          <a className="primary" href="#stores">Explore the mall&nbsp; →</a>
        </div>
      </section>

      <section className="section" id="stores">
        <div className="section-heading"><div><h2>Find your favourites</h2><p>Meet the places that make Grand Plaza feel like yours.</p></div></div>
        <div className="filters" aria-label="Filter stores by category">
          {categories.map(item => <button key={item} className={`filter${category === item ? ' selected' : ''}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div className="store-grid">{filteredStores.map(store => <StoreCard key={store.name} store={store} />)}</div>
      </section>

      <section className="section" id="visit">
        <div className="visit"><div><h2>Make a day of it.</h2><p>Easy to get to, easy to stay awhile. We’ll save you a spot.</p><a className="primary" href="https://maps.google.com/?q=42+Market+Street" target="_blank" rel="noreferrer">Get directions&nbsp; →</a></div><div className="visit-address">Open today&nbsp; 10am – 9pm<br />42 Market Street, City Centre</div></div>
      </section>
    </main>

    <footer id="events"><span>MONICA HALL · A good day starts here.</span><span><a href="#visit">Accessibility</a>&nbsp; · &nbsp;<a href="#visit">Contact</a>&nbsp; · &nbsp;Instagram</span></footer>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
