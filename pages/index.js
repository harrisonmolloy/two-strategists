import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Two Strategists</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <a href="/" className="title">
          <h4>Two Strategists</h4>
        </a>
        <a href="/" className="email">
          info@twostrategists.nz
        </a>
      </header>

      <main>
        <section>
          <h1>Who are you in the new economy?</h1>
          <p className="subtitle">We can help you with that.</p>
        </section>

        <section>
          <h2>
            Working together to redefine your brand and culture through a
            meaningful purpose.
          </h2>
          <p className="subtitle">Two strategists - one brand, one culture.</p>
        </section>

        <section className="process">
          <h1>Flexible. Fast. Effective.</h1>
          <p className="subtitle">A proven process.</p>
          <ul>
            <li>
              <h2>Review</h2>
              <p className="subtitle-2">
                We review your current brand and culture.
              </p>
              <p>
                We listen, read, have conversations and together we work out
                what’s needed for your business.
              </p>
            </li>

            <li>
              <h2>Define</h2>
              <p className="subtitle-2">
                We create a purposeful strategy and narrative.
              </p>
              <p>
                Defining the foundations of your brand and culture from the
                inside out — to drive business growth.
              </p>
              <p>
                We start with understanding what you stand for, what draws you
                together and what’s driving you forward. These are the building
                blocks to creating an aligned brand and culture strategy.
              </p>
            </li>

            <li>
              <h2>Embed</h2>
              <p className="subtitle-2">We develop a roadmap.</p>
              <p>
                We make it easy for you to activate the strategy fast and
                effectively with clear priorities.
              </p>
            </li>
          </ul>
        </section>

        <section className="about">
          <div className="profile">
            <h3>Hilary Cootes</h3>
            <p className="subtitle">Brand strategist.</p>
            <p>
              20 years. 7 agencies. 4 countries.
              <br />
              Large international brands and brands for proud local owners.
            </p>
            <p>
              <a href="https://hilarycootes.com/">hilarycootes.com</a>
            </p>
          </div>

          <div className="profile">
            <h3>Kath Knight</h3>
            <p className="subtitle">Culture strategist.</p>
            <p>
              20 years. Ex agency owner.
              <br />
              Government. FMCG. Energy. Insurance. Finance
            </p>
            <p>
              <a href="http://geyser.nz/">geyser.nz</a>
            </p>
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

        <section className="contact">
          <h2>
            <a href="mailto:kath@geyser.nz">Contact us →</a>
          </h2>
        </section>
      </main>

      {/*
        <footer>
           <p className="caption">copyright two strategists 2020</p>
        </footer>
      */}
    </>
  );
}
