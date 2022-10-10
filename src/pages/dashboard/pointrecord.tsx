import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { ContainerPoint, IRegisterPoint } from "../../components/Dashboard/ContainerPoint";
import { AiFillClockCircle } from "react-icons/ai";
import { format } from "date-fns";
import { randomUUID } from "crypto";



export default function PointRecord() {
  const [isPoint, setIsPoint] = useState(false)
  const [point, setPoint] = useState<IRegisterPoint[]>([])

  function handleRegisterPoint() {
    setIsPoint(!isPoint)
  }

  function handleSubmitPoint() {
    const dateCurrent = format(new Date(), 'MM/dd/yy')
    const hoursCurrent = format(new Date(), 'HH:mm')
    //get user name
    const name = 'Caio Ribeiro'
    const pointCurrent = {
      name,
      date: dateCurrent,
      hour: hoursCurrent
    }

    setPoint([...point, pointCurrent])
    setIsPoint(!isPoint)
  }

  return (
    <Flex>
      <Dashboard />

      <Flex flexDir='column'>
        <Button 
          bgColor='pontogo.primary' color='pontogo.white' width='200px' height='50px' fontWeight='400' ml='30px' mt='40px' _hover={{bgColor: 'pontogo.secondary'}}
          onClick={handleRegisterPoint}
        >
          Registrar ponto
        </Button>
        <Flex mt='10'>
          <Text fontWeight='bold' fontSize='22px' ml='30px'>Colaborador</Text>
          <Text fontWeight='bold' fontSize='22px' ml='165px'>Data</Text>
          <Text fontWeight='bold' fontSize='22px' ml='210px'>Hora</Text>
        </Flex>

        {point.map(p => {
          return(
            <ContainerPoint key={p.hour} name={p.name} date={p.date} hour={p.hour} /> 
          )
        })}

      </Flex>

      {isPoint && (
        <>
          <Box w='100%' h='100%'  bgColor='black' opacity={0.3} position={'absolute'} />
          <Flex position={'absolute'} flexDir='column' border='1px' borderRadius='lg' mb='30px' textAlign={'center'} w='400px' h='477px' alignItems={'center'} fontWeight='bold' bgColor={'pontogo.white'} top='20%' left='40%'>
            <Text mt='60px' mb='30px' fontSize={'20px'}>Registrar novo ponto</Text>
            <Icon as={AiFillClockCircle} w='89px' h='89px'/>
            <Text mt='15px' fontWeight={'bold'} color='pontogo.primary' fontSize={'30px'}>10:30</Text>
            <Text color='pontogo.gray' mb='20px'>26/09/2021</Text>
            <Button
              w='200px' h='50px' bgColor='pontogo.primary' color='pontogo.white'  _hover={{bgColor: 'pontogo.secondary'}} mb='10px'
              onClick={handleSubmitPoint}
            >
              Bater ponto
            </Button>
            <Button 
              w='200px' h='50px' bgColor='pontogo.white' _hover={{bgColor: 'red'}} color='pontogo.primary'
              onClick={handleRegisterPoint}
            >
              Cancelar
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  )
}