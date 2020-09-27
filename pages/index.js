import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Two Strategists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 >Who are you in the new economy?</h1>
          <p>We can help you with that.</p>
        </section>

        <section>
          <h1>Two strategists – one brand, one culture.</h1>
          <p>Working together to redefine your brand and culture through a meaningful purpose.</p>
        </section>

        <section>
          <h2>A proven process.</h2>
          <p>Flexible. Fast. Effective.</p>

          <h2>REVIEW</h2>
          <p>We review your current brand and culture
          We listen, read, have conversations and together we work out what’s needed for your business.</p>

          <h2>DEFINE</h2>
          <p>We create a purposeful strategy and narrative
          Defining the foundations of your brand and culture from the inside out — to drive business growth.</p>
          <p>(DNA strand from Geyser presso doc – screenshot attached – Hils – anything you want to add/delete?) We start with understanding what you stand, what draws you together and what’s driving you forward. These are the building blocks to creating an aligned brand and culture strategy.</p>

          <h2>EMBED</h2>
          <p>We develop a roadmap
          We make it easy for you to activate the strategy fast and effectively with clear priorities.</p>
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
          <p>The Warehouse Group (quote from Fiona H?)
          ACC (quote from Shaun ?)
          IANZ (quote from Elizabeth?)</p>
          <p>(do we need this?)
          Our success is measured in your people’s engagement lift and your overall business performance.</p>
        </section>

        <section>
          <h2>CONTACT US</h2>
          <p>links</p>
        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
