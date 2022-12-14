import { Box, Button, Flex, FormControl, FormLabel, Input as ChakraInput, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from 'react';
import { apiSite, changeToken } from "../../api/baseURL";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleLogin() {
    const response = await apiSite.post('/login', {
      email,
      password
    })

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('username', response.data.user.name)

    changeToken(response.data.token)
  }

  return (
    <Flex align='center' flexWrap='wrap' justifyContent='center' gap='150'>

      <Flex flexDir='column' align='center'>
        <Box
          bgImage="url('/assets/login/peoples.svg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={500}
          width='485px'
          height='603px'
        />
        <Flex flexDir='column' mt='-2'>
          <Stack gap='2'>
            <Text color='pontogo.primary' fontWeight={700} fontSize='40px' lineHeight='60px' ml='-8'>
              Bem vindo ao PontoGo
            </Text>
            <Text color='pontogo.primary' fontWeight={400} fontSize='25px' lineHeight='25px' w='381px' textAlign='center'>
              Aqui você fará toda gestão do seu sistema de pontos.
            </Text>
          </Stack>
        </Flex>
      </Flex>
      
      <Flex flexDir='column'>
        <Box 
          bgImage="url('/assets/logo-purple.svg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          backgroundSize={280}
          width={280}
          height={74}
        />

        <Flex flexDir='column'>
          <Text color='pontogo.primary' fontWeight={700} fontSize='40px' my='5'>Faça login</Text>
          
          <Box as="form" flex='1'>
            <FormControl mb='5'>
              <FormLabel htmlFor="email" mb='0'>Email</FormLabel>
              <ChakraInput 
                name='email'
                id='email'
                bgColor='white'
                variant='filled'
                border='1px'
                borderColor='black'
                opacity={0.3}
                placeholder='exemplo@email.com'
                width={400}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mb='3'>
              <FormLabel htmlFor="password" mb='0'>Senha</FormLabel>
              <ChakraInput 
                name='password'
                id='password'
                type='password'
                bgColor='white'
                variant='filled'
                border='1px'
                borderColor='black'
                opacity={0.3}
                placeholder='*************'
                width={400}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Link href='/dashboard' passHref>
              <Text color="pontogo.primary" fontSize='15px' lineHeight='22px' fontWeight='400' cursor='pointer' textDecorationLine='underline'>Esqueci minha senha</Text>
            </Link>
          
            <Button 
              as='a' bgColor='pontogo.primary' color='white' fontWeight={400} w='400px' h='50px' mt='6'
              onClick={handleLogin}
            >
              Entrar
            </Button>
          
          </Box>

          
          
          
        </Flex>

      </Flex>

    </Flex>
  )
}