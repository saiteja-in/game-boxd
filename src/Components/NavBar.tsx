import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import React from 'react'

const NavBar = () => {
  return (
    <HStack>
        <Image boxSize='50px' src={logo}></Image>
        <Text>navbar</Text>
    </HStack>
  )
}

export default NavBar
