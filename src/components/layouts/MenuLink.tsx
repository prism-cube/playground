import { ReactNode } from 'react'
import NextLink from 'next/link'
import { Button, Text } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  href: string
}

const MenuLink = ({ children, href }: Props) => {
  return (
    <NextLink href={href} passHref>
      <Button variant="ghost">{children}</Button>
    </NextLink>
  )
}

export default MenuLink
