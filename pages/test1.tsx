import {
  Flex,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Button,
  Box,
  Center,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Test1() {
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const textBg = useColorModeValue('gray.100', 'gray.600')

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Card direction="row" overflow="hidden" size="sm" bg={cardBg}>
        <Box width="120px" minW="80px" m="2">
          <Image objectFit="cover" borderRadius="full" src="/sororor31_icon.jpg" alt="" />
        </Box>

        <Stack>
          <CardHeader>
            <Flex>
              <Heading size="md" mr="1">
                ひじりん
              </Heading>
              <Text size="sm" bg={textBg}>
                @sororor31
              </Text>
            </Flex>
          </CardHeader>

          <CardBody>
            <Text py="2">こんばんは( * &apos;&nbsp;&nbsp; ▽ &nbsp;&nbsp;&apos; * )</Text>
          </CardBody>

          <CardFooter>
            <Button colorScheme="twitter">Twitter</Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  )
}
