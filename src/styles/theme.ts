import { extendTheme } from '@chakra-ui/react'
import backgroundI from 'public/assets/background.svg'

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
  }
  // styles: {
  //   global: {
  //     body: {
  //       bg: '#330693',
  //       bgImage: "url('/assets/background.svg')"
  //     }
  //   }
  // }
})