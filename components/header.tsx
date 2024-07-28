import { Box, Button, Flex, Heading, HStack, Text, useColorMode } from '@chakra-ui/react'
// import Link from 'next/link'
import { Link } from '@chakra-ui/react'
import { CgMenu } from 'react-icons/cg'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Header() {
  const pages: Array<string> = ['test1', 'test2', 'test3']
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Box mx={{ base: 4, md: 16 }} my={{ base: 2, md: 4 }}>
        <Link href="/">
          <Heading size="lg" fontWeight={600}>
            Home
          </Heading>
        </Link>
      </Box>

      <HStack>
        <Box>
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === 'light' ? <FaMoon size={25} /> : <FaSun size={25} />}
          </Button>
        </Box>

        <HStack spacing={8} ml={2} mr={16} display={{ base: 'none', md: 'flex' }}>
          {pages.map((page, id) => (
            <Link key={id} href={`/${page}`}>
              <Heading key={id} size="md" fontWeight={400}>
                {page}
              </Heading>
            </Link>
          ))}
        </HStack>

        <Box mr={4} display={{ base: 'flex', md: 'none' }}>
          <Button variant="ghost">
            <CgMenu size={25} />
          </Button>
        </Box>
      </HStack>
    </Flex>
  )
}
