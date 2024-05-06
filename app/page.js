//import Image from "next/image";
//import styles from "./page.module.css";
import { redirect } from 'next/navigation'


export default async function Home() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber)
  if (randomNumber%2) {
    redirect('/other')
  }
  return <p>Hii</p>
}