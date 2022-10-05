import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

interface ServiceCardProps {
  title: string
  price: string
  collaborators: number
  benefits: ServiceCardBenefitsList[] 
}

export type ServiceCardBenefitsList = {
  title: string
  active: boolean
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Flex w={333} h={420} borderRadius='md' border='1px' flexDir='column' align='center' borderColor='pontogo.secondary'>
      <Text mt='30px' fontSize='20'>{props.title}</Text>
      <Text fontWeight='bold' lineHeight='75px' fontSize="55px">R$ {props.price}</Text>
      <Text color='pontogo.primary' mb='20px'>Uso de {props.collaborators} colaboradores</Text>

      <Stack gap='15px'>
        {
          props.benefits.map(b => {
            if(b.active){
              return (
                <Text key={b.title}><Icon as={AiOutlineCheck} mr='14.5' fontSize='13' /> {b.title}</Text>
              )
            }else {
              return (
                <Text key={b.title} opacity='0.3'><Icon as={AiOutlineClose} mr='14.5' fontSize='13'/> {b.title}</Text>
              )
            }
          })
        }
      </Stack>
    </Flex>
  )
}
