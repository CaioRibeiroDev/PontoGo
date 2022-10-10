import { Flex, Text, Box} from "@chakra-ui/react";

export interface IRegisterPoint {
  name: string
  date: string
  hour: string 
}

export function ContainerPoint({ name, date, hour }: IRegisterPoint)  {
  return (
    <Flex border='2px' width='100%' ml='30px' borderColor='pontogo.gray' py='10px' pl='5' borderRadius={'lg'} mt='7'>
      <Box borderLeft={"4px"} borderColor='pontogo.secondary' mr='40px'></Box>
      <Flex flexDir='column' mr='110px'>
        <Text fontWeight='bold' fontSize='22px'>{name}</Text>
        <Text color='pontogo.gray'>001</Text>
      </Flex>

      <Text fontSize='22px' color='pontogo.gray' mr='167px'>{date}</Text>
      <Text fontSize='22px' color='pontogo.gray'>{hour}</Text>
    </Flex>
  )
}