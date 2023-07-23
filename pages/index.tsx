import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import App1 from '@/pages/Mainpg'

export default function Home() {
  return (
    <>
     <App1/>
    </>
  )
}
