import { Button, Flex } from "@chakra-ui/react";
import { Dashboard } from "../../components/Dashboard";

export default function PointRecord() {
  return (
    <Flex>
      <Dashboard />

      <Button bgColor='pontogo.primary' color='pontogo.white' width='200px' height='50px' fontWeight='400'>Registrar ponto</Button>
    </Flex>
  )
}