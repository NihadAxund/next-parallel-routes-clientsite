'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import './globals.css'
import { AppContext } from './AppContext'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
  country,
  timezone
}: {
  children: React.ReactNode
  country: React.ReactNode
  timezone: React.ReactNode
}) {

  const [flagurl, setflage] = useState();
  const [countryname,setname] = useState("");
  function ChangeFlag(data:any){
    console.log(data);
    setflage(data.flags.png);
    setname(data.name.common)
    return data;
  }
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='container'>
          <section className='py-6'>{children}</section>

          <section className='flex gap-6'>
            <AppContext.Provider value={{flagurl,countryname,ChangeFlag}}>
              {country}
              {timezone}
            </AppContext.Provider>
          </section>
        </main>
      </body>
    </html>
  )
}
