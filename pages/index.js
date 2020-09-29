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
        <a href="/">+64 (0)21 8403 3984</a>
        <a href="/" class="title">Two Strategists</a>
        <a href="/">info@twostrategists.nz</a>
      </header>

      <main>
        <section>
          <h1 >Who are you in the new economy?</h1>
          <h3>We can help you with that.</h3>
        </section>

        <section>
          <h1>Two strategists – one brand,<br/> one culture.</h1>
          <h3>Working together to redefine your brand and culture through a meaningful purpose.</h3>
        </section>

        <section>
          <h1>A proven process.</h1>
          <h3>Flexible. Fast. Effective. →</h3>
        </section>

        <section>
          <h2>→ Review</h2>
          <p>We review your current brand and culture. We listen, read, have conversations and together we work out what’s needed for your business.</p>
        </section>

        <section>
          <h2>→ Define</h2>
          <p>We create a purposeful strategy and narrative. Defining the foundations of your brand and culture from the inside out — to drive business growth.</p>
          {/* DNA strand */}
          <p>We start with understanding what you stand, what draws you together and what’s driving you forward. These are the building blocks to creating an aligned brand and culture strategy.</p>
        </section>

        <section>
          <h2>→ Embed</h2>
          <p>We develop a roadmap. We make it easy for you to activate the strategy fast and effectively with clear priorities.</p>
        </section>

        <section class="about">
          <div class="profile">
            <h3>Hilary Cootes</h3>
            <p>Brand strategist.<br/>
            20 years. 7 agencies. 4 countries.<br/>
            Large international brands and brands for proud local owners.<br/>
            <a href="https://hilarycootes.com/">hilarycootes.com</a>
            </p>
          </div>

          <div class="profile">
            <h3>Kath Knight</h3>
            <p>Culture strategist.<br/>
            20 years. Ex agency owner.<br/>
            Government. FMCG. Energy. Insurance. Finance<br/>
            <a href="/">LinkedIn</a>
            </p>
          </div>
        </section>

        <section>
          <h2>Together.</h2>
          <p>
          <a href="/">The Warehouse Group (quote from Fiona H?)</a>
          <a href="/">ACC (quote from Shaun ?)</a>
          <a href="/">IANZ (quote from Elizabeth?)</a>
          </p>
          <p>Our success is measured in your people’s engagement lift and your overall business performance.(do we need this?)</p>
        </section>

        <section>
          <h2>Contact us →</h2>
        </section>
      </main>

      <footer>
        {/* copyright two strategists 2020 */}
      </footer>
    </>
  )
}
