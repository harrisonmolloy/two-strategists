import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Two Strategists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <p>Two Strategists</p>
      </header>

      <main>
        <section>
          <h1 >Who are you in the new economy?</h1>
          <h2>We can help you with that.</h2>
        </section>

        <section>
          <h1>Two strategists – one brand, one culture.</h1>
          <h2>Working together to redefine your brand and culture through a meaningful purpose.</h2>
        </section>

        <section>
          <h1>A proven process.</h1>
          <h3>Flexible. Fast. Effective.</h3>
          <br/>
          <br/>
          <h3>Review</h3>
          <p>We review your current brand and culture. We listen, read, have conversations and together we work out what’s needed for your business.</p>

          <h3>Define</h3>
          <p>We create a purposeful strategy and narrative. Defining the foundations of your brand and culture from the inside out — to drive business growth.</p>
          {/* DNA strand */}
          <p>We start with understanding what you stand, what draws you together and what’s driving you forward. These are the building blocks to creating an aligned brand and culture strategy.</p>

          <h3>Embed</h3>
          <p>We develop a roadmap. We make it easy for you to activate the strategy fast and effectively with clear priorities.</p>
        </section>

        <section>
          <h2>Hilary Cootes</h2>
          <p>Brand strategist.
          20 years. 7 agencies. 4 countries.
          Large international brands and brands for proud local owners.
          (link to Hils website – hilarycootes.com)</p>

          <h2>Kath Knight</h2>
          <p>Culture strategist.
          20 years. Ex agency owner.
          Government. FMCG. Energy. Insurance. Finance
          (link to my LinkedIn?)</p>
        </section>

        <section>
          <h2>Together.</h2>
          <ul>
            <li><p>The Warehouse Group (quote from Fiona H?)</p></li>
            <li><p>ACC (quote from Shaun ?)</p></li>
            <li><p>IANZ (quote from Elizabeth?)</p></li>
          </ul>
          <p>Our success is measured in your people’s engagement lift and your overall business performance.(do we need this?)</p>
        </section>

        <section>
          <h2>CONTACT US</h2>
          <p>links</p>
        </section>
      </main>

      <footer>
        copyright two strategists 2020
      </footer>
    </>
  )
}
