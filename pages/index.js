import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter! here is your friend hussain ezzi </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app! your friend hussain ezzi is ever reafy to help you. He operates Munfasil Solutions" />
        <p className="description">
          Get started by editing <code>pages/index.js</code> plz dont just copy, also use some of your brains too
        </p>
      </main>

      <Footer />
    </div>
  )
}
