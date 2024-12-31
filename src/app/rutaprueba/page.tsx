import React from 'react'
import NavbarMenu from '@/components/Navbar'
import HistoriaClinica from '@/components/HistoriaClinica'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div className="min-h-screen flex flex-col" >
      <NavbarMenu />
      <HistoriaClinica />
      <Footer />
    </div>

  )
}
