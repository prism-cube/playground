import { Box, Icon } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'

interface Props {
  toggle: () => void
  isOpen: boolean
}

const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? (
        <Icon as={MdClose} w={6} h={6} />
      ) : (
        <Icon as={GiHamburgerMenu} w={6} h={6} />
      )}
    </Box>
  )
}

export default MenuToggle
