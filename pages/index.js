import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Two Strategists</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>

      <header>
        <ul>
          <li><a href="/" className="title">Two Strategists</a></li>
          <li><a href="/" className="email">info@twostrategists.nz</a></li>
        </ul>
      </header>

      <section>
        <h2>Who are you in the new economy?</h2>
        <p class="subtitle">We can help you with that.</p>
      </section>

      <section>
        <h1>Two strategists - one brand, one culture.</h1>
        <p class="subtitle">Working together to redefine your brand and culture through a meaningful purpose.</p>
      </section>

      <section className="process">
        <h1>Flexible. Fast. Effective.</h1>
        <p class="subtitle">A proven process.</p>
        <ul>
          <li>
            <h2>Review</h2>
            <p class="subtitle">We review your current brand and culture.</p>
            <p>We listen, read, have conversations and together we work out what’s needed for your business.</p>
          </li>
          <li>
            <h2>Define</h2>
            <p class="subtitle">
              We create a purposeful strategy and narrative.
            </p>
            <p>Defining the foundations of your brand and culture from the inside out — to drive business growth.</p>
            <p>We start with understanding what you stand for, what draws you together and what’s driving you forward. These are the building blocks to creating an aligned brand and culture strategy.</p>
          </li>
          <li>
            <h2>Embed</h2>
            <p class="subtitle">We develop a roadmap.</p>
            <p>We make it easy for you to activate the strategy fast and effectively with clear priorities.</p>
          </li>
        </ul>
      </section>

      <section className="about">
        <ul>
          <li>
            <h3>Hilary Cootes</h3>
            <p class="subtitle">Brand strategist.</p>
            <p>20 years. 7 agencies. 4 countries.<br/>
            Large international brands and brands for proud local owners.
            </p>
            <a href="https://hilarycootes.com/">hilarycootes.com</a>
          </li>
          <li>
            <h3>Kath Knight</h3>
            <p class="subtitle">Culture strategist.</p>
            <p>20 years. Ex agency owner.<br/>
            Government. FMCG. Energy. Insurance. Finance
            </p>
            <a href="/">LinkedIn</a>
          </li>
          <li>
            <h2>Together.</h2>
            <ul>
              <li><a href="/">The Warehouse Group</a></li>
              <li><a href="/">ACC</a></li>
              <li><a href="/">IANZ</a></li>
            </ul>
            <p>Our success is measured in your people’s engagement lift and your overall business performance.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2><a href="/">Contact us →</a></h2>
      </section>

      <footer>
        <p>copyright two strategists 2020</p>
      </footer>
    </>
  )
}
