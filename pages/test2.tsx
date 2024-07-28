import { Box, Flex, Heading } from '@chakra-ui/react'

export default function Test2() {
  return (
    <>
      <Flex direction="column" alignItems="center">
        <Box bg="purple.100" w={100} h={100} m={10} />
        <Box bg="purple.100" w={100} h={100} m={10} pos="sticky" top={2} />
        <Box bg="purple.100" w={100} h={100} m={10} />
      </Flex>

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Heading>test2</Heading>
      </Flex>
    </>
  )
}
