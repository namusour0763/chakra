import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { JsxElement } from 'typescript'

type Props = {
  children?: ReactNode
}

export default function Container({ children }: Props) {
  return (
    <Box w="92vw" maxW="1152px" mx="auto">
      {children}
    </Box>
  )
}
