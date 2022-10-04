import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

interface ServiceCardProps {
  title: string
  price: string
  collaborators: number
  beneficio: ServiceCardBeneficioList[] 
}

export type ServiceCardBeneficioList = {
  title: string
  active: boolean
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Flex w={333} h={420} borderRadius='md' border='1px' flexDir='column' align='center'>
      <Text mt='30px' fontSize='20'>Plano Bronze</Text>
      <Text fontWeight='bold' lineHeight='75px' fontSize="55px">R$ 30</Text>
      <Text color='pontogo.primary' mb='20px'>Uso de 5 colaboradores</Text>

      <Stack gap='15px'>
        {
          props.beneficio.map(b => {
            if(b.active){
              return (
                <Text><Icon as={AiOutlineCheck} mr='14.5' fontSize='13' /> {b.title}</Text>
              )
            }else {
              return (
                <Text color='pontogo.primary'><Icon as={AiOutlineClose} mr='14.5' fontSize='13'/> {b.title}</Text>
              )
            }
          })
        }
      </Stack>
    </Flex>
  )
}
{/* <Text><Icon as={AiOutlineCheck} mr='14.5' fontSize='13' /> Área de meus registros</Text>
<Text><Icon as={AiOutlineCheck} mr='14.5' fontSize='13' /> Dashboard</Text>
<Text><Icon as={AiOutlineCheck} mr='14.5' fontSize='13' /> Acesso de 5 colaboradores</Text>
<Text color='pontogo.primary'><Icon as={AiOutlineClose} mr='14.5' fontSize='13'/> Suporte exclusivo</Text>
<Text color='pontogo.primary'><Icon as={AiOutlineClose} mr='14.5' fontSize='13' /> Email corporativo</Text> */}