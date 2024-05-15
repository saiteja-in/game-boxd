import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import React from 'react'
import SwitchForDarkMode from './SwitchForDarkMode'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
        <Image boxSize='50px' src={logo}></Image>
        <SwitchForDarkMode />
    </HStack>
  )
}

export default NavBar
