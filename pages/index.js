import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/index.module.css'
import { fetchData } from '../src/api'
import { Search } from '../src/components/search'

export default function Home({ data }) {
  return (
    <div>
      <nav>
        <div className={styles.container}>
          <div className={styles.nav_container}>
            <div className={styles.nav_brand}>YourUni</div>
            <div className={styles.nav_links_container}>
              <a href="#">Product</a>
              <a href="#">Download</a>
              <a href="#">Pricing</a>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className={styles.hero_container}>
          <div className={styles.hero}>
            <div className={styles.hero_text}>
              <h1 className={styles.hero_title}>Find the university that’s right for you.</h1>
              <p className={styles.hero_paragraph}>Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</p>
            </div>
            <div>
              <img alt="mountain dude" src="/mountain_dude.png" />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div>
            <Search />
          </div>
          <div className={styles.card_container}>
            {data.map(college => <Card college={college} key={college[0]} />)}
          </div>
        </div>
      </main>
    </div>
  )
}

const Card = ({ college }) => {
  const [_, name, city, state, website] = college
  return (
    <a href={`https://${website}`} className={styles.card} target="_blank" rel="noreferrer">
      <div className={styles.card_subtitle}>
        {city} · {state}
      </div>
      <h3 className={styles.card_title}>
        {name}
      </h3>
      <span className={styles.college_link}>
        {website}
      </span>
    </a>
  )
}

export async function getStaticProps() {
  const data = await fetchData()
  return { props: { data } }
}
