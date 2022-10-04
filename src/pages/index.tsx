import React from 'react'
import { ServiceCard } from '../components/ServiceCard'

export default function Home() {
  return (
    <ServiceCard title='Titulo' price='30' beneficio={[{title: 'teste', active: false}]} collaborators={10} />
  )
}
 