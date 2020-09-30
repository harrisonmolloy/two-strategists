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
        <a href="/" className="title">Two Strategists</a>
        <a href="/" className="email">info@twostrategists.nz</a>
      </header>

      <main>
        <section>
          <h1 >Who are you in the new economy?</h1>
          <h3>We can help you with that.</h3>
        </section>

        <section>
          <h2>Working together to redefine your brand and culture through a meaningful purpose.</h2>
          <h3>Two strategists - one brand, one culture.</h3>

        </section>

        <section>
          <h1>Flexible. Fast. Effective.</h1>
          <h3>A proven process.</h3>
        </section>

        <section>
          <h2>Review</h2>
          <h3>We review your current brand and culture.</h3>
          <h4>We listen, read, have conversations and together we work out what’s needed for your business.</h4>
        </section>

        <section>
          <h2>Define</h2>
          <h3>We create a purposeful strategy and narrative.</h3>
          <h4>Defining the foundations of your brand and culture from the inside out — to drive business growth.</h4>
          <h4>We start with understanding what you stand for, what draws you together and what’s driving you forward. These are the building blocks to creating an aligned brand and culture strategy.</h4>
        </section>

        <section>
          <h2>Embed</h2>
          <h3>We develop a roadmap.</h3>
          <p>We make it easy for you to activate the strategy fast and effectively with clear priorities.</p>
        </section>

        <section className="about">
          <h2>Together.</h2>

          <div className="profile">
            <h3>Hilary Cootes</h3>
            <h4>Brand strategist.</h4>
            <p>20 years. 7 agencies. 4 countries.<br/>
            Large international brands and brands for proud local owners.
            </p>
            <a href="https://hilarycootes.com/">hilarycootes.com</a>
          </div>

          <div className="profile">
            <h3>Kath Knight</h3>
            <h4>Culture strategist.</h4>
            <p>20 years. Ex agency owner.<br/>
            Government. FMCG. Energy. Insurance. Finance
            </p>
            <a href="/">LinkedIn</a>
          </div>

          {/*
          <div className="profile">
            <a href="/">The Warehouse Group (quote from Fiona H?)</a>
            <a href="/">ACC (quote from Shaun ?)</a>
            <a href="/">IANZ (quote from Elizabeth?)</a>
            <p>Our success is measured in your people’s engagement lift and your overall business performance.</p>
            (do we need this?)
          </div>
          */}
        </section>

        <section>
          <h2><a href="/">Contact us →</a></h2>
        </section>
      </main>

      <footer>
        {/* copyright two strategists 2020 */}
      </footer>
    </>
  )
}
