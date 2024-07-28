import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Container from '@/components/container'
import Header from '@/components/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
