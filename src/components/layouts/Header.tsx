import { useState } from 'react'
import { config } from '@/constants'
import Logo from '@/components/layouts/Logo'
import MenuToggle from '@/components/layouts/MenuToggle'
import MenuLink from '@/components/layouts/MenuLink'
import MenuItems from '@/components/layouts/MenuItems'
import HeaderContainer from '@/components/layouts/HeaderContainer'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <HeaderContainer>
      <Logo href="/">{config.SITE_NAME}</Logo>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuItems isOpen={isOpen}>
        <MenuLink href="/">リンク</MenuLink>
      </MenuItems>
    </HeaderContainer>
  )
}

export default Header
