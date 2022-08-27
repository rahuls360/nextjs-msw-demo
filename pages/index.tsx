import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(d => setData(d.data))
  }, [])
  return (
    <div className={styles.container}>
      <h1>hi</h1>
      <pre>
     {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default Home
