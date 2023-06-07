'use client'
import Aside from './components/aside'
import Form from './components/form';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';


function Home() {

  return (
    <main className={styles.main}>
   <Aside/>
   <Form/>
    </main>
  )
}
export default React.memo(Home);