import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import React from 'react'
import SwitchForDarkMode from './SwitchForDarkMode'
import SearchInput from './SearchInput'
interface Props{
  onSearch:(searchText:string)=>void
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack justifyContent={'space-between'}>
        <Image boxSize='50px' src={logo}></Image>
        <SearchInput onSearch={onSearch}/>
        <SwitchForDarkMode />
    </HStack>
  )
}

export default NavBar
