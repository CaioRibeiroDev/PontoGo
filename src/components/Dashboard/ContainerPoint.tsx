import { Box, Flex, Text } from "@chakra-ui/react";
import { format } from "date-fns";

export interface IRegisterPoint {
  id?: string
  name: string
  date: Date
  hour: Date 
}

export function ContainerPoint({ name, date, hour }: IRegisterPoint)  {
  const dateCurrent = format(new Date(date), 'dd/MM/yy')
  const hoursCurrent = format(new Date(hour), 'HH:mm')

  return (
    <Flex border='2px' width='100%' ml='30px' borderColor='pontogo.gray' py='10px' pl='5' borderRadius={'lg'} mt='7'>
      <Box borderLeft={"4px"} borderColor='pontogo.secondary' mr='40px'></Box>
      <Flex flexDir='column' mr='110px'>
        <Text fontWeight='bold' fontSize='22px'>{name}</Text>
        <Text color='pontogo.gray'>001</Text>
      </Flex>

      <Text fontSize='22px' color='pontogo.gray' mr='167px'>{dateCurrent}</Text>
      <Text fontSize='22px' color='pontogo.gray'>{hoursCurrent}</Text>
    </Flex>
  )
}