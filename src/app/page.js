'use client'
import Aside from './components/aside'
import Form from './components/form';
import { useState, useEffect } from 'react';
import styles from './page.module.css';


export default function Home() {

  const [step, setState] = useState(1)


  return (
    <main className={styles.main}>
   <Aside/>
   <Form/>
    </main>
  )
}
