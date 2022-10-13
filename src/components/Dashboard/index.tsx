import { Box, Flex, Text } from "@chakra-ui/react";

export function Dashboard() {
  return (
    <Flex flexDir='column' boxShadow='2xl' width='200px' minH='100%' height='auto'>
      <Box
        bgImage="url('/assets/logo-purple.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize={150}
        width='150px'
        height='12'
        my='7'
        mx='4'
      />

      <Flex borderLeft='4px' borderColor='pontogo.primary' boxShadow='base' align='center' height='20'>
        <Box
          bgImage="url('/assets/dashboard/note.svg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={30}
          width={10}
          height={10}
        />
        <Text ml='2' color='pontogo.primary'>Meus registros</Text>
      </Flex>

    </Flex>
  )
}