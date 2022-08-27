import { Box } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  toggle: () => void
  isOpen: boolean
}

const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

export default MenuToggle
