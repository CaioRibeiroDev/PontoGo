import { Box, Flex } from "@chakra-ui/react";

export function Dashboard() {
  return (
    <Flex flexDir='column'>
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
      <Box
        bgImage="url('/assets/dashboard/note.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize={30}
        width={10}
        height={10}
      />

    </Flex>
  )
}