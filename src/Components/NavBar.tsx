import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import React from 'react'
import SwitchForDarkMode from './SwitchForDarkMode'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
        <Image boxSize='50px' src={logo}></Image>
        <SearchInput />
        <SwitchForDarkMode />
    </HStack>
  )
}

export default NavBar
