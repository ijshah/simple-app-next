import React from 'react'
import Head from 'next/head'
import Nav from '../components/NavBar'
import PageContain from '../components/PageContain' 

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

  <PageContain />
  </div>
)

export default Home
