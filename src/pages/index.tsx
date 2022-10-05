import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Header />
  )
}

{/* <ServiceCard 
      title='Titulo' 
      price='30' 
      benefits={
        [
          {title: 'Área de meus registros', active: true}, 
          {title: 'Dashboard', active: true}, 
          {title: `Acesso de 5 colaboradores`, active: true}, 
          {title: 'Suporte exclusivo', active: false},
          {title: 'Email corporativo', active: false}
        ]
      } 
      collaborators={10} 
    /> */}