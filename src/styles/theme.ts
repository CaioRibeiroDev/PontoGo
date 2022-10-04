import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    pontogo: {
      "primary": "#330693",
      "secondary": "#8A53FF",
      "gray": '#20292E',
      "white": "#FFF"
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})