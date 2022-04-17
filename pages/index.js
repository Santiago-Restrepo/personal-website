import Head from 'next/head'
import Layout from '../components/Layout'
import Numbers from '../components/Numbers';
import Hero from '../components/sections/Hero';
import SocialMedia from '../components/SocialMedia';
import AboutMe from '../components/sections/AboutMe';
import Portfolio from '../components/sections/Portfolio';
import MoveButton from '../components/buttons/MoveButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>¡Welcome!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <SocialMedia/>
          <Numbers/>
          <Hero/>
          <AboutMe/>
          <Portfolio/>
      
      </Layout>
    </>
  )
}
