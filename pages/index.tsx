import { Button, Flex, Heading, Input, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  const bg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg={bg} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="takuya@example.com" variant="filled" mb={3} type="email" />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button colorScheme="teal">Log in</Button>
      </Flex>
    </Flex>
  )
}
